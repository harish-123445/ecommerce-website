const bar = document.getElementById('bar');
const cl=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(cl){
    cl.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}