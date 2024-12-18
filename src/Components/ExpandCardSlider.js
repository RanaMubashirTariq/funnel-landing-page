import React, { useState } from 'react';
import './ExpandCardSlider.css';

export default function ExpandCardSlider() {
  const [activeCard, setActiveCard] = useState(null);

  // Array of card data
  const cards = [
    { id: 1, url: "pic-1.jpeg", title: "Card 1", content: "This is the content for card 1." },
    { id: 2, url: 'pic-1.jpeg', title: "Card 2", content: "This is the content for card 2." },
    { id: 3, url: 'pic-1.jpeg', title: "Card 3", content: "This is the content for card 3." },
    { id: 4, url: 'pic-1.jpeg', title: "Card 4", content: "This is the content for card 4." },
    { id: 5, url: 'pic-1.jpeg', title: "Card 5", content: "This is the content for card 5." },
  ];

  // Function to handle card click
  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id); // Toggle card expansion
  };

  return (
    <div className='cards-container'>
          <div className="card-slider">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${activeCard === card.id ? "active" : ""}`}
                onClick={() => handleCardClick(card.id)}
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className='inner-content-hide'>
                <h2>{card.title}</h2>
                {activeCard === card.id && <p>{card.content}</p>}
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}
