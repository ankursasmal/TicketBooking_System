let passwordreenter=document.getElementById('passwordreenter');
//  a casa function under likha darkar nai karon karaon page ka redirect korbo na
// only message print korb on submit event a form a action or redirect
// korta hola tobai function under likha hoi
         passwordreenter.addEventListener('submit',function(e){
 e.preventDefault();
let pass1=document.getElementById('pass1').value;
let pass2=document.getElementById('pass2').value;
 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:'PUT',
    body: JSON.stringify({
       password: pass1,
       password1: pass2,
       }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 

}).then(function(res){ return res.json();}).then(function(data){
    console.log(data.password,data.password1);
    let result=document.getElementById('result');
    result.innerHTML=
   ` <div style="display: flex; flex-direction: column; align-items: center ;margin-bottom: 10px;"></div>
    <p>password send to your email address <br/>
        Go to<a href=${"./signIn.html"}>
        <button   style="background-color: rgb(98, 98, 236);color: white;padding:2px 2px ;border: .2px solid black;">sign in</button></a></P>
        </div>
        `
          
 })
})
 
 