import React, { FC, useState, Profiler as ReactProfiler, ProfilerOnRenderCallback } from 'react';

const Profiler: FC = () => {
  const [value, setValue] = useState('');

  const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.group('info');
    console.log('id', id);
    console.log('phase', phase);
    console.log('actualDuration', actualDuration);
    console.log('baseDuration', baseDuration);
    console.log('startTime', startTime);
    console.log('commitTime', commitTime);
    console.log('interactions', interactions);
    console.groupEnd();
  };

  return (
    <div>
      <ReactProfiler id="profiler" onRender={onRender}>
        <input type="text" onChange={event => setValue(event.target.value)} /> <br />
        <p>输出内容：{value}</p>
      </ReactProfiler>
    </div>
  );
};

export default Profiler;
