import React, { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowUp } from "react-icons/io";

const SingleQuestion = ({question,answer}) => {
     const [showAnswer, setShowAnswer] = useState(false);
    return (
           <>
      <div className="border bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a] rounded-lg  opacity-90 ">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer text-[#FFFFFF]"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul className='text-[#FFFFFF]'>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                 <IoIosArrowDown  className='text-[#FFFFFF]'/>
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                <IoIosArrowUp />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={`${showAnswer && " p-4  text-[#ffffffb3]"} `}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
    );
};

export default SingleQuestion;