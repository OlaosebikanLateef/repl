// const { get }= require('https');


// get('https://www.google.com', (res) => {
//     res.on('data', (chunk) =>{
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// }); 

//const internals = require('./internals');
import { send }  from './request.mjs';
import { read } from  './response.mjs';

function makeRequest(url, data){
     send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);