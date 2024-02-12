let cancil=document.querySelector('#cancil');
let ty;
let a= cancil.addEventListener('change',(e)=>{
    console.log(e.target.value);
    ty=e.target.value;
    console.log("ty",ty);
  return e.target.value;

})
 function onSubmit(){

}