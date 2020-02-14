import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './index.less';

const OuterClickExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);
    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
  });

  const onClickHandler = () => setIsOpen(!isOpen);

  const onClickOutsideHandler = (event: any) => {
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
    if (isOpen && !toggleContainer.current?.contains(event?.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={toggleContainer} className={styles.main_container}>
      <button onClick={onClickHandler}>select an option</button>
      {isOpen && (
        <ul className={styles.option_container}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default OuterClickExample;
