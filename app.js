function facebook_login() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
}

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
