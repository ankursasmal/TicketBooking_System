  
   let typeo=document.getElementById('typeo');
let com=document.getElementById('com');
let feed=document.getElementById('feed');
let inq=document.getElementById('inq');
// let form1=document.getElementById('form1');
let result1=document.getElementById('result1');
let result2=document.getElementById('result2');
let result3=document.getElementById('result3');
 
let bul=document.querySelectorAll('.bul');

   
let custom=document.getElementById('custom'); 
// ues event listner to on click visible
// on dblclick dissaper
function fun1(){
let d=document.createElement('div');
    d.setAttribute("id","boxx");
      //   two process to redirect another page
    //   after 3 line
 d.innerHTML=`<div style="  background-color: rgb(34, 235, 235); position: fixed;top:29px;left:30%; border-radius: 5px;display: flex;flex-direction: column;padding: 5px 5px; margin-top:22px ;width: 140px;height: 135px;">
        <a style="margin:7px 0;" href=${"./index.html"}>Home</a>
<a style="margin-bottom: 7px;" href=${"././TicketBook.html"}>Book your Ticket</a>
       <a  id="Ticket">Ticket</a>
 <a  style="margin-top:7px;"href=${"./status.html"} >Booking History</a>
            <a style="margin:7px 0;" href=${"./Canciltation_Status.html"}>Cancilation status</a>
 
      </div>`

 
  
//   outside of event listner insertAdjacentHTML korla 1 bar create hoba enntlist under korla
// jato bar eventlistner cholba toto bar create hoba
// so,outside of enentlistner a insertAdjacentHTML kora hoacha
  custom.insertAdjacentHTML("afterend",d.outerHTML);
  
   let box2=document.getElementById('boxx');

  box2.style.visibility='hidden';
}
    fun1();
     custom.addEventListener('click',()=>{
             // jakhan use korbo takhan create element k axcess korbo
      let box2=document.getElementById('boxx');

box2.style.visibility=='visible'?box2.style.visibility='hidden':box2.style.visibility='visible';
   
  })
  
  let Ticket=document.getElementById('Ticket');
  
  Ticket.style.cssText="color:blue";

// redirect page start
      Ticket.addEventListener('click',()=>{
         // Redirect to a new page when the element is clicked
        window.location.href = "./Ticket.html";
    });
  // end


// selsct item serccn effect

let sl1=document.getElementById('feedbackType');
// after axcess then use eventlistner
sl1.addEventListener('change',(e)=>{
e.preventDefault();
 
//     typeo.innerText='Customer select sepcefic type of Form';
//     com.style.visibility="hidden";
    
//     inq.style.visibility="hidden" 
//     feed.style.visibility="hidden" 
 
// // result1,2,3 are feed,com,inq created div 
//    result2.style.visibility="hidden" 
//    result3.style.visibility="hidden" 
//    result1.style.visibility="hidden"
   
 if(e.target.value==="select"){
   typeo.innerText='Customer select sepcefic type of Form';
   com.style.visibility="hidden";
    
   inq.style.visibility="hidden" 
   feed.style.visibility="hidden" 
    result2.style.visibility="hidden" 
   result3.style.visibility="hidden" 
   result1.style.visibility="hidden"
   //    jakha na use jkorbo sakana axces korta hoba then use all tag,ele,id..

//    bul holo feed back ar create kora commetnt div 
   let bul=document.querySelectorAll('.bul');
// querySelectorAll axcee hoa sab ele array,so bul is a arr where contain many class it represent comment
   bul.forEach(element => {
        element.style.display = 'none';
    });

}
else if(sl1.value==="Feedback"){
   typeo.innerText='Customer Feedback Form';
   com.style.visibility="hidden";
   inq.style.visibility="hidden";
   feed.style.visibility="visible";
   result2.style.visibility="hidden" ;
   result3.style.visibility="hidden" ;
   result1.style.visibility="visible" 

 
}
else if(sl1.value==="Complaint"){
   typeo.innerText='Customer Complaint Form';
   feed.style.cssText="visibility:hidden;display:block"; 
   inq.style.cssText="visibility:hidden "; 

   com.style.visibility="visible"; 
   result1.style.visibility="hidden"; 
   result3.style.visibility="hidden" ;
   result2.style.visibility="visible" ;
   //    jakhana use jkorbo sakana axces korta hoba then use 

   let bul=document.querySelectorAll('.bul');

   bul.forEach(element => {
        element.style.display = 'none';
    });

}
else if(sl1.value==="Inquiry"){
   typeo.innerText='Customer Inquiry Form';
   com.style.cssText="visibility:hidden;display:block" ;

   feed.style.cssText="visibility:hidden;display:block" ;
   inq.style.visibility="visible" ;
   result1.style.visibility="hidden"; 
   result2.style.visibility="hidden" ;
   result3.style.visibility="visible" ;
//    jakha na use jkorbo sakana axces korta hoba then use 
   let bul=document.querySelectorAll('.bul');

 
   bul.forEach(element => {
        element.style.display = 'none';
    });

}
})

// onsubmit funtion
let feedbackMessage=document.getElementById("feedbackMessage").value;
   let ratting=document.getElementById("ratting").value;

    
 
//  request post same page dakhata hola post under fun liktha pari
feed.addEventListener('submit', function (e) {
    e.preventDefault();
// function under e .value direct axcess possible fun bira below line not possible
    let feedbackMessage = document.getElementById("feedbackMessage").value;
    let rating = document.getElementById("ratting").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: feedbackMessage,
            rating: rating
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
//         console.log(data.title);
//         console.log("feedbackMessage:", feedbackMessage);
// console.log("rating:", rating);

        let result1 = document.getElementById('result1');
        let build = document.createElement("div");
        build.setAttribute("class", "bul");
        build.innerHTML = `<div style="display:flex;flex-direction: column;padding: 10px 5px;margin:10px 3px;  border:2px solid black;">
            <p>type: ${feedbackMessage}</p>
            <p>comment: Thank you for your valuable response...</p>
            <p>rating: ${rating}</p>
        </div>`;

        result1.insertAdjacentHTML("afterend", build.outerHTML);

        
    })
    .catch(error => {
        console.error('Error:', error.message);
        // Handle the error and provide feedback to the user
        alert('An error occurred while submitting the form. Please try again later.');
    });
});

 
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

inq.addEventListener('submit', (e)=>{
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




 
             