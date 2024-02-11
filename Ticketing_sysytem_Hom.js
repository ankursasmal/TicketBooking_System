  
let typeo=document.getElementById('typeo');
let com=document.getElementById('com');
let feed=document.getElementById('feed');
let inq=document.getElementById('inq');
let form1=document.getElementById('form1');
let result1=document.getElementById('result1');
let result2=document.getElementById('result2');
let result3=document.getElementById('result3');


let sl1=document.getElementById('feedbackType');


sl1.addEventListener('change',(e)=>{
e.preventDefault();
console.log(e.target.value);
if(e.target.value==="select"){
   typeo.innerText='Customer select sepcefic type of Form';
   com.style.visibility="hidden";
   com.style.display='block ';

   inq.style.display="block" 

   inq.style.visibility="hidden" 
   feed.style.visibility="hidden" 
   feed.style.display="block" 
   result2.style.visibility="hidden" 
   result3.style.visibility="hidden" 
   result1.style.visibility="hidden" 


}
else if(e.target.value==="Feedback"){
   typeo.innerText='Customer Feedback Form';
   com.style="visibility:hidden;display:block";
   inq.style="visibility:hidden;display:block";
   feed.style.visibility="visible" ;
   result2.style.visibility="hidden" ;
   result3.style.visibility="hidden" ;
   result1.style.visibility="visible" 

   
}
else if(e.target.value==="Complaint"){
   typeo.innerText='Customer Complaint Form';
   feed.style="visibility:hidden;display:block"; 
   inq.style="visibility:hidden;display:block"; 

   com.style.visibility="visible"; 
   result1.style.visibility="hidden"; 
   result3.style.visibility="hidden" ;
   result2.style.visibility="visible" 


}
else if(e.target.value==="Inquiry"){
   typeo.innerText='Customer Inquiry Form';
   com.style.cssText="visibility:hidden;display:block" ;

   feed.style.cssText="visibility:hidden;display:block" ;
   inq.style.visibility="visible" ;
   result1.style.visibility="hidden"; 
   result2.style.visibility="hidden" ;
   result3.style.visibility="visible" 


}
})


// feed.addEventListener('submit',function(e){
// e.preventDefault();
// let feedbackMessage=document.getElementById('feedbackMessage').value;
// // let ratting=document.getElementById('ratting').value;

// fetch('https://jsonplaceholder.typicode.com/posts', {
//    method:'POST',
//    body: JSON.stringify({
//       title: feedbackMessage,
//       // ratting:ratting
//        }),
//      headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//      }, 

// }).then(function(res){ return res.json()}).then(function(data){
//    console.log(data.title);
// let result1=document.getElementById('result1');
// // let bulid=document.createElement("div");
// // bulid.setAttribute("class","bul");
// result1.innerHTML=`    <div style="display:flex;align-items: center;margin: 10px 5px; border:2px solid black">
// <p>type:feedback</p>
// <p>comment:Thank you for you valuable responce...</p>
// // <p>ratting${data.ratting}</p>

// </div>
// `
// // result1.insertAdjacentHTML("afterbegin",build);
//  })

// })

com.addEventListener('submit',function(e){
e.preventDefault();
let feedbackcomplaint=document.getElementById('feedbackcomplaint').value;

fetch('https://jsonplaceholder.typicode.com/posts', {
   method:'POST',
   body: JSON.stringify({
      title: feedbackcomplaint,
      
       }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     }, 

}).then(function(res){ return res.json()}).then(function(data){
   console.log(data.title);
let result2=document.getElementById('result2');
result2.innerHTML=`<p>Your complaint resolve soon... </p>` 
})

})

inq.addEventListener('submit',function(e){
e.preventDefault();
let feedbackInqury=document.getElementById('feedbackInqury').value;

fetch('https://jsonplaceholder.typicode.com/posts', {
   method:'POST',
   body: JSON.stringify({
      title: feedbackInqury,
      
       }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     }, 

}).then(function(res){ return res.json()}).then(function(data){
   console.log(data.title);
let result3=document.getElementById('result3');
result3.innerHTML=`<p>Please vist out home page buttom... </p>` 
})

})




 