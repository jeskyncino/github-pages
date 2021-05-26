let upozorneni = document.querySelector('#upozorneni');
let dopis = document.querySelector('#dopis');
let imgNotification = document.querySelector('#imgNotification');
let beep = document.querySelector('#audio');


function zobrazMail () {
    if (upozorneni.style.display = "block") {
        upozorneni.style.display = "none";
        dopis.style.display = "flex"
    }
}


function upozorni () {
beep.play();

}


upozorneni.addEventListener("click", zobrazMail)
upozorneni.addEventListener("mouseover", upozorni)

