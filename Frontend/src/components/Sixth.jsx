import React, { useState } from 'react';
import './Sixth.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "You are doing an amazing job - Napkin is so very useful for teaching and other purposes, especially in my case, to provide visuals that bring textual ideas to life. I am finding it invaluable already, and will be promoting it to our school district. Thank you for making this happen!",
    name: "Francesca",
    username: "@frrann",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I am obsessed with Napkin. I’m always on the lookout for tools that enhance creativity, streamline workflows, and help communicate ideas effectively—and Napkin absolutely nails it. The intuitive design and functionality of Napkin make it a game-changer. I can already see the incredible value it brings to professionals across education, training, and even community-building initiatives.",
    name: "Alfie",
    username: "@alfiemitchell123",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I’m seriously in love with your product! How many hours could I have saved in the last 4 years, if I would have known you then. The simplicity of this tool is absolutely phenomenal, it’s intuitive and easy to understand. Thank you for letting us try this out.",
    name: "Hikmah",
    username: "@Hikmahx",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "There are so many new AI apps that promise the world, and they are getting better. This is one that I've been able to use off of the bat. Yes, I would take the idea and create slick data and information graphics that fit the brand I'm working in. As a design professor, this is really such a gem and it could go so much further. So all this to say, NICE JOB! I'm so excited about where you take this application.",
    name: "Nuel",
    username: "@ijklmopffs",
    img: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-avatar-nuel.webp&w=128&q=75s",
  },
  {
    text: " As I was making my 1st Napkin today, I told myself I was going to gatekeep your tool as my little secret. The very next second, I answered a phone call and immediately let the cat out of the bag!! Hats off to you & your team. It’s one of the most impressive tools I've used in a long time and something I'll use forever.",
    name: "Michelle",
    username: "@maberizk",
    img: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-avatar-michelle.webp&w=128&q=75",
  },
  {
    text: " I just wanted to take a moment to congratulate you all on the incredible work you’re doing! As a Project Manager, I’ve found your tool immensely helpful in my professional development. I often use Napkin to create presentations or simply to generate visual ideas based on my own concepts, and I must say, it’s been a game-changer for me.",
    name: "Michelle",
    username: "@maberizk",
    img: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-avatar-michelle.webp&w=128&q=75",
  },
   {
    text: "I recently used the Napkin platform to create visuals for a LinkedIn article, and I was impressed by how seamless the process was. The results were not only visually engaging but also aligned with the professional standards I aim to maintain. I look forward to incorporating it even more in the future.",
    name: "Nuel",
    username: "@ijklmopffs",
    img: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-avatar-nuel.webp&w=128&q=75s",
  },



];

const Sixth = () => {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start < testimonials.length - 1) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <section className="sixth-section">
      <div className="sixth-header">
        <h2>
          Don’t take our word for it.
        </h2>
        <div className="arrows">
          <button onClick={prev}><FaArrowLeft /></button>
          <button onClick={next}><FaArrowRight /></button>
        </div>
      </div>

      <div className="testimonial-slider">
        <div className="testimonial-track" style={{ transform: `translateX(-${start * 360}px)` }}>
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <p>{item.text}</p>
              <div className="user-info">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.username}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sixth;
