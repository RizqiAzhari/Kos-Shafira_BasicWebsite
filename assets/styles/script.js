let email = document.getElementsByClassName("email-form");
let saran = document.getElementById("text-saran");

let notif = document.querySelector(".notif");

let button = document.querySelector(".btnTampung");

button.addEventListener('click', function(event) {
    if(email[0].value === "" || saran.value === ""){
        notif.innerText = "Form perlu diisi";
    } else {
        notif.innerText = "";
    }
    email[0].value = "";
    saran.value = "";
});