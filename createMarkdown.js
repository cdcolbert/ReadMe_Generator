function createMarkdown(data) {
    const avatar = `https://github.com/${data.ghname}.png?size=60`;
    const gitHub = `https://img.shields.io/badge/Github-${data.ghname}-4cbbb9`;

    return `
    # ${data.projectname} 
    
    ## Description
        ${data.description}

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Tests](#tests)
        - [Contributors](#contributors)

    ## Installation
    Packages required to run this program are: 
    ${data.dependencies}
    
    ## Usage
    Examples of how to use this program: 
    ${data.purpose}

    ## License
    ${data.license}

    ## Tests
    To test, run the following command:
    ${data.test}

    ## Contributors
    ${data.contributors}

    ## Contact
    \n![Badge](${gitHub}) 
    \n![Profile Image](${avatar})
    \nView the project in GitHub at: ${data.url}.`

}
module.exports = createMarkdown;