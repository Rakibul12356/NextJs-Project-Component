import React, { useState } from 'react';
import { Data } from './Data';
import SingleQuestion from './SingleQuestion';

const Questions = () => {
    const [cards]=useState(Data);
    console.log(cards)
    return (
     
    
     <>
      {/**  bg-gradient-to-r from-[#0a0a0a] via-[#512FEB] to-[#0a0a0a] */}
      <section className=" py-20 px-4  bg-[linear-gradient(to_right,_#000000,_#6a0dad,_#000000)] p-6 rounded-lg text-white">
        
        <section className="grid grid-cols-1 gap-4">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
    );
};

export default Questions;