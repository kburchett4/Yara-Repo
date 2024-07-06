import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DirectoryTree.css';

const DirectoryTree = ({ repo, onFileSelect }) => {
  const [tree, setTree] = useState({});
  const [expandedNodes, setExpandedNodes] = useState({});

  useEffect(() => {
    const fetchRepoTree = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repo}/git/trees/master?recursive=1`);
        const files = response.data.tree.filter(item => item.type === 'blob' && !item.path.includes('index'));
        const directories = {};

        files.forEach(file => {
          const parts = file.path.split('/');
          parts.reduce((acc, part, index) => {
            if (!acc[part]) {
              acc[part] = index === parts.length - 1 ? file.path : {};
            }
            return acc[part];
          }, directories);
        });

        setTree(directories);
      } catch (error) {
        console.error('Error fetching repo tree:', error);
      }
    };

    fetchRepoTree();
  }, [repo]);

  const toggleNode = (node) => {
    setExpandedNodes({
      ...expandedNodes,
      [node]: !expandedNodes[node]
    });
  };

  const renderTree = (nodes, depth = 0) => {
    return (
      <ul>
        {Object.keys(nodes).map(key => (
          <li key={key} style={{ marginLeft: depth * 20 }}>
            {typeof nodes[key] === 'string' ? (
              <button className="file-button" onClick={() => onFileSelect(nodes[key])}>
                <i className="fas fa-file-alt"></i> {key}
              </button>
            ) : (
              <>
                <span className="folder-name" onClick={() => toggleNode(key)}>
                  <i className={`fas ${expandedNodes[key] ? 'fa-folder-open' : 'fa-folder'}`}></i> {key}
                </span>
                {expandedNodes[key] && renderTree(nodes[key], depth + 1)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="directory-tree">{renderTree(tree)}</div>;
};

export default DirectoryTree;
