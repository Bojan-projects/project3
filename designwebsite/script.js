const menu = document.querySelector('.menu-icon');
const list = document.querySelector('ul');
const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')
const free = document.querySelector('.freePrice')
const regular = document.querySelector('.regularPrice')
const business = document.querySelector('.businessPrice')
const content = document.querySelector('.faq .faq-container .faq-card .faq-content');
const downArrow = document.querySelector('.bx-down-arrow');



menu.addEventListener('click', ()=>{
 list.classList.toggle('active');
 menu.classList.toggle('bx-x')
})
window.onscroll = () =>{
 list.classList.remove('active');
 menu.classList.remove('bx-x')
}
monthly.addEventListener('click', ()=>{
 monthly.classList.toggle('active');
 yearly.classList.remove('active');
 business.innerHTML = "89$"
 regular.innerHTML = "59$"
 free.innerHTML = "Free"
})
yearly.addEventListener('click', ()=>{
 yearly.classList.toggle('active');
 monthly.classList.toggle('active');
 business.innerHTML = "150$"
 regular.innerHTML = "90$"
 free.innerHTML = "30$"
})

downArrow.addEventListener('click', ()=>{
  content.classList.toggle('active');
  
  
})

document.querySelector('.trialQ').addEventListener('click', ()=>{
  document.querySelector('.trialA').classList.toggle('active');
  
})
document.querySelector('.mentorQ').addEventListener('click', ()=>{
  document.querySelector('.mentorA').classList.toggle('active');
  
})
document.querySelector('.expQ').addEventListener('click', ()=>{
  document.querySelector('.expA').classList.toggle('active');
  
})
document.querySelector('.supportq').addEventListener('click', ()=>{
  document.querySelector('.supporta').classList.toggle('active');
 
})