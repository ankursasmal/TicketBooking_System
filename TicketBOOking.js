let medium=document.querySelector('#medium');
let vaical=document.querySelector('#vaical');

medium.addEventListener('change',(e)=>{
e.preventDefault();
let medium1=document.querySelector('#medium').value;
console.log(medium1);
if(medium1==null){
  vaical.innerHTML=`<p>Ticket Booking for Train</p>`

}
 vaical.innerHTML=`<p>Ticket Booking for ${e.target.value}</p>`


}) 

//    post api submit a redirect o haba data pass using local storage
// **local storage use korta hola must function under korta hoba (enent listner fun under)
let check=document.getElementById('check');
check.addEventListener('click',()=>{
  let name = document.getElementById('name').value;
      let last = document.getElementById('last').value;
      let Email = document.getElementById('Email').value;
      let add = document.getElementById('add').value;

      localStorage.setItem('name',name);
      localStorage.setItem('last',last);
      localStorage.setItem('add',add);

      localStorage.setItem('email',Email);

})
// page redirect hola funtion under a normaly wit out function 
let ticketbook = () => {
    let ticket = document.getElementById('ticket');
    ticket.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let name = document.getElementById('name').value;
      let last = document.getElementById('last').value;
      let Email = document.getElementById('Email').value;
      let ph = document.getElementById('ph').value;
      let add = document.getElementById('add').value;
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            last: last,
            Email: Email,
            ph: ph,
            add: add
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
  
        if (!response.ok) {
          throw new Error('Error in POST request');
        }
  
        const data = await response.json();
// aka na data base throuhg data store hoi localstroage throuh generaly hoi na

        // localStorage.setItem('postData', JSON.stringify(data));

        console.log('Data stored in localStorage:', data);
      } catch (error) {
        console.error('Error:', error.message);
        // Provide user feedback here if needed
      }
    });
  };

//   const storedData = localStorage.getItem('postData');
// console.log('Retrieved data from localStorage:', storedData);
  