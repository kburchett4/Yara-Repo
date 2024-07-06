import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RulesTester from './RulesTester';
import './RulesViewer.css';

const extractMetadata = (content) => {
  const meta = {};
  const metaRegex = /meta:(.*?)strings:/s;
  const metaMatch = content.match(metaRegex);
  if (metaMatch) {
    metaMatch[1].split('\n').forEach(line => {
      const [key, value] = line.split('=').map(part => part.trim());
      if (key && value) {
        meta[key] = value.replace(/["']/g, '');
      }
    });
  }
  return meta;
};

const RulesViewer = ({ repo, file }) => {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    if (file) {
      const fetchFileContent = async () => {
        try {
          const response = await axios.get(`https://raw.githubusercontent.com/${repo}/master/${file}`);
          setContent(response.data);
          setMetadata(extractMetadata(response.data));
        } catch (error) {
          console.error('Error fetching file content:', error);
        }
      };

      fetchFileContent();
    }
  }, [repo, file]);

  const handleExport = (format) => {
    let data;
    if (format === 'json') {
      data = JSON.stringify({ content, metadata }, null, 2);
    } else {
      data = content;
    }

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file}.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert('Rule copied to clipboard!');
    });
  };

  return (
    <div className="rules-viewer">
      <h2>{file}</h2>
      <div className="metadata">
        {Object.entries(metadata).map(([key, value]) => (
          <div key={key}><strong>{key}:</strong> {value}</div>
        ))}
      </div>
      <div className="export-buttons">
        <button onClick={() => handleExport('txt')}>Export as TXT</button>
        <button onClick={() => handleExport('json')}>Export as JSON</button>
        <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      </div>
      <RulesTester content={content} />
      <pre>{content}</pre>
    </div>
  );
};

export default RulesViewer;
