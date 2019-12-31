## 关于child以及父子组件传递参数的示例

<!-- toc -->

- [场景描述](#%E5%9C%BA%E6%99%AF%E6%8F%8F%E8%BF%B0)
- [单个子组件](#%E5%8D%95%E4%B8%AA%E5%AD%90%E7%BB%84%E4%BB%B6)
- [父组件](#%E7%88%B6%E7%BB%84%E4%BB%B6)
- [如果父组件包裹多个子组件的场景](#%E5%A6%82%E6%9E%9C%E7%88%B6%E7%BB%84%E4%BB%B6%E5%8C%85%E8%A3%B9%E5%A4%9A%E4%B8%AA%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9C%BA%E6%99%AF)
- [调用示例](#%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B)

<!-- tocstop -->

### 场景描述
如果父组件， 处理了很多逻辑， 这些逻辑都是封装在父级组件里面的， 如何传递给子组件呢？


### 单个子组件
`src/pages/PropsChild/Child`：               
```typescript jsx
import React, { FC } from 'react';

interface Props {
  name?: string;
  index?: number;
}

const Child: FC<Props> = props => {
  console.log('child.props output', props);

  return <div>我是children 组件</div>;
};

export default Child;
```


### 父组件
如果父组件封装逻辑希望给子组件传递的时候， 这个时候需要这样
`src/pages/PropsChild/Parent`:
```typescript jsx
import React, { FC, ReactElement, cloneElement } from 'react';

const Parent: FC = props => {
  return (
    <>
      <h3>我是parent 组件</h3>
      {props.children &&
        cloneElement(props.children as ReactElement, {
          hello: '我是单个parent示例',
        })}
    </>
  );
};

export default Parent;
```
其中 `props.children` 就是子组件， 可以在使用 `cloneElement` 的时候， 第二个参数， 就是可以给子组件传递参数了。

### 如果父组件包裹多个子组件的场景
如果如组件包裹一个子组件的时候
```typescript jsx
<Parent>
  <Child />
</Parent>
```
就比如上面这个场景， 这个时候， `props.children` 是一个对象， 但是如果， 包裹多个数组的时候， `props.children` 就成为了一个数组。
为了判定 是数组还是对象的场景， 需要做单独的代码判定。 

其实还有简单的办法， 如下 `src/pages/PropsChild/ParentChildren`：
```typescript jsx
import React, { FC, Children as RChildren, cloneElement, ReactElement } from 'react';
import { get } from 'lodash';

const ParentChildren: FC = props => {
  console.log('props.children', props.children);
  console.log('RChildren', RChildren);
  return (
    <>
      {RChildren.map(props.children, (child, index) => {
        console.log('child.props inject', get(child, 'props'));
        return cloneElement(child as ReactElement, {
          index,
        });
      })}
    </>
  );
};

export default ParentChildren;
``` 

### 调用示例                        
`src/pages/PropsChild/index.tsx`：                   
```typescript jsx
import React, { FC } from 'react';
import Parent from './Parent';
import Child from './Child';
import ParentChildren from './ParentChildren';

const PropsChild: FC = () => {
  return (
    <div>
      <h2>PropsChild</h2>
      <hr />
      <h3>单个child 场景</h3>
      <Parent>
        <Child />
      </Parent>

      <hr />
      <h3>多个childRen场景</h3>
      <ParentChildren>
        <Child name="first child" />
        <Child />
        <Child />
      </ParentChildren>
    </div>
  );
};

export default PropsChild;
```
