import React from 'react';
import ReactMarkdown from 'react-markdown';

const string = '# Hello world!';

function App() {
  return (
    <div className="App">
      <ReactMarkdown>{string}</ReactMarkdown>
    </div>
  );
}

export default App;
