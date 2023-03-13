document.getElementById("formss").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById("formss");
    var name = el.name.value;
    var pass = el.pass.value;
    var state = el.state.value;
    var fail = "";
    
    if(name == "" || pass == "" || state == ""){
        fail = "Заполните все поля";
    }
    else if(name.length <= 1 || name.length > 50){
        fail = "Введите корректное имя";
    }
    else if(pass.split("&").length > 1){
        fail = "Некорректный пароль";
    }
    if(fail != ""){
        document.getElementById("error").innerHTML = fail;
    } else{
        alert("все данные корректно заполнены");
        window.location = "https://i114.photobucket.com/albums/n255/four_of_five/JumpingtransFrog.gif?width=200&height=200&crop=1:1,smart";      
    }
    // return false ;
}       