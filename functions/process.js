const getinput = require('../functions/input');
const align = require('align-text');
var processheader = require('../functions/processheader');

function process(){
    var input = getinput.input();
    var inputlength = input.length;
    var filename;

    if(!input[0]){
        console.log(align("Please provide the minimum number of arguments required to run this tool!".red, 5));
    }
    else {
        if(inputlength < 1){
            console.log("");
        }
        filename = input[0];
        processheader.processfile(filename);
  }

}

module.exports = {process};
