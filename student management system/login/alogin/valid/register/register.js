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
var db=firebase.firestore();

var rno=document.getElementById("rnoValue");
var branch=document.getElementById("branchValue");
var course=document.getElementById("courseValue");
var fname=document.getElementById("fnameValue");
var lname=document.getElementById("lnameValue");
var faname=document.getElementById("fanameValue");
var maname=document.getElementById("manameValue");
var email=document.getElementById("emailValue");
var phone=document.getElementById("phoneValue");
var address=document.getElementById("addressValue");
var dob=document.getElementById("dobValue");
var doj=document.getElementById("dojValue");
var start,content,end;
document.getElementById("sub1").addEventListener('click',setItems);
document.getElementById("sub2").addEventListener('click',getItems);


function setItems(e){
    e.preventDefault();
    if(rno.value===''||branch.value===''||fname.value===''||lname.value===''||faname.value===''||maname.value===''||email.value===''||phone.value===''||address.value===''||dob.value===''||doj.value===''){
        alert("Please fill all the fields");
        return;
    }
    db.collection('register').add({
        Rno:rno.value,
        Branch:branch.value,
        First_Name:fname.value,
        Last_Name:lname.value,
        Father_Name:faname.value,
        Mother_Name:maname.value,
        Email:email.value,
        Phone:phone.value,
        Address:address.value,
        DOB:dob.value,
        DOJ:doj.value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert('Record Added Successfully');
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }
    );
}


var items=[];
var rnos=[];
var addresses=[];
var branches=[];
var courses=[];
var dobs=[];
var dojs=[];
var emails=[];
var phones=[];
var fnames=[];
var lnames=[];
var fanames=[];
var manames=[];


async function getItems(e){
    e.preventDefault();
    await db.collection('register').onSnapshot((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            items.push({
                id:doc.id,
                ...doc.data()
            });
        })
        for(let i=0;i<items.length;i++){
            rnos.push(items[i].Rno);
            fnames.push(items[i].FIRST_NAME );
            lnames.push(items[i].LAST_NAME );
            fanames.push(items[i].FATHER_NAME );
            manames.push(items[i].MOTHER_NAME );
            emails.push(items[i].Email);
            phones.push(items[i].Phone);
            dobs.push(items[i].DOB);
            dojs.push(items[i].DOJ);
            courses.push(items[i].Course);
            branches.push(items[i].Branch);
            addresses.push(items[i].Address);
        }
        //for(let i=0;i<rnos.length;i++){
          //  console.log(rnos[i],years[i],semesters[i],cgps[i]);
       // }
        console.log(items);

    })
    displayTable();
}
function displayTable(){
    modal.style.display = "block";
        content='';
        start=`

        <div class="table-responsive">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>R No.</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>FATHER NAME</th>
                    <th>MOTHER NAME.</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                    <th>DATE OF BIRTH</th>
                    <th>BRANCH</th>
                    <th>COURSE</th>
                    <th>ADDRESS</th>
                    <th>DATE OF JOINING</th>
                </tr>
            </thead>
            <tbody>`;
    for(let i=0;i<rnos.length;i++){

            content+=`
                <tr>
                    <td>${rnos[i]}</td>
                    <td>${fnames[i]}</td>
                    <td>${lnames[i]}</td>
                    <td>${fanames[i]}</td>
                    <td>${manames[i]}</td>
                    <td>${emails[i]}</td>
                    <td>${phones[i]}</td>
                    <td>${dobs[i].toDate().toDateString()}</td>
                    <td>${branches[i]}</td>
                    <td>${courses[i]}</td>
                    <td>${addresses[i]}</td>
                    <td>${dojs[i].toDate().toDateString()}</td>
                </tr>
        `

    }
    end=`
                </tbody>
            </table>
        </div>
    `
    document.getElementById("mytable").innerHTML=start+content+end;

}

/**/
var modal = document.getElementById("myModal");
var span = document.getElementById("close");
/* When the user clicks the button, open the modal
sub2.onclick = function() {
    modal.style.display = "block";
}*/
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    content='';
}
