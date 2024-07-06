import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DirectoryTree from './components/DirectoryTree';
import RulesViewer from './components/RulesViewer';
import IntegrationPage from './pages/IntegrationPage';
import Visualization from './components/Visualization';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [selectedRepo, setSelectedRepo] = useState('YARA-Rules/rules');
  const [selectedFile, setSelectedFile] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Fetch the repository data and set it in state
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${selectedRepo}/git/trees/master?recursive=1`);
        const data = await response.json();
        const files = data.tree.filter((item) => item.type === 'blob').map((item) => item.path);
        setRepoData(files);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [selectedRepo]);

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/integrations">Integrations</Link>
          </nav>
          <select onChange={(e) => setSelectedRepo(e.target.value)} value={selectedRepo}>
            <option value="YARA-Rules/rules">YARA-Rules/rules</option>
            <option value="Neo23x0/signature-base">Neo23x0/signature-base</option>
            <option value="InQuest/yara-rules">InQuest/yara-rules</option>
            <option value="SigmaHQ/sigma">SigmaHQ/sigma</option>
            <option value="AdvancedThreatResearch/Yara-Rules">AdvancedThreatResearch/Yara-Rules</option>
            <option value="AlienVault-Labs/AlienVaultLabs">AlienVault-Labs/AlienVaultLabs</option>
            <option value="fboldewin/YARA-rules">fboldewin/YARA-rules</option>
            <option value="cuckoosandbox/community">cuckoosandbox/community</option>
            <option value="remnux/yara-rules">remnux/yara-rules</option>
            <option value="micrictor/AutoYara">micrictor/AutoYara</option>
            <option value="stvemillertime/malware-yara">stvemillertime/malware-yara</option>
            <option value="kevoreilly/community">kevoreilly/community</option>
            <option value="corelight/community-id-suricata">corelight/community-id-suricata</option>
            <option value="virusshare/Yara-Rules">virusshare/Yara-Rules</option>
            <option value="threat-hunting-playbook/threat-hunting-playbook">threat-hunting-playbook/threat-hunting-playbook</option>
            <option value="openioc/openioc">openioc/openioc</option>
            <option value="threatgrid/gh-honey">threatgrid/gh-honey</option>
            <option value="misp/misp">misp/misp</option>
            <option value="threatcrowd/malwarehash">threatcrowd/malwarehash</option>
            <option value="fireeye/ioc-parser">fireeye/ioc-parser</option>
            <option value="cisagov/iods">cisagov/iods</option>
            {/* Add more repos here as needed */}
          </select>
          <input type="text" placeholder="Search rules..." />
          <a href={`https://github.com/${selectedRepo}`}>
            <img src="https://github.com/YARA-Rules/rules/blob/master/.github/README.md" alt="build status" />
          </a>
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <DirectoryTree repo={selectedRepo} onFileSelect={handleFileSelect} />
                  <RulesViewer repo={selectedRepo} file={selectedFile} />
                  <Visualization repo={repoData} />
                </>
              }
            />
            <Route path="/integrations" element={<IntegrationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
