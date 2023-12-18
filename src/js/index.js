function navToLink(){
    let link = "about.html";
    window.location.href = link;
}
function welcome(){
    alert("Welcome to my personal website 👋")
}
function close(){
    let suggestionBox = prompt("Please help me improve my website by giving a suggesion here: ");
    
    if(suggestionBox != ""){
        alert("Thank you for your kind suggestion.")
    }else{alert("Maybe another time!")}
    localStorage.setItem('savedMessage', suggestionBox);
}
function retriveMessage(){
    let savedMessage = localStorage.getItem('savedMessage');
    console.log(savedMessage || "No saved Messages for today.")
}

if(window.location.pathname.includes("home.html")){
    welcome();
    
}
if(window.location.pathname.includes("contact.html")){
    close();

}