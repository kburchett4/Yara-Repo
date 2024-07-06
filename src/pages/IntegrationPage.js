import React from 'react';
import './IntegrationPage.css';

const IntegrationPage = () => {
  return (
    <div className="integration-page">
      <h1>Integrations</h1>
      <section>
        <h2>Using with SIEM</h2>
        <p>
          To integrate YARA rules with your Security Information and Event Management (SIEM) system, follow these detailed steps:
        </p>
        <ol>
          <li>Export the YARA rules you want to use from this application.</li>
          <li>
            Import the exported YARA rules into your SIEM system. 
            <ul>
              <li>For Elastic SIEM, navigate to the 'Detections' section and upload the YARA rules.</li>
              <li>For Splunk, use the Splunk Add-on for YARA to import and manage YARA rules.</li>
              <li>For IBM QRadar, import the YARA rules through the 'Content Management' section.</li>
            </ul>
          </li>
          <li>Configure your SIEM to use these rules for threat detection and alerting.</li>
          <li>Test the integration to ensure that the YARA rules are being applied correctly and that alerts are being generated as expected.</li>
        </ol>
        <p>
          Refer to the documentation of your specific SIEM product for more detailed instructions.
        </p>
      </section>
      <section>
        <h2>Using with EDR</h2>
        <p>
          To integrate YARA rules with your Endpoint Detection and Response (EDR) solution, follow these detailed steps:
        </p>
        <ol>
          <li>Export the YARA rules you want to use from this application.</li>
          <li>
            Import the exported YARA rules into your EDR solution.
            <ul>
              <li>For CrowdStrike Falcon, use the 'Custom IOC' section to import the YARA rules.</li>
              <li>For Carbon Black, upload the YARA rules through the 'Threat Intelligence' tab.</li>
              <li>For SentinelOne, navigate to the 'Threat Library' and add the YARA rules.</li>
            </ul>
          </li>
          <li>Configure your EDR solution to use these rules for endpoint threat detection and response.</li>
          <li>Test the integration to ensure that the YARA rules are being applied correctly and that alerts are being generated as expected.</li>
        </ol>
        <p>
          Refer to the documentation of your specific EDR product for more detailed instructions.
        </p>
      </section>
      <section>
        <h2>Using with Wiz</h2>
        <p>
          To integrate YARA rules with Wiz, follow these detailed steps:
        </p>
        <ol>
          <li>Export the YARA rules you want to use from this application.</li>
          <li>Log into your Wiz account.</li>
          <li>Navigate to the 'Threat Detection' section of the Wiz dashboard.</li>
          <li>Click on 'Import Rules' and select the exported YARA rules file.</li>
          <li>Configure the import settings as needed, including specifying the threat detection criteria and alerting preferences.</li>
          <li>Click 'Save' to apply the imported rules.</li>
          <li>Test the integration by running a few test cases to ensure that the YARA rules are being applied correctly and that alerts are being generated as expected.</li>
        </ol>
        <p>
          Refer to the Wiz documentation or contact Wiz support for more detailed instructions.
        </p>
      </section>
      <section>
        <h2>Using with VirusTotal</h2>
        <p>
          To integrate YARA rules with VirusTotal, follow these detailed steps:
        </p>
        <ol>
          <li>Export the YARA rules you want to use from this application.</li>
          <li>Create a VirusTotal account if you don't already have one.</li>
          <li>Navigate to the 'YARA' section on VirusTotal.</li>
          <li>Click on 'Create Rule Set' and upload your exported YARA rules.</li>
          <li>Configure the rule set by providing a name and description.</li>
          <li>Click 'Save' to apply the rules.</li>
          <li>Use the 'Scan' feature to test the YARA rules against samples in VirusTotal's database.</li>
        </ol>
        <p>
          Refer to the VirusTotal documentation for more detailed instructions.
        </p>
      </section>
      <section>
        <h2>Additional Integrations</h2>
        <p>
          The following integrations are also available:
        </p>
        <ul>
          <li>
            <strong>OSQuery:</strong> Use YARA rules to scan and monitor endpoint configurations and activity. 
            <a href="https://osquery.io/">Learn more</a>
          </li>
          <li>
            <strong>Zeek (formerly Bro):</strong> Integrate YARA rules to inspect network traffic and detect threats.
            <a href="https://zeek.org/">Learn more</a>
          </li>
          <li>
            <strong>MISP:</strong> Import YARA rules into MISP for threat intelligence sharing and analysis.
            <a href="https://www.misp-project.org/">Learn more</a>
          </li>
          <li>
            <strong>Apache Metron:</strong> Use YARA rules for real-time threat detection and analysis on streaming data.
            <a href="https://metron.apache.org/">Learn more</a>
          </li>
          <li>
            <strong>Suricata:</strong> Enhance Suricata's IDS/IPS capabilities with YARA rules for deep packet inspection.
            <a href="https://suricata.io/">Learn more</a>
          </li>
          <li>
            <strong>Snort:</strong> Integrate YARA rules with Snort for enhanced intrusion detection and prevention.
            <a href="https://www.snort.org/">Learn more</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>More Resources</h2>
        <p>
          For more information on integrating YARA rules with various security tools, check out the following resources:
        </p>
        <ul>
          <li>
            <a href="https://www.elastic.co/guide/en/siem/guide/current/yara-rules.html" target="_blank" rel="noopener noreferrer">
              Integrating YARA Rules with Elastic SIEM
            </a>
          </li>
          <li>
            <a href="https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/custom-detection-rules" target="_blank" rel="noopener noreferrer">
              Creating Custom Detection Rules in Microsoft Defender
            </a>
          </li>
          <li>
            <a href="https://www.ibm.com/docs/en/qradar-on-cloud?topic=rules-creating-yara" target="_blank" rel="noopener noreferrer">
              Creating YARA Rules in IBM QRadar
            </a>
          </li>
          <li>
            <a href="https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/sb-intel-sharing.pdf" target="_blank" rel="noopener noreferrer">
              Sharing Intelligence with FireEye
            </a>
          </li>
          <li>
            <a href="https://www.paloaltonetworks.com/cyberpedia/what-is-endpoint-detection-and-response-edr" target="_blank" rel="noopener noreferrer">
              Endpoint Detection and Response (EDR) Overview
            </a>
          </li>
          <li>
            <a href="https://www.crowdstrike.com/endpoint-security-products/falcon-endpoint-protection/" target="_blank" rel="noopener noreferrer">
              CrowdStrike Falcon Endpoint Protection
            </a>
          </li>
          <li>
            <a href="https://www.carbonblack.com/products/cb-response/" target="_blank" rel="noopener noreferrer">
              Carbon Black Response
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IntegrationPage;
