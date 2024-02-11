let resetpass=document.getElementById("resetpass");
    
        let setemail=()=>{
        resetpass.addEventListener('submit',(e)=>{
            e.preventDefault();
            let passwordemail=document.getElementById("passwordemail").value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'PUT',
  body: JSON.stringify({
    passwordemail: passwordemail,
   }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

}).then(res=>{return res;}).then((res)=>{return res.json();})
.then(data=>{
    console.log(data.passwordemail);

})
     })  
      }