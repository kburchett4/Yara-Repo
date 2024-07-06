import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RulesList = ({ onSelect, path }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/YARA-Rules/rules/contents/${path}`);
        const fileNames = response.data.map(file => file.name);
        setFiles(fileNames);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchRules();
  }, [path]);

  return (
    <div>
      <h2>YARA Rules</h2>
      <ul>
        {files.map(file => (
          <li key={file} onClick={() => onSelect(file)}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default RulesList;
