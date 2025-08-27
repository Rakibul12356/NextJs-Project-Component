import React, { useState } from 'react';
import { Data } from './Data';
import SingleQuestion from './SingleQuestion';

const Questions = () => {
    const [cards]=useState(Data);
    console.log(cards)
    return (
     <>
      <section className=" py-20 px-4  to-[#0a0a0a] p-6 rounded-lg text-white">
        
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