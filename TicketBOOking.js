let medium=document.querySelector('#medium');
let vaical=document.querySelector('#vaical');

medium.addEventListener('change',(e)=>{
e.preventDefault();
vaical.innerHTML=`<p>Ticket Booking for ${e.target.value}</p>`

}) 

//    post api submit a redirect o haba
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
        localStorage.setItem('postData', JSON.stringify(data));
        console.log('Data stored in localStorage:', data);
      } catch (error) {
        console.error('Error:', error.message);
        // Provide user feedback here if needed
      }
    });
  };
  const storedData = localStorage.getItem('postData');
console.log('Retrieved data from localStorage:', storedData);
  