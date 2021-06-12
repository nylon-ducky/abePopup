box = document.querySelector('#popupBox');
function popItUp() {
    box.style.display = "block"
}

function increaseFont() {  
    box.style.fontSize = "large";
    box.style.width = "350px";
    box.style.height = "775px";
    box.style.top = "0";
    box.style.right = "0";
    box.style.margin = "5px";
    box.style.padding = "15px";

    radio = document.querySelectorAll('.radio');
    radio.forEach((button) => {
        button.style.transform = "scale(2)";  
    });

    textInput = document.querySelectorAll("input");
    textInput.forEach((field) => {
        field.style.height = "40px";
    });
}

function closeButton() {  
    box.style.display = "none";
}




