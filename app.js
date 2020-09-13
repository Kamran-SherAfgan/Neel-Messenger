function send(){
    var value = document.getElementById('value');
    var p = document.createElement('p');
    var text = document.createTextNode(value.value);
    var msgBOX = document.getElementById('messageBox');
    p.appendChild(text)
    msgBOX.appendChild(p)

    value.value = ''

}

const realButton = document.getElementById('myfile');
const custom_button = document.getElementById('custom_button');

custom_button.addEventListener("click", function() {
    realButton.click();
});