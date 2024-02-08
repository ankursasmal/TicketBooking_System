 
 
//  sign in
 let signInform=document.getElementById('signIn');
signInform.addEventListener('submit',function(e){
e.preventDefault();
let signInEmail=document.getElementById('signemail').value;
let signInpassword=document.getElementById('signpassword').value;
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:'POST',
    body: JSON.stringify({
       title: signInEmail,
       body: signInpassword,
       }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 

}).then(function(res){ 
    return res.json();
})
.then(function(data){
    console.log(data.title,data.body);
    // let result=document.getElementById()
})

})
 
// sign up

let SignUpform=document.getElementById('SignUp');

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

// password

// let resetpass=document.getElementById('resetpass');

// resetpass.addEventListener('submit',function(e){
// e.preventDefault();
// let passwordemail=document.getElementById('passwordemail').value;
 
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'POST',
//     body: JSON.stringify({
//        title: passwordemail,
//         }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }, 

// }).then(function(res){res.json()}).then(function(data){
//     console.log(data.passwordemail);
// let result=document.getElementById('result');
// result.outerHTML= 
//  })

// })


//  reenter pass
let passwordreenter=document.getElementById('passwordreenter');

passwordreenter.addEventListener('submit',function(e){
e.preventDefault();
let pass1=document.getElementById('pass1').value;
let pass2=document.getElementById('pass2').value;
 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:'POST',
    body: JSON.stringify({
       title: pass1,
       body: pass2,
       }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 

}).then(function(res){ return res.json();}).then(function(data){
    console.log(data.title,data.body);
    let result=document.getElementById('result');
    result.innerHTML=`<p>password send to your email address ${data.title}</P>`
 })

})
let typeo=document.getElementById('typeo');
let com=document.getElementById('com');
let feed=document.getElementById('feed');
let inq=document.getElementById('inq');


let sl1=document.getElementById('feedbackType').value;

sl1.addEventListener('change',(e)=>{
e.preventDefault();
if(e.target.value=="Feedback"){
    typeo.innerText="Customer Feedback Form";
    com.style="display:block; "

}
})
