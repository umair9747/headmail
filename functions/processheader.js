const align = require('align-text');
const { text } = require('figlet');
const colors = require('colors');

function processfile(file){
    var count = 0;
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(file)
      });
      //FUNCTIONS START HERE
      function deliveredto(str) {
        return str.split('Delivered-To:')[1];
       }

       function subjecttitle(str){
           return str.split('Subject:')[1];
       }
       
       function senderinfo(str){
           return str.split('From: ')[1];
       }
       
       function spfinfo(str){
           return str.split('Received-SPF:')[1];
       }
       
       function contenttypeinfo(str){
           return str.split('Content-Type:')[1];
       }

       function messageidinfo(str){
           return str.split('Message-ID:')[1];
       }
       
       function mimever1(str){
           return str.split("Mime-Version:")[1];
       }

       function mimever2(str){
           return str.split("MIME-Version:")[1];
       }
       
       function mailerinfo(str){
           return str.split("X-Mailer:")[1];
       }

       //reading of file
       lineReader.on('line', function (line) {
        //variables
        var recipent = "Delivered-To:";
        var sender = "From:";
        var subject = "Subject:";
        var spf = "Received-SPF:";
        var contenttype = "Content-Type:";
        var messageid = "Message-ID:";
        var mimev = "Mime-Version:";
        var mimeversion = "MIME-Version:";
        var mailer = "X-Mailer:";
        
        let firstWord = line.split(" ")[0];
        var pdt = line. indexOf("PDT");

        if(firstWord == recipent){
            message = "Reciever: ".red + deliveredto(line).replace(/\s/g, '').blue;
            console.log(align(message, 5));
        }
        if(pdt > -1){
            if(count == 0){
            message = "Receieved On: ".red + line.replace(/\s/g, '').blue;
            console.log(align(message, 5));
            count += 1;
            }
        }
        if(firstWord == subject){
            message = "Subject of Email: ".red + subjecttitle(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == sender){
            message = "Sender: ".red + senderinfo(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == spf){
            message = "Received-SPF: ".red + spfinfo(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == contenttype){
            message = "Content Type: ".red + contenttypeinfo(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == messageid){
            message = "Message ID: ".red + messageidinfo(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == mimev){
            message = "Mime-Version: ".red + mimever1(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == mimeversion){
            message = "Mime-Version: ".red + mimever2(line).blue;
            console.log(align(message, 5));
        }
        if(firstWord == mailer){
            message = "Mailer: ".red + mailerinfo(line).blue;
            console.log(align(message, 5));
        }

      });
      
}

module.exports = {processfile};