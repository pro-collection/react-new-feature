import React, { FC, useState } from 'react';

const Profiler: FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input type="text" onChange={event => setValue(event.target.value)} /> <br />
      <span>{value}</span>
    </div>
  );
};

export default Profiler;
