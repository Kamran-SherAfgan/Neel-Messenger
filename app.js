function facebook_login() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      window.location = 'neel-messenger.html'
     
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });

    /// GO TO ANOTHER PAGE/////

    // window.location.href = 'neel-messenger.html'
};






var loginBtn = document.getElementById('loginBtn');





// let signUp = () => {
//     var email = document.getElementById('email');
// var password = document.getElementById('password');


// firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
// .then((result) => {
//     console.log(result)
// })

// .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   })
// }


function send() {

  var value = document.getElementById('value');
  
  var p = document.createElement('p');
  
  var text = document.createTextNode(value.value);
 
  var deleteBtn = document.createElement('button');
  var deleteText = document.createTextNode('DELETE');
  
  deleteBtn.setAttribute('class','remove');
  deleteBtn.setAttribute('onClick','deleteMessage(this)')
 

  var msgBOX = document.getElementById('messageBox');

  p.appendChild(text)
  p.appendChild(deleteBtn)
  deleteBtn.appendChild(deleteText)
  msgBOX.appendChild(p)

  



const realButton = document.getElementById('myfile');
const custom_button = document.getElementById('custom_button');

custom_button.addEventListener("click", function() {
    realButton.click();

})

var messages = {
  text: value.value
}

console.log(msgBOX)

firebase.database().ref('messages').push(messages);
;

firebase.database().ref('messages').on('child_added', function(data){
(data.val())
});

value.value = ''
}


function deleteMessage(e) {
    firebase.database().ref('messages').remove()
    e.parentNode.remove()
}
