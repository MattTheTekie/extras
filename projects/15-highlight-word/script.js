// v.1.0.0

function hlwClassAdd(name){

let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight2");

i++;
}

}


function hlwClassRemove(name){

let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight2");
i++;
}

}
