let SignUpform=document.getElementById('SignUp');


//   functiomn under hola both event listner and onclick bothkaj korba
    //form action a sabsamai redirect link and addevent listner ('submit',(e)=>{
        // post request,put,get.. request likha hoba;
    // }) 

    let onsubmit=()=>{
SignUpform.addEventListener('submit',function(e){
e.preventDefault();
let signUpemail=document.getElementById('signUpemail').value;
let signUppass=document.getElementById('signUppass').value;
let signUpppassword=document.getElementById('signUpppassword').value;

fetch("https://jsonplaceholder.typicode.com/posts", {
method:'POST',
body: JSON.stringify({
   title: signUpemail,
   body: signUppass,
   }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }, 

}).then(function(res){return res.json();}).then(function(data){
console.log(data.title,data.body);
})

})
}
