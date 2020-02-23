import React, { FunctionComponent } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import './index.css';

export interface BaseCodeViewProps {
  codePath: string;
  code: string;
}

const Index: FunctionComponent<BaseCodeViewProps> = props => {
  return (
    <div className="code-mirror-container">
      <CodeMirror
        value={props.code}
        options={{
          mode: 'jsx',
          theme: 'monokai',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Index;
