interface Pages {
  path: string;
  title: string;
}

export const pages: Pages[] = [
  {
    path: '/props_child',
    title: 'api: this.props.children 传值到子组件',
  },
  {
    path: '/use_imperative_handle',
    title: 'api: UseImperativeHandle - 获取子组件api的办法',
  },
  {
    path: '/router-component',
    title: 'react router',
  },
  {
    path: 'outer-click-example',
    title: '外部点击',
  },
];
