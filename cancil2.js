let status=document.querySelector("#status");
 import { onchang } from "./cancil";
 let x=onchang();
 console.log(x);
 status.innerHTML=`<p>your cancilation reason for ${onchang()} proceded</p>`