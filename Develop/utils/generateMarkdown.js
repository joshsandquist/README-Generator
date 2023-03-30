// This function will take in the user input for license and generate the correct badge
// shields.io was used to pull in badges
// If no license is selected, an empty string will be returned
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL') {
    return '![GPL License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

// This function takes in the same perameters as the previous funtion, but now will generate a link to the license's page
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
      return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL') {
      return '[GPL License](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
      return '';
    }
  }

// This function will generate the markdown section for a licesnce, and include the selected license within the section.
// No section will be generated if a license is not selected.
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `## License

  This project is licensed under the ${renderLicenseLink(license)}.
    `;
  } else if (license === 'Apache') {
    return `## License

  This project is licensed under the ${renderLicenseLink(license)}.
    `;
  } else if (license === 'GPL3') {
    return `## License

  This project is licensed under the ${renderLicenseLink(license)}.
    `;
  } else {
    return '';
  }
}

// This function combines all of out user data into a markdown template.
function generateMarkdown(data) {
  // variables that take the user input for license, run them in our previous functions, and concatinate them into the markdown.
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions or comments about this application, please feel free to contact me at ${data.email}. I am also located on GitHub at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
