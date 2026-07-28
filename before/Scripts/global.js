// NAVIGATION
const navItems = [
     {name:"Home",      url: "home.html",    icon:false},
     {name:"New Entry", url:"newEntry.html", icon:false}, 
     {name: "Vault",    url:"vault.html",    icon:false},
     {name:"Profile",   url:"profile.html",  icon:true, 
        iconName: "fa-regular fa-circle-user"}];
// this can be declared globally so i can add things to it later

// window.addEventListener("load",headerTemplate);

const rootOne = document.getElementById("rootOne");


function headerTemplate(){


const navUl = document.createElement("ul");

navItems.forEach (item=>{
    
    const link= document.createElement("a");
    link.setAttribute("href",item.url);

    if(item.icon){
        const iconElement = document.createElement("i");
        iconElement.className=item.iconName;

        link.appendChild(iconElement);

    }else {
     link.textContent= item.name;
    }

    const navLi= document.createElement("li");
    navLi.appendChild(link);

    navUl.appendChild(navLi);
    
});

const globalNav = document.createElement("nav");
globalNav.id="globalNav";
    globalNav.appendChild(navUl);

const globalHeader = document.createElement("header");
globalHeader.id="globalHeader";
    globalHeader.appendChild(globalNav);
    
const h1 = document.createElement("h1");
h1.textContent= "Personal Chronicles";
h1.id= "pageHeading";

globalHeader.id = "globalHeader";
globalHeader.appendChild(h1);


rootOne.appendChild(globalHeader);



};
 
    /* so this section creates the ul.
then it loops through the above array, creating an anchor tag with 
the corresponding href url and text content of each item.
then it adds that anchor to an li. All of the li are then added 
to the ul.
then if there is an icon present, an icon element is created,
and its classname created then appended into the a tag content.*/ 

// END OF HEADER!!


// yOU CAN CREATE THE HEADER IN SUCH A WAY THAT GLOBAL ONLY DESCRIBES THE STRUCTUE 




// PAGE INTRODUCTION


function pageIntro(intro){


 
   const div= document.createElement("div"); 
   div.id="pageIntro";
   const introH2= document.createElement("h2");

   introH2.textContent= intro.heading;
        const introP= document.createElement("p");
        introP.textContent= intro.paragraph;
    
    div.appendChild(introH2);
    div.appendChild(introP);

    rootOne.appendChild(div);

}



/*
The page intro function is just being declared here. if i want it 
to load, on the specific page.js i want it to load on, i will call it there.
this means global.js has to load first inorder for the page.js to have a reference
to this function.
*/

// CARDS

// card is an object. cards is an array OF OBJECTS

function cardData(cards){
const cardsContainer= document.createElement("div");
cardsContainer.id="cardsContainer";

cards.forEach (card =>{

    const cardDiv= document.createElement("div");
    cardDiv.setAttribute("class", "card");

    const cardDate= document.createElement("p");
    cardDate.textContent= card.date;

 
cardDiv.appendChild(cardDate);

    const cardHeading= document.createElement("h2");
    cardHeading.textContent= card.heading;

cardDiv.appendChild(cardHeading);

const cardEntry= document.createElement("p");
cardEntry.textContent= card.entry;
 cardDiv.appendChild(cardEntry);

cardsContainer.appendChild(cardDiv);

})

rootOne.appendChild(cardsContainer);

}
