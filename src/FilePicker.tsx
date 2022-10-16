import React from 'react';

import { files as markdownFiles } from './data/markdown';

interface FilePickerProps {
  markdownId: string | null
  setMarkdownId: (id: string | null) => void
}

const FilePicker = (props: FilePickerProps): JSX.Element => {
  const { markdownId, setMarkdownId } = props;
  const getCell = (id: string): JSX.Element => {
    const style: React.CSSProperties = {};
    if (markdownId === id) style.backgroundColor = 'red';

    return (
      <button type="button" style={style} onClick={(): void => setMarkdownId(id)}>
        {id}
      </button>
    );
  };

  return (
    <div>
      {Object.keys(markdownFiles).map(
        (id) => (
          <span key={id}>
            {getCell(id)}
          </span>
        ),
      )}
    </div>
  );
};

export default FilePicker;
