const API_BASE = 'http://localhost:5000';

export async function testServer() {
  const res = await fetch(`${API_BASE}/api/test`);
  const data = await res.json();
  return data.message;
}

export async function loginUser(email, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
}

export async function signupUser(name, email, password) {
  const res = await fetch(`${API_BASE}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return await res.json();
}

export async function createPrompt(prompt) {
  const res = await fetch(`${API_BASE}/api/prompt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  return await res.json();
}
