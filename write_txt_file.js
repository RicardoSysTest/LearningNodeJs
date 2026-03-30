/*===============================================================
* Old Fashion Way to Import Node Package
*================================================================
* To use a npn module in node we need to use the import statement.
* One way to do it is declare a variable name "fs" is gone a be a
* constant becasue we don't want to modify any content of the 
* module. The name of the variable is gone a be the name of whatever
* i want to require from the package. Then I will require everything
* that is in the system package 
======================================================================
const fs = require('fs');
======================================================================
Import everythin (*) from the file system package (from 'fs') in the 
variable name fs (as fs). Now to avoid the warning we need to update
our json file and ad the parameter "type": "module",
=====================================================================*/ 
import * as fs from 'fs';

/*Generate String to Write*/
const words = ['unicon', 'cupcake', 'rainbow', 'kitten'];
const output = words.join('\n');

/*Write File Words.txt*/
fs.writeFile('words.txt',output, fileWritten);

function fileWritten(){
    console.log("File Written!");
}