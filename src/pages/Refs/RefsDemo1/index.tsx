import React, { createRef, FC, forwardRef, RefForwardingComponent, useEffect } from 'react';
import CodeViewContainer from '../../../components/BaseCodeView/CodeViewContainer';

/*
 * React 组件隐藏其实现细节，包括其渲染结果。其他使用 FancyButton 的组件通常不需要获取内部的 DOM 元素 button 的 ref。
 * 这很好，因为这防止组件过度依赖其他组件的 DOM 结构。
 *
 * Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。
 * 在下面的示例中，FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button：
 *
 * */
const RefsDemo1: FC = () => {
  const buttonRef = createRef();
  useEffect(() => {
    console.log('buttonRef.current', buttonRef.current);
  }, []);

  return (
    <CodeViewContainer codePath="Refs/RefsDemo1">
      <FancyButton ref={buttonRef} />
    </CodeViewContainer>
  );
};

interface RefForwardProps {}

interface FancyButtonProps {}

const FancyButton: RefForwardingComponent<RefForwardProps, FancyButtonProps> = forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

export default RefsDemo1;
