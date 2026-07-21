const globalHeader = document.createElement("header");

const globalNav = document.createElement("nav");
const navUl = document.createElement("ul");
const navLi= document.createElement("li");

const h1 = document.createElement("h1");
h1.textContent= "Personal Chronicles";
h1.id= "PageHeading";

globalHeader.id = "globalHeader";
globalHeader.appendChild("h1");












const newEntryLink= document.createElement("a");
newEntryLink.setAttribute("href","newEntry.html");
newEntryLink.id= "newEntryLink";
// this is just for the new entry link.




const profileLink = document.createElement("a");
profileLink=setAttribute("href","profile.html");

const profileIcon= document.createElement("i");
profileIcon.className="fa-regular fa-circle-user";

profileLink.appendChild(profileIcon);




const navItems = [
     {name:"Home",      url: "home.html"},
     {name:"New Entry", url:"newEntry.html"}, 
     {name: "Vault",    url:"vault.html"},
     {name:"Profile",   url:"profile.html"}];
// this can be declared globally so i can add things to it later





const navUl = document.createElement("ul");

navItems.forEach (item=>{
    
    const link= document.createElement("a");
    link.setAttribute("href",item.url);
    link.textContent= item.name;

    const navLi= document.createElement("li");
    navLi.appendChild(link);

    navUl.appendChild(navLi);
    
});
// 



 
    c
    const globalNav = document.createElement("nav");
    globalNav.appendChild(navUl);

    const globalHeader = document.createElement("header");
    globalHeader.appendChild(globalNav);

const h1 = document.createElement("h1");
h1.textContent= "Personal Chronicles";
h1.id= "PageHeading";

globalHeader.id = "globalHeader";
globalHeader.appendChild("h1");