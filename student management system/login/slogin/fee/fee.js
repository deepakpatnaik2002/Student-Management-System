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
let db=firebase.firestore();

let cfee=document.getElementById('cfeeValue');
let fine=document.getElementById('fineValue');
let rno=document.getElementById('rnoValue');
let year=document.getElementById('yearValue');
let quarter=document.getElementById('quarterValue');
let submit=document.getElementById('sub');
submit.addEventListener('click',register);

function register(e){
    e.preventDefault();
    if(cfee.value==""||fine.value==""||rno.value==""||year.value==""||quarter.value==""){
        alert("Please fill all the fields");
        return;
    }
    db.collection('fee').add({
        Cfee:cfee.value,
        Fine:fine.value,
        Rno:rno.value,
        Year:year.value,
        Quarter:quarter.value
    }).then(function(){
        
    }).catch(function(error){
        let errorCode=error.code;
        let errorMessage=error.message;
        alert(errorMessage);
    });



    
}
