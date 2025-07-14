import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaBook, FaFileAlt, FaImage, FaEllipsisV, FaRegUserCircle, FaRegEdit, FaSearchPlus, FaRegSave } from "react-icons/fa";
import { useRef } from "react";

const SIDEBAR_WIDTH = 260;

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLibrary, setShowLibrary] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    loadPromptHistory();
  }, [token, navigate]);

  const loadPromptHistory = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/prompt/history", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        const historyData = data.map(item => ({
          id: item._id,
          prompt: item.promptText,
          type: item.type
        }));
        setHistory(historyData);
      }
    } catch (err) {
      console.error("Error loading prompt history:", err);
    }
  };

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
  const handleLogout = () => { localStorage.removeItem("token"); navigate("/signin"); };
  const handleNewNapkin = () => { setShowForm(true); setPrompt(""); setError(""); };

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    if (!token) { setError("❌ Please log in to use this feature"); navigate("/signin"); return; }
    setIsLoading(true); setError("");
    try {
      const res = await fetch("http://localhost:5000/api/prompt/text", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) {
        if (res.status === 401) { localStorage.removeItem("token"); setError("❌ Session expired. Please log in again."); setTimeout(() => navigate("/signin"), 2000); return; }
        const errorText = await res.text(); throw new Error(errorText);
      }
      setPrompt(""); setShowForm(false); await loadPromptHistory();
    } catch (err) { setError("Error generating prompt: " + err.message); }
    finally { setIsLoading(false); }
  };

  const handleGenerateImage = async () => {
    if (!selected || !selected.prompt) return;
    setImageLoading(true); setError("");
    try {
      const res = await fetch("http://localhost:5000/api/prompt/image", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ prompt: selected.prompt }),
      });
      if (!res.ok) {
        if (res.status === 401) { localStorage.removeItem("token"); setError("❌ Session expired. Please log in again."); setTimeout(() => navigate("/signin"), 2000); return; }
        const errorText = await res.text(); setSelected({ ...selected, image: null }); throw new Error(errorText);
      }
      const data = await res.json(); setSelected({ ...selected, image: data.imageUrl });
    } catch (err) { setError("Error generating image: " + err.message); setSelected({ ...selected, image: null }); }
    finally { setImageLoading(false); }
  };

  const handleCancelForm = () => { setShowForm(false); setPrompt(""); setError(""); };

  const handleSelectPrompt = async (item) => {
    if (selected && selected.prompt === item.prompt) return;
    setError(""); setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/prompt/${item.id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setSelected({
          prompt: data.promptText,
          summary: data.type === 'text' ? data.result : null,
          image: data.type === 'image' ? data.result : null
        });
      } else {
        setSelected({ prompt: item.prompt, summary: null, image: null });
      }
    } catch (err) {
      setSelected({ prompt: item.prompt, summary: null, image: null });
    } finally { setIsLoading(false); }
  };

  // Delete prompt from history
  const handleDeletePrompt = async (item) => {
    if (!token) return;
    try {
      await fetch(`http://localhost:5000/api/prompt/${item.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory((prev) => prev.filter((h) => h.id !== item.id));
      if (selected && selected.prompt === item.prompt) setSelected(null);
    } catch (err) {
      setError("Error deleting prompt");
    }
    setOpenMenuId(null);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    if (openMenuId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
  }, [theme]);

  // Theme color variables
  const sidebarBg = theme === 'dark' ? '#23262B' : '#f8f9fa';
  const sidebarColor = theme === 'dark' ? '#fff' : '#222';
  const mainBg = theme === 'dark' ? '#181A1B' : '#fff';
  const topBarBg = theme === 'dark' ? '#23262B' : '#f8f9fa';
  const topBarColor = theme === 'dark' ? '#fff' : '#222';

  return (
    <div className="dashboard-root d-flex" style={{ minHeight: "100vh", minWidth: "100vw", height: '100vh', width: '100vw', background: theme === 'dark' ? '#181A1B' : '#f8f9fa', color: mainBg, padding: 0, margin: 0, marginLeft: -150 }}>
      {/* Sidebar */}
      <aside className="sidebar d-flex flex-column" style={{ width: SIDEBAR_WIDTH, background: sidebarBg, color: sidebarColor, borderRight: '1px solid #23262B', minHeight: '100vh', height: '100vh', padding: 0, overflow: 'hidden' }}>
        {/* Top bar */}
        <div className="d-flex align-items-center justify-content-between px-3 py-3 border-bottom" style={{ borderColor: '#23262B', background: topBarBg, minWidth: 0 }}>
          <span
            className="fw-bold fs-5"
            style={{ cursor: 'pointer', color: sidebarColor }}
            onClick={() => setShowLibrary(true)}
          >
            <FaBook className="me-2" style={{ color: sidebarColor }} />
            Library
          </span>
          <button className="btn btn-primary btn-sm" style={{ borderRadius: 20, fontWeight: 600, background: '#1976d2', border: 'none', padding: '6px 18px', color: '#fff' }} onClick={handleNewNapkin}>+ New Napkin</button>
        </div>
        {/* Tabs */}
        <div className="d-flex align-items-center px-3 pt-3 pb-2" style={{ borderBottom: '1px solid #23262B', background: topBarBg, minWidth: 0, color: sidebarColor }}>
          <span className="fw-bold me-4" style={{ borderBottom: '2px solid #fff', paddingBottom: 4, color: sidebarColor }}>My Napkins</span>
          <span className="text-muted" style={{ cursor: 'not-allowed', opacity: 0.5, color: sidebarColor }}>Recent</span>
        </div>
        {/* Napkin List */}
        {showLibrary && (
          <div className="flex-grow-1 overflow-auto custom-scrollbar" style={{ minHeight: 0, background: sidebarBg }}>
            <ul className="list-group list-group-flush" style={{ background: 'transparent', color: sidebarColor }}>
              {history.map((item, idx) => (
                <li
                  key={item.id}
                  className={`list-group-item d-flex align-items-center justify-content-between bg-transparent border-0 ${selected && selected.prompt === item.prompt ? 'active-napkin' : ''}`}
                  style={{ cursor: 'pointer', borderBottom: '1px solid #23262B', background: selected && selected.prompt === item.prompt ? '#31343C' : 'transparent', padding: '10px 16px', color: sidebarColor, position: 'relative' }}
                  onClick={() => handleSelectPrompt(item)}
                >
                  <div className="d-flex align-items-center flex-grow-1" style={{ minWidth: 0, color: sidebarColor }}>
                    {item.type === 'text' ? <FaFileAlt className="me-2" style={{ color: sidebarColor }} /> : <FaImage className="me-2" style={{ color: sidebarColor }} />}
                    <div
                      className="fw-semibold text-truncate"
                      title={item.prompt}
                      style={{ maxWidth: 130, color: sidebarColor, fontSize: 15 }}
                    >
                      {item.prompt}
                    </div>
                  </div>
                  <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
                    <FaEllipsisV
                      className="ms-2 text-secondary"
                      style={{ fontSize: 18, cursor: 'pointer', opacity: 0.8, color: sidebarColor }}
                      title="More actions"
                      onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                    />
                    {openMenuId === item.id && (
                      <div ref={menuRef} className="dropdown-menu show" style={{ position: 'absolute', right: 0, top: 24, minWidth: 140, zIndex: 10, background: sidebarBg, color: sidebarColor, border: '1px solid #23262B', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                        <button className="dropdown-item" style={{ color: sidebarColor }} onClick={() => { setOpenMenuId(null); handleSelectPrompt(item); }}>Open</button>
                        <button className="dropdown-item text-danger" onClick={() => handleDeletePrompt(item)}>Delete from history</button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Area */}
      <main
        className="flex-grow-1 d-flex flex-column"
        style={{
          minHeight: '100vh',
          height: '100vh',
          background: mainBg,
          color: topBarColor,
          padding: 0,
          margin: 0,
          width: 0
        }}
      >
        {/* Top Navbar */}
        <div className="d-flex align-items-center justify-content-end px-4 py-3 border-bottom" style={{ borderColor: '#23262B', background: topBarBg, width: '100%', minWidth: 0, margin: 0, paddingLeft: 10, color: topBarColor }}>
          {/* <button
            className={`btn btn-outline-${theme === 'dark' ? 'light' : 'secondary'} me-2`}
            style={{ color: topBarColor, borderColor: topBarColor }}
          >
            <FaRegEdit className="me-1" style={{ color: topBarColor }} />Styles
          </button>
          <button
            className={`btn btn-outline-${theme === 'dark' ? 'light' : 'secondary'} me-2`}
            style={{ color: topBarColor, borderColor: topBarColor }}
          >
            <FaRegSave className="me-1" style={{ color: topBarColor }} />Share
          </button> */}
          <div className="dropdown">
            <button className={`btn btn-outline-${theme === 'dark' ? 'light' : 'secondary'} dropdown-toggle d-flex align-items-center`} data-bs-toggle="dropdown" style={{ color: topBarColor, borderColor: topBarColor }}>
              <FaRegUserCircle className="me-2" style={{ fontSize: 22, color: topBarColor }} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><button className="dropdown-item" onClick={toggleTheme}>{theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}</button></li>
              {/* <li><a className="dropdown-item" href="#">👤 Account Settings</a></li> */}
              {/* <li><a className="dropdown-item" href="#">❓ Help & Support</a></li> */}
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger" onClick={handleLogout}>🚪 Sign Out</button></li>
            </ul>
          </div>
        </div>

        {/* Prompt Form */}
        {showForm && (
          <div className="container my-4" style={{ maxWidth: 600, color: topBarColor }}>
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white"><h5 className="mb-0">Create New Napkin</h5></div>
              <div className="card-body">
                <form onSubmit={handlePromptSubmit}>
                  <div className="mb-3">
                    <label htmlFor="promptInput" className="form-label" style={{ color: topBarColor }}>Enter your prompt:</label>
                    <textarea id="promptInput" className="form-control" rows="5" value={prompt} placeholder="Describe what you want to learn or understand..." required onChange={(e) => setPrompt(e.target.value)} disabled={isLoading} style={{ color: topBarColor, background: mainBg, borderColor: topBarColor }}></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" type="submit" disabled={isLoading || !prompt.trim()}>{isLoading ? (<><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Generating...</>) : ("➤ Send")}</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancelForm} disabled={isLoading}>Cancel</button>
                  </div>
                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Main Display Area: Show selected prompt's summary and image */}
        {selected && !showForm && (
          <div className="container-fluid d-flex flex-column align-items-center justify-content-center py-4" style={{ minHeight: 'calc(100vh - 80px)', color: topBarColor }}>
            <div className="w-100" style={{ maxWidth: 900 }}>
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-dark text-white"><h5 className="mb-0">{selected.prompt}</h5></div>
                <div className="card-body" style={{ minHeight: 200, color: topBarColor }}>
                  {isLoading ? (
                    <div className="text-center my-4"><span className="spinner-border" role="status" aria-hidden="true"></span><span className="ms-2">Loading summary...</span></div>
                  ) : selected.summary ? (
                    <div
                      className="p-2"
                      style={{
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.7',
                        fontSize: '1.1rem',
                        background: theme === 'dark' ? '#23272F' : '#f8f9fa',
                        borderRadius: 8,
                        color: topBarColor,
                        maxHeight: 400,
                        overflowY: 'auto'
                      }}
                    >
                      {selected.summary}
                    </div>
                  ) : (
                    <div className="text-muted">No summary available for this prompt.</div>
                  )}
                  {selected.image && typeof selected.image === "string" && (
                    <div className="mt-4 text-center">
                      <img src={selected.image} alt="Generated" className="img-fluid rounded" style={{ maxHeight: "400px", border: '1px solid #333' }} onError={e => { e.target.onerror = null; e.target.src = "/placeholder.png"; }} />
                    </div>
                  )}
                </div>
              </div>
              {/* Toolbar */}
              <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-dark rounded shadow-sm" style={{ maxWidth: 900, color: '#fff' }}>
                <div>
                  <button className="btn btn-outline-light btn-sm me-2" title="Zoom"><FaSearchPlus /></button>
                  <button className="btn btn-outline-light btn-sm me-2" title="Edit"><FaRegEdit /></button>
                  <button className="btn btn-outline-light btn-sm me-2" title="Generate Image" onClick={handleGenerateImage} disabled={imageLoading || !selected.summary}>{imageLoading ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : (<FaImage />)}</button>
                </div>
                <div className="text-success fw-bold d-flex align-items-center"><FaRegSave className="me-2" />Saved</div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && !showForm && (
          <div className="alert alert-danger mt-3 container" style={{ maxWidth: 600, color: topBarColor }}>{error}</div>
        )}

        {/* Welcome Message */}
        {!showForm && !selected && (
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 80px)', color: topBarColor }}>
            <h3 className="mb-3">Welcome to NapkinAI!</h3>
            <p className="text-muted">Click "New Napkin" to start creating your first AI-powered summary.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
