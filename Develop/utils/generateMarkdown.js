// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  };
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [License-📛](#license-📛)`);
  }
  
  return "";
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`);
  };
  return "";
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Github URL 🌐
  [${data.userName}](https://github.com/${data.userName}/)

  ## Description 📝
  ${data.description}

  ## Table of Contents 🗒
  * [Installations-💻](#installations-💻)
  * [Usage-🏆](#usage-🏆)
  ${renderLicenseLink(data.license)}
  * [Contributors-😃](#contributors-😃)
  * [Tests-🧪](#tests-🧪)
  * [Questions-☎](#questions-☎)
  
  ## Installations 💻
  To install, run these commands:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 🏆
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors 😃
  ${data.contributors}

  ## Tests 🧪
  To run tests, run these commands:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions ☎
  * Author: ${data.author}
  * Email: [${data.userEmail}](mailto:${data.userEmail})
`;
};

module.exports = generateMarkdown;
