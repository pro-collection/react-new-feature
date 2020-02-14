import React, { FC, useEffect, useRef, useState } from 'react';

const OuterClickExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContainer = useRef(null);

  // useEffect(()=> {
  //   window.addEventListener('click', )
  // })

  const onClickHandler = () => setIsOpen(!isOpen);

  return (
    <div ref={toggleContainer}>
      <button onClick={onClickHandler}>select an option</button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default OuterClickExample;
