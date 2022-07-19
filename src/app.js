document.addEventListener('DOMContentLoaded', function () {
    let content = document.querySelector('.content');
     
    let msg = document.createElement('h2');
    msg.innerText = '(JS is working)';
    console.log(msg);
 
    content.appendChild(msg);
});