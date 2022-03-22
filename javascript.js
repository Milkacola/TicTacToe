window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

var jatek = [];

function init() {
    jatekter();
}

function jatekter() {
    var txt="";
    for (let index = 0; index < 9; index++) {
        txt += `<div class="mezo"><p>div${[index+1]}</p>
        </div>`
        
    }
    $(".container")[0].innerHTML=txt;
    console.log(txt);
}


