let signInform=document.getElementById('signIn');
            
            
// funtion uner eevent listenr lagia post request korla 
// redirect and submite event both ak sanga kaj korba;

//1. function
let onsubmit=()=>{
//2. event listener javatar post request kora hoccha

signInform.addEventListener('submit',function(e){
e.preventDefault();
let signInEmail=document.getElementById('signemail').value;
let signInpassword=document.getElementById('signpassword').value;
fetch("https://jsonplaceholder.typicode.com/posts", {
method:'POST',
body: JSON.stringify({
signInEmail: signInEmail,
signInpassword: signInpassword,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
}
// below lime likta pari ba na pari
}).then(function(res){ 
return res;
}).then(res=>{
return res.json()
})
.then(function(data){
console.log(data.signInEmail,data.signInpassword);
// let result=document.getElementById()
})

})
}