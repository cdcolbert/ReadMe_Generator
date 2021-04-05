const axios = require("axios");
const inquirer = require("inquirer");
 
const api = {
    getUser(ghname) {
    inquirer
    .prompt({
        message: "Enter your GitHub username?",
        name: "ghname"
    }) 

    .then(function({ ghname }) {
    const queryUrl = `https://api.github.com/users/${ghname}`;

    axios.get(queryUrl).then(function(res) {
        const avatarURL = res.data.avatar_url
        console.log(avatarURL);
    });  
    });    
    }
};


module.exports = api;