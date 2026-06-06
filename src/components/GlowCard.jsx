import React, { useRef } from 'react'

function GlowCard({card, children, index}) {
  const cardRefs = useRef([]);

  // track the mouse postion and use visual effect
  function handleMouseMove(index) {
  return function (e) {
    const el = cardRefs.current[index];
    if(!el) return;


    //get the mouse position relative to card
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left -rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calculate the angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 /Math.PI);

    angle = (angle + 360) % 360;

    el.style.setProperty('--start', `${angle + 60}`)

  };
}

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} 
    onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow'/>
      <div className='flex items-center gap-1 mb-5'>
        {Array.from({length: 5}, (_, i) => (
          <img src='/images/star.png' key={i} alt='star' className='size-5'/>
        ))}
      </div>
      <div className='mb-5'>
        <p className='text-white-50 text-lg'>{card.review}</p>

      </div>
      {children}
    </div>
  )
}

export default GlowCard