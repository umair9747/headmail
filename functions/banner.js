const colors = require('colors');
const align = require('align-text');
const figlet = require('figlet');

function data(){
    figlet('HEADMAIL', function(err, data) {
        if (err) {
            console.log('Oops! seems like something went wrong...');
            console.dir(err);
            return;
        }
        console.log(align(data.green, 9))
        console.log(align("A Tool Designed to Analyse Email Headers".green, 15))
        console.log(align("Developed by Umair Nehri (0x9747)".green, 32))    
        console.log("");
        console.log(align("[Usage: node index.js filelocation | Example: node index.js email.txt]".green, 17))
        console.log("");
    });
}

module.exports = {data};
