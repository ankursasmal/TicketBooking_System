  function fun(){

  let searchplace=document.getElementById('searchplace');
  searchplace.addEventListener('change',()=>{

  let div1=document.createElement('div');
 div1.setAttribute('id','ankur');

div1.innerHTML=` <div id='sf' style="display: flex;align-items: center;justify-content: center; flex-direction: row; flex-wrap: wrap;">

 <img src= https://source.unsplash.com/random/?${searchplace.value}  alt="" height="300px "
width="300px" style="margin: 10px 20px;"> 
<img src= https://source.unsplash.com/random/?${searchplace.value} alt="" height="300px "
width="300px" style="margin: 10px 20px;"> 
<img src= "https://source.unsplash.com/random/?Tourist-attractions-placess" alt="" height="300px "
width="300px" style="margin: 10px 20px;"> 
</div>`
let apivalue=document.getElementById('apivalue');
apivalue.insertAdjacentHTML('afterend',div1.outerHTML);
   let resultapi=document.getElementById('resultapi');
   resultapi.style.cssText='visibility:hidden;display:none;'
  })

  }
  fun();
  let formplace=document.getElementById('formplace');
let diplayval=false;
  formplace.addEventListener('submit',(e)=>{
    
    let searchplace=document.getElementById('searchplace');
 
    e.preventDefault();
    if(diplayval){
      diplayval=false;
    }
    else{
      diplayval=true;
    }
      let resultapi=document.getElementById('resultapi');
  
  if( diplayval){
    let resultapi=document.getElementById('resultapi');
    resultapi.style.cssText='visibility:visible;display:block;'

      //  resultapi.style.visibility='hidden';
      // resultapi.style.display='block';

  }
      
  
  })

  let excapt=document.getElementById('escape');
  excapt.addEventListener('click',(e)=>{
    let resultapi=document.getElementById('resultapi');

    resultapi.style.cssText='visibility:hidden;display:none;'

    // resultapi.style.visibility='visible';
   })
 
 
 
 