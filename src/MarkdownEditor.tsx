import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { files as markdownFiles } from './data/markdown';

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

interface MarkdownEditorProps {
  markdownId: string | null
}

const MarkdownEditor = (props: MarkdownEditorProps): JSX.Element => {
  const { markdownId } = props;

  const [text, setText] = useState<string>('Hey');

  useEffect(() => {
    setText(markdownId ? markdownFiles[markdownId] : 'No text');
  }, [markdownId]);

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
