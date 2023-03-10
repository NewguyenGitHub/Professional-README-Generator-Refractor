// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  };
  return "";
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [License-๐](#license-๐)`);
  }
  
  return "";
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License ๐
      Copyright ยฉ ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`);
  };
  return "";
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Github URL ๐
  [${data.userName}](https://github.com/${data.userName}/)

  ## Description ๐
  ${data.description}

  ## Table of Contents ๐
  * [Installations-๐ป](#installations-๐ป)
  * [Usage-๐](#usage-๐)
  ${renderLicenseLink(data.license)}
  * [Contributors-๐](#contributors-๐)
  * [Tests-๐งช](#tests-๐งช)
  * [Questions-โ](#questions-โ)
  
  ## Installations ๐ป
  To install, run these commands:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage ๐
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors ๐
  ${data.contributors}

  ## Tests ๐งช
  To run tests, run these commands:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions โ
  * Author: ${data.author}
  * Email: [${data.userEmail}](mailto:${data.userEmail})
`;
};

module.exports = generateMarkdown;
