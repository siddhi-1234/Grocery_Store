 
 /* For search button */
 let searchForm=document.querySelector('.search-form');  /* searches the document for the first element that matches a CSS selector string you give it. */

 /* When you click the button with id="search-btn":It adds or removes the class active on the element you 
    stored in searchForm.This is often used to show or hide a search form */
    
 document.querySelector('#search-btn').onclick =()=>   /* finds the element on the page that has id="search-btn" */
 {
    searchForm.classList.toggle('active');  /* .classList is a property that represents the list of classes on that element */ 
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
    navbar.classList.remove('active'); 
 }

 /* For shopping cart */
  let shoppingCart=document.querySelector('.shopping-cart');  
    
 document.querySelector('#cart-btn').onclick =()=>  
 {
     
   shoppingCart.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
    navbar.classList.remove('active');   
 }

 /* For login form */
  let loginForm=document.querySelector('.login-form');  
    
 document.querySelector('#login-btn').onclick =()=>  
 {
    loginForm.classList.toggle('active'); 
    shoppingCart.classList.remove('active');
   searchForm.classList.remove('active');
    navbar.classList.remove('active'); 
 }

 /* For navbar media queries */
  let navbar=document.querySelector('.navbar');  
    
 document.querySelector('#menu-btn').onclick =()=>  
 {
    navbar.classList.toggle('active');  
    shoppingCart.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
    
 }

 window.onscroll =()=>  
 {
   searchForm.classList.remove('active'); 
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
    navbar.classList.remove('active'); 
    
 }