// alert("ваня негр");
// var data = confirm("Ваня точно негр");
// console.log(data);
// console.log(5 + true);
var counter = 0;

function OnClickButton(el){
    counter++;
    // el.style.background = "red";
    // el.style.color = "blue";
    el.innerHTML = "вы взорвали его: " + counter
}