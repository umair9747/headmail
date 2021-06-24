<h1 align="center">
<a href="https://github.com/umair9747/headmail/"><img src="logo.png" alt="logo" height="200" width="500"></a>
  <br>
  <img src="https://img.shields.io/badge/version-1.0.0-blue">
  <img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20mac%20%7C%20termux-yellow">
  <img src="https://img.shields.io/badge/state-maintained-green">
  <img src="https://img.shields.io/badge/focus-recon-red">
  <img src="https://img.shields.io/tokei/lines/github/umair9747/Archer">
  <img src="https://img.shields.io/github/followers/umair9747?style=social">
  <img src="https://img.shields.io/github/forks/umair9747/Archer?style=social">
  <br>
  <img src="https://img.shields.io/badge/made%20with%20%3C%2F%3E%20in%20-India-brightgreen">
</h1>

<h2 align="left">
  <b>About Archer</b>
</h2>

<h1 align="center">
<img src="illustration.png" alt="output" height="300" width="500">
  </h1>
  
<p align="left">
  Archer is an cross-platform tool developed using Nodejs which focuses on the reconnaissance phase of a penetration test. Got a bunch of links that you wanna check? Archer makes it easy for you to check the response codes of all the links and even query them so that you know which link is still alive and which isn't.
 </p>
 
 <h2 align="left">
  <b>Support</b>
 </h2>
 
| Windows | Linux | Mac | Termux |
| ------- | ----- | --- | ------ |
| ✔ | ✔ | ✔ | ✔ |

✔ - Tested  <br/>
❔ - Not tested <br/>

<h2 align="left">
  <b>Installation</b>
</h2>

<h3 align="left">
  <b>Windows</b>
</h3>

<p align="left">
  <b>Note: </b><br>
  <ul type="disc">
    <li>Make sure you have Nodejs installed on your system, which you can do by going to https://nodejs.org/en/download/</li>
    <li>Clone / Download the repository to your local machine and run the following commands:</li>
   </ul>
   
   ```sh
   cd Archer
   npm i
   node index.js
   ```
  </p>
  
<h3 align="left">
  <b>Linux / Termux</b>
</h3>

<p align="left">
  
 ```sh
    sudo apt-get update -y && sudo apt-get upgrade -y
    sudo apt-get install nodejs -y
    sudo apt-get install git -y
    git clone https://github.com/umair9747/Archer
    cd Archer
    npm i
    node index.js
  ```
</p>

<h2 align="left">
  <b>Usage</b>
</h2>

<p align="left">
  
 ```sh
    Archer V1.0
     Usage: node index.js [filename] [statuscodetoquery] [outputtype]

     FILENAME --
     Specifies the file name containing the domain list along with its full location
     Note: Make sure the data is stored in txt format
     Example: /home/user/Desktop/file.txt

     STATUS CODE TO QUERY --
     Specifies the status codes you would like to be displayed
     Example: 200/404/302/all

     OUTPUT TYPE --
     Specifies the format for the output which will be displayed
     Example: string/json

     EXAMPLE USAGE -- 
     node index.js /home/user/Desktop/domains.txt 200 string
  ```
  <b>NOTE: All flags are mandatory. Make sure that the links you provide have http:// or https:// added else Archer would return a "domain doesn't exists" error.</b>
</p>


 <h2 align="left">
  <b>Wlling to Contribute?</b>
 </h2>

<p align="left">
  You can make a contribution to this repo by creating a pull request! Make sure you include the following details:
  <ul type="disc">
    <li> Feature introduced</li>
    <li> What does the feature do? </li>
    <li> List of External Modules/Packages if used </li>
    </ul>
  </p>
  
  <h2 align="left">
  <b>Reach Out!</b>
 </h2>

<p align="left">
  You can contact me through the following handles:
  <ul type="disc">
    <li> <b>Instagram</b> - @umairnehri</li>
    <li> <b>Twitter</b> - @0x9747</li>
    <li> <b>Discord</b> - Umair#5710 </li>
    <li> <b>Email</b> - 0x9778@protonmail.com </li>
    </ul>
  </p>s
