import React from 'react';

const Documentation = () => {
  return (
    <div className="documentation">
      <h2>YARA Rules Documentation</h2>
      <h3>Introduction</h3>
      <p>YARA is a tool aimed at (but not limited to) helping malware researchers identify and classify malware samples.</p>
      
      <h3>Writing YARA Rules</h3>
      <p>A YARA rule consists of two main sections: the rule metadata and the rule condition. The metadata includes information such as the rule's author, description, and reference. The condition specifies the pattern that the rule is trying to match.</p>
      
      <pre>{`
rule ExampleRule {
  meta:
    author = "John Doe"
    description = "Example rule to demonstrate YARA syntax"
  
  strings:
    $a = "example"
    $b = { E2 34 A1 C8 }

  condition:
    $a or $b
}`}</pre>

      <h3>Using YARA Rules</h3>
      <p>YARA rules can be used in various ways, such as scanning files, directories, or memory. The following command demonstrates how to use YARA to scan a directory:</p>
      <pre>{`yara -r /path/to/rules.yar /path/to/scan`}</pre>
      
      <h3>Advanced Features</h3>
      <p>YARA supports advanced features such as modules, which extend the capabilities of YARA by providing additional functionalities. For example, the PE module allows you to create rules that match specific characteristics of PE files:</p>
      <pre>{`
import "pe"

rule PEFileWithSpecificCharacteristics {
  condition:
    pe.number_of_sections == 5
}`}</pre>

      <h3>Tutorials</h3>
      <p>Check out the following tutorials to learn more about YARA:</p>
      <ul>
        <li><a href="https://example.com/tutorial1">Introduction to YARA</a></li>
        <li><a href="https://example.com/tutorial2">Advanced YARA Techniques</a></li>
        <li><a href="https://example.com/tutorial3">Using YARA with SIEM Systems</a></li>
      </ul>
    </div>
  );
};

export default Documentation;
