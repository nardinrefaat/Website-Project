

let homeBtn = document.getElementById("headBtn home")
let shopBtn = document.getElementById("headBtn Shop")
let aboutBtn = document.getElementById("headBtn about")
let contBtn = document.getElementById("headBtn cont") 
let prdBox = document.getElementById("row")
let acc = document.getElementById("acc")
let signup = document.getElementById("signup")
let purch = document.getElementById("purchases")
let contact = document.querySelector("#contact #contact")
let prd1 = document.getElementById("prd1")



purch.addEventListener('click' , function(){
    window.location.replace('wishlist.html');
})
aboutBtn.addEventListener('click' , function(){
    window.location.replace('about.html');
})
homeBtn.addEventListener('click' , function(){
    window.location.replace('index.html');
})
shopBtn.addEventListener('click' , function(){
    window.location.replace('shop.html');
})
contBtn.addEventListener('click' , function(){
    window.location.replace('contact.html');
})
acc.addEventListener('click' , function(){
    window.location.replace('login.html');
})
signup.addEventListener('click' , function(){
    window.location.replace('account.html');
})





contact.addEventListener('click' , function(event){
    const confirmation = confirm("Do you really want to call +2145486?");
    if (!confirmation) {
        event.preventDefault(); // Prevent the default action (navigating to the tel: link)
    }
})



prd1.addEventListener('click' , function(){
    
})
