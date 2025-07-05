 let searchForm=document.querySelector('.search-form');  /* searches the document for the first element that matches a CSS selector string you give it. */

 /* When you click the button with id="search-btn":It adds or removes the class active on the element you 
    stored in searchForm.This is often used to show or hide a search form */
    
 document.querySelector('#search-btn').onclick =()=>   /* finds the element on the page that has id="search-btn" */
 {
    searchForm.classList.toggle('active');  /* .classList is a property that represents the list of classes on that element */
 }