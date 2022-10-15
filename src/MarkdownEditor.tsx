import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
};

const editArea: React.CSSProperties = {
  width: '50%',
};

const textArea: React.CSSProperties = {
  width: '100%',
  height: '100%',
  padding: 0,
  resize: 'none',
};

const previewArea: React.CSSProperties = {
  width: '50%',
};

const MarkdownEditor = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  const onTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={container}>
      <div style={editArea}>
        <textarea style={textArea} value={text} onChange={onTextChange} />
      </div>
      <div style={previewArea}>
        <ReactMarkdown>
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
