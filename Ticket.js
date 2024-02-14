let name=document.getElementById('name');
let email=document.getElementById('email');
let add=document.getElementById('add');
let last=document.getElementById('last');

let date=document.getElementById('date');
name.innerHTML=`<p>${localStorage.getItem('name')} ${" "} ${localStorage.getItem('last')}</p>`
 
add.innerHTML=`<p>${localStorage.getItem('add')}</p>`
email.innerHTML=`<p>${localStorage.getItem('email')}</p>`
date.innerHTML=`<p>${new Date(8.64e15).toString()}</p>`

