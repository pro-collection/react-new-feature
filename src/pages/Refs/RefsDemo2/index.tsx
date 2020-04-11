import React, { FC, forwardRef, RefForwardingComponent, useEffect, useImperativeHandle, useRef } from 'react';
import CodeViewContainer from '../../../components/BaseCodeView/CodeViewContainer';

interface Props {
  parent: string;
}

export interface ChildRef {
  name: string;
  age: number;
}

const ChildComponent: RefForwardingComponent<ChildRef, Props> = forwardRef((props, ref) => {
  console.log(props);

  useImperativeHandle(ref, () => ({
    name: 'yanle',
    age: 27,
  }));

  return <div>my child component</div>;
});

const RefsDemo2: FC = () => {
  const childRef = useRef<ChildRef>(null);

  useEffect(() => {
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
    console.log('childRef.current', childRef.current);
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
  }, []);

  return (
    <CodeViewContainer codePath="Refs/RefsDemo2">
      <ChildComponent ref={childRef} parent="name" />
    </CodeViewContainer>
  );
};

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default RefsDemo2;
