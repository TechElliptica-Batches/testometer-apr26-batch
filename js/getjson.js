
import myjson from '../data/student.json' assert {type:"json"}
import { PI_VALUE, projectName, projectPath } from './ref.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();
var nameValue = prompt("Enter your name ?")
console.log("You entered " , nameValue);

// npm install prompt-sync

// 20 or lesser - assert
// more then 20 - with

//console.log(myjson);
//console.log(projectName);

// third party library
// data from console. prompt-sync
