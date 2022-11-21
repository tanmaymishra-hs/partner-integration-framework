var CryptoJS = require("crypto-js");

export const createSubsAsync = (data, secretKey)=>{
    //console.log(request.data);
var request_p = data;
request_p = request_p.replace(/\s+/g, '') //HimynameisFlavio
// request_p.replace(//g, '') //HimynameisFlavio
console.log(request_p);
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};
//var secret = postman.getGlobalVariable('airtet_secret_qa'); 
request_p = request_p + secretKey;
console.log(request_p);
request_p = sortAlphabets(request_p)
console.log(request_p);
//  console.log(Object.assign([], request_p));
//  console.log("["+Object.assign([], request_p)+"]");
request_p = "[" + Object.assign([], request_p) + "]"
console.log("Sorted String: " + request_p)
//   var finalOutput
//   for (i = 0; i < request_p.length; i++) {
//       if(request_p[i] == ',' && request_p[i+1] != ','){
//       } else finalOutput+=request_p[i]
//       text += cars[i] + "<br>";
//   }
// request_p = "["+decodeURIComponent(Object.assign([], request_p))+"]"
request_p = request_p.replace(/,/g, ', '); //HimynameisFlavio
 console.log(request_p);
//  request_p = '", ", , , , , , , , , , , , , ., .,';
// console.log(request_p);
var finalOutput = "";
var firstSight = true;
var one = false;
var two = false;
for (let i = 0; i < request_p.length; i++) {
  if (request_p[i] == ',') {
    if (one === false) {
      one = true;
      finalOutput = finalOutput + request_p[i];
    } else if (two === false) {
      if (finalOutput.charAt(finalOutput.length - 1) == ' ') {//|| finalOutput.charAt(finalOutput.length-1) == ','
        finalOutput = finalOutput.substring(0, finalOutput.length - 1);
        finalOutput = finalOutput + request_p[i];
        one = false;
        //  if(firstSight === true){
        //     firstSight = false;
        //     finalOutput = finalOutput + request_p[i];
        //     one = false;
        //  }
        //  if(firstSight === false){
        //     finalOutput = finalOutput.substring(0, finalOutput.length - 1);
        //     finalOutput = finalOutput + request_p[i];
        //     one = false;
        //  }
      } else {
        one = false
        finalOutput = finalOutput + request_p[i];
      }
    }
  } else finalOutput = finalOutput + request_p[i];
  //   console.log(finalOutput.lenght)
}

// var token = CryptoJS.SHA256(finalOutput);
var token = CryptoJS.SHA256(finalOutput).toString(CryptoJS.enc.Hex);
console.log(CryptoJS.SHA256(finalOutput));
function toUTF8Array(str) {
    let utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}
function toHexString(bytes) {
  return bytes.map(function(byte) {
    return (byte & 0xFF).toString(16)
  }).join('')
}
function wordToByteArray(wordArray) {
    var byteArray = [], word, i, j;
    for (i = 0; i < wordArray.length; ++i) {
        word = wordArray[i];
        for (j = 3; j >= 0; --j) {
            byteArray.push((word >> 8 * j) & 0xFF);
        }
    }
    return byteArray;
}
function byteArrayToString(byteArray) {
    var str = "", i;
    for (i = 0; i < byteArray.length; ++i) {
        str += escape(String.fromCharCode(byteArray[i]));
    }
    return str;
}
console.log("Final Output: " + finalOutput);
var hash = CryptoJS.SHA256(finalOutput);
var byteArray = wordToByteArray(hash.words);
token = toHexString(byteArray)
// alert(byteArrayToString(byteArray));
console.log("token from Crypto : " + token);
console.log("function : " + toHexString(byteArray));
return token
}