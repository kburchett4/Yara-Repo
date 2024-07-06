import React, { useState } from 'react';

const RulesTester = ({ content }) => {
  const [testResult, setTestResult] = useState(null);
  const [error, setError] = useState(null);

  const runTest = () => {
    // Simulate a rule test with sample data (you can replace this with real testing logic)
    try {
      const isValid = content.includes('rule'); // Simplified validation logic
      setTestResult(isValid ? 'Rule is valid' : 'Rule is invalid');
      setError(null);
    } catch (e) {
      setError('Error testing the rule');
      setTestResult(null);
    }
  };

  return (
    <div className="rules-tester">
      <button onClick={runTest}>Test Rule</button>
      {testResult && <div className="test-result">{testResult}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default RulesTester;
