import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import { files as markdownFiles } from './data/markdown';
import FilePicker from './FilePicker';

const container: React.CSSProperties = {
  display: 'flex',
};

const filePicker: React.CSSProperties = {
  flexGrow: 0,
  width: '200px',
};

const markdownEditor: React.CSSProperties = {
  flexGrow: 1,
};

const App = (): JSX.Element => {
  const [markdownId, setMarkdownId] = useState<string | null>(null);

  return (
    <div style={container}>
      <div style={filePicker}>
        <FilePicker markdownId={markdownId} setMarkdownId={setMarkdownId} />
      </div>
      <div style={markdownEditor}>
        <MarkdownEditor markdownId={markdownId} />
      </div>
    </div>
  );
};

export default App;
