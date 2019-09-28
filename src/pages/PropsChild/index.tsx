import React, { FC } from 'react';
import Parent from './Parent';
import ChildRen from './Children';

const PropsChild: FC = () => {
  return (
    <div>
      <h2>PropsChild</h2>
      <hr />
      <Parent>
        <ChildRen />
      </Parent>
    </div>
  );
};

export default PropsChild;
