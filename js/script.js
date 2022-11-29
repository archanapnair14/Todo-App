
// function validate(){
//     var username = document.getElementById(ss"uname").value;
//     var password = document.getElementById("password").value;

//     if ( username == "admin" && password == "12345"){
//     // alert ("Login successfully");
//     location.href ='todo.html';
//     return false;
//     }
// }


function login(callback) {
    let username = document.getElementById("uname").value;
    let password = document.getElementById("password").value;
        callback(username,password);
} 
function onSuccess(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            // alert("Login credentials are valid");
            
            document.querySelector("form").action = "./todo.html";
        }
        else {
            alert("Invalid login");
        }
}

function onLogin() {
    login(onSuccess);
} 
