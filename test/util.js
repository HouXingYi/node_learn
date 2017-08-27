// exports.a = function(){
//     console.log("a");
// }
// exports.b = function(){
//     console.log("b");
// }


function b(){
    console.log("b");
}


function a(){
    console.log("a");
    b();
}


function abc(){
}
abc.prototype = {
    a : a,
    b : b
}


module.exports = abc ;











