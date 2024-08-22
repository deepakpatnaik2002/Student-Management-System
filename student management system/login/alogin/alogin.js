var email1 = document.getElementById('emailValue1');
var password1 = document.getElementById('passwordValue1');
var email2 = document.getElementById('emailValue2');
var password2 = document.getElementById('passwordValue2');
var submit1=document.querySelector('#sub1');
submit1.addEventListener('click',signIn1);
var submit2=document.querySelector('#sub2');
submit2.addEventListener('click',provider1);
var submit3=document.querySelector('#sub3');
submit3.addEventListener('click',signIn2);
var submit4=document.querySelector('#sub4');
submit4.addEventListener('click',provider2);

const firebaseConfig = {
    apiKey: "AIzaSyBmRb0aKxPiB7EV2LQYb7U5SjEyfUMr-ig",
    authDomain: "smsproject-ecd2d.firebaseapp.com",
    projectId: "smsproject-ecd2d",
    storageBucket: "smsproject-ecd2d.appspot.com",
    messagingSenderId: "263965204952",
    appId: "1:263965204952:web:8f4ee00d7db469338092ad",
    measurementId: "G-SED0D8TV4G"
    };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

function signIn1(e){
    e.preventDefault();
    if(email1.value==='' || password1.value===''){
        alert('Please Fill all the Fields');
        return;
    }
    auth.signInWithEmailAndPassword(email1.value,password1.value).then(function(){
        let user=auth.currentUser;
        console.log(user);
        //alert("Welcome Back ! "+user.email);
        location.href='valid/valid.html';

    }).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
        window.alert('Invalid Credentials');
    });
}

function signIn2(e){
    e.preventDefault();
    if(email2.value==='' || password2.value===''){
        alert('Please Fill all the Fields');
        return;
    }
    auth.createUserWithEmailAndPassword(email2.value,password2.value).then(function(){
        let user=auth.currentUser;
        console.log(user);
        //alert("Welcome Back ! "+user.email);
        location.href='valid/valid.html';

    }).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
        window.alert('Error : '+errorMessage);
    });
}

function provider1(e){
    e.preventDefault();
    
    auth.signInWithPopup(provider)
        .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;
            //this is what you need
            var isNewUser = result.additionalUserInfo.isNewUser;
            console.log(isNewUser)
            if (isNewUser) {
                //delete the created user
                result.user.delete();
                alert('Invalid Credentials')
            } else {
                // your sign in flow
                location.href='valid/valid.html';
            }
        
        }
        ).catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        alert("Invalid Credentials");
    });
}


function provider2(e){
    e.preventDefault();
    auth.signInWithPopup(provider)
        .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;
            //this is what you need
            location.href='valid/valid.html';
            
        }
        ).catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        alert("Error : "+errorMessage);
    });
}


