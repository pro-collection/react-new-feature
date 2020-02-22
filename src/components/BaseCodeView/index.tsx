import React, { FunctionComponent, useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import './index.css';

interface BaseCodeViewProps {
  codePath: string;
}

const Index: FunctionComponent<BaseCodeViewProps> = props => {
  const [code, updateCode] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/code/${props.codePath}/`);
      updateCode(response.data.code);
    };
    fetchData();
  }, []);

  return (
    <>
      {code && (
        <div className="code-mirror-container">
          <CodeMirror
            value={code}
            options={{
              mode: 'jsx',
              theme: 'monokai',
              lineNumbers: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Index;
