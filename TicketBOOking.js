let medium=document.querySelector('#medium');
let vaical=document.querySelector('#vaical');

medium.addEventListener('change',(e)=>{
e.preventDefault();
vaical.innerHTML=`<p>Ticket Booking for ${e.target.value}</p>`

}) 

//    post api submit a redirect o haba

let ticketbook=()=>{
let ticket=document.getElementById('ticket');
ticket.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.getElementById('name');
    let last=document.getElementById('last');
    let Email=document.getElementById('Email');
    let ph=document.getElementById('ph');
    let add=document.getElementById('add');
    fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
name:name,
last:last,
Email:Email,
ph:ph,
add:add
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})   .then((res)=>{return res}).then((res)=>{return res.json()})
.then((data)=>{
console.log(data.name,data.ph,data.add,data.Email);
}).catch(error=>{
console.log(error);
})

})
}
