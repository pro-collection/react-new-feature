## useImperativeHandle

### 涉及到的API
- RefForwardingComponent
- useImperativeHandle


可以使得子组件向父组件传递方法

子组件 - `src/pages/UseImperativeHandle/Child/index.tsx`:
```typescript jsx
import React, { RefForwardingComponent, useImperativeHandle } from 'react';

interface Props {
  parent: string;
}

export interface ChildRef {
  name: string;
  age: number;
}

const Child: RefForwardingComponent<ChildRef, Props> = (props, ref) => {
  console.log(props);

  useImperativeHandle(ref, () => ({
    name: 'yanle',
    age: 27,
  }));

  return <div>my child component</div>;
};

export default Child;
``` 


父组件 - `src/pages/UseImperativeHandle/index.tsx`:  
```typescript jsx
import React, { FC, forwardRef, useEffect, useRef } from 'react';
import Child, { ChildRef } from './Child';

const ChildRefComponent = forwardRef(Child);

const UseImperativeHandle: FC = () => {
  const childRef = useRef<ChildRef>(null);

  useEffect(() => {
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
    console.log(childRef.current);
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
  }, []);

  return (
    <>
      <ChildRefComponent ref={childRef} parent="name" />
    </>
  );
};

export default UseImperativeHandle;
```
