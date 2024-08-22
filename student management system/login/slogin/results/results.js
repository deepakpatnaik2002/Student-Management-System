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

let submit=document.getElementById('sub');
submit.addEventListener('click',register);
let rno=document.getElementById('rnoValue');
let password=document.getElementById('passwordValue');

function register(e){
    e.preventDefault();
    if(rno.value==""||password.value==""){
        alert("Please fill all the fields");
        return;
    }
    getItems();
}
function getItems(){
    db.collection('grades').onSnapshot((snapshot)=>{
        var items=[];
var rnos=[];
var year=[];
var semester=[];
var cgp=[];

        snapshot.docs.forEach((doc)=>{
            items.push({
                id:doc.id,
                ...doc.data()
            });
        })
        for(let i=0;i<items.length;i++){
            rnos.push(items[i].Rno);
            year.push(items[i].Year);
            semester.push(items[i].Semester);
            cgp.push(items[i].Cgp);
        }
        for(let i=0;i<rno.length;i++){
            console.log(rnos[i],year[i],semester[i],cgp[i]);
        }
    })
    
}



