var mon = require("./util.js");


var abc = new mon();

abc.a();
abc.b();

var bbb = new Promise(function(res,rej){
    var a = 0;
    setTimeout(function(){
        // a = 1;

        if(a == 0){
            rej(a);
        }else{
            res(a);
        }

    },1000)

}).then(function(a){
    console.log(1,a);
},function(a){
    console.log(2,a);
})


