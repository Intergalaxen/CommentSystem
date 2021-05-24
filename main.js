function clickButton(){
    document.querySelector('button').innerHTML='Clicked';
    console.log('Nu klickade någon på knappen.')
}

function comment(){
    var message = document.getElementById("message");
    var comments = document.querySelector(".comments");

    comments.innerHTML += "<div>" + message.value + "</div>";
    message.value = "";
}

function inputchanged(){
    document.querySelector("#makecomment").disabled = false;
}