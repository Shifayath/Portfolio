'use client'
import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import Link from 'next/link';
function Portfolio() {

  const [activeIndex, setActiveIndex] = useState(0);
  const highlightRef = useRef(null);
  const segmentsRef = useRef([]);

  useEffect(() => {
    updateHighlight();
    // Recalculate highlight position on window resize
    window.addEventListener('resize', updateHighlight);
    return () => window.removeEventListener('resize', updateHighlight);
  }, [activeIndex]);

  const updateHighlight = () => {
    const activeSegment = segmentsRef.current[activeIndex];
    if (highlightRef.current && activeSegment) {
      highlightRef.current.style.width = `${activeSegment.offsetWidth}px`;
      highlightRef.current.style.left = `${activeSegment.offsetLeft}px`;
    }
  };

  const handleSegmentClick = (index) => {
    setActiveIndex(index);
  };

  const cardData = [
    {
      id: 1,
      image: '/imgs/Page1.png',
      description: 'A Simpele Animated Landing Page With Some Iamges. Using Html,css',
      link: './landing/one',
    },
    {
      id: 2,
      image: '/imgs/Page2.png',
      description: 'A quite Basic Landing Page In Just Using Html,css.',
      link: '../landing/two',
    },
    {
      id: 3,
      image: '/imgs/Page3.png',
      description: 'This is quite Simple Infinity Scrolling Text.',
      link: '../landing/three',
    },
    {
      id: 4,
      image: '/imgs/Page4.PNG',
      description: 'News Media Landing Page',
      link: '../landing/four',
    },
    {
      id: 5,
      image: '/imgs/Page5.PNG',
      description: 'Clone Web Page Of the this is digital website.',
      link: '../landing/five',
    },
    {
      id: 6,
      image: '/imgs/Page6.png',
      description: 'Inifinity loop Animation.',
      link: '../landing/six',
    },
    {
      id: 7,
      image: '/imgs/Page7.png',
      description: 'Nikey Landing Page.',
      link: '../landing/seven',
    },
    {
      id: 8,
      image: '/imgs/Page8.png',
      description: 'Coca Cola Landing Page.',
      link: '../landing/eight',
    },
    {
      id: 9,
      image: '/imgs/Page9.png',
      description: 'works.studio Clone Page.',
      link: '../landing/nine',
    },

  ];
  return (
    <section className="section" id="blog">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>

        <div className="segmented-control">
          {['ALL', 'Website', 'Landing Pages'].map((label, index) => (
            <button
              key={index}
              ref={(el) => (segmentsRef.current[index] = el)}
              className={`segment ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSegmentClick(index)}
            >
              {label}
            </button>
          ))}
          <div ref={highlightRef} className="highlight"></div>
        </div>

        {activeIndex !== 1 && <div className="cardList">
          {cardData.map((card) => (
            <Link href={card.link}>
              <div key={card.id} className={card.id === 5 || card.id === 9 ? "cardDisable" : "card"}>
                <img src={card.image} alt="Card" className="cardImage" />
                <p className="cardDescription">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>}
      </div>
    </section>
  );
}

export default Portfolio;
