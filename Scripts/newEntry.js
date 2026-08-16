 
const navItems= [...navData];
console.log(navData);


 function add(navItems){
       navItems.unshift({name:"Archive", url:"", icon:false});
      navItems.splice(1,1);
      navItems.splice(2,1);

 
    return navItems;

        
   };
console.log(add(navItems));

    

 window.addEventListener("load",page);

 function page(){

headerTemplate();

footer();

 }


const allCards = [...cards];

 let entry={id: "",
              date: "",
              heading:"",
              entry:"",};



const entryDate= document.getElementById("date");

 window.addEventListener("load",
function updateDate(){

    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-GB",{

        weekday : "long",
        day : "numeric",
        month: "long",
        year : "numeric"

    });

   
   entryDate.textContent= formattedDate;
    entry.date= entryDate.textContent;

});

 

 
              
 
// THOUGHTFUL
const thoughtfulButton = document.getElementById("thoughtfulButton");
let isThoughtful= false;
 thoughtfulButton.addEventListener("click",thoughtful);
 function thoughtful(){
  if (isThoughtful != true){
    isThoughtful= true;
    entry.thoughtful= true;
  }else {
    isThoughtful=false;
    entry.thoughtful = false}

 };

// PRIVATE 
const privateButton= document.getElementById("private");
let isPrivate= false;
privateButton.addEventListener("click",makePrivate);
function makePrivate(){
  if (private != true){
    private= true;
    entry.private= true;
  }else {
    private=false;
    entry.private = false}
  // THIS LOGIC IS NOT WORKING!!!!!!!!!!YOU NEED TO BE ABLE TO TOGGLE PRIVATE ON AND OFF. BECAUSE RIGHT NOW, ONCE THE USER MAKES IT PRIVATE THEY CANT MAKE IT UNPROVATE!
 
};





//  THE TAG BUTTON AND ALL ITS EFFECTS
  const tagListArray = [
        {name: "Family",id: 1},
        {name: "Work",id:2 },
        {name: "Ideas", id: 3},
        {name: "Travel", id:4}

    ];


const tagList= document.createElement("div");


function createTagMenu(){
  console.log("create function ran");

 

     const ul=document.createElement("ul");
     ul.id="tagMenu";

    tagListArray.forEach(tag=>{
       console.log("loop works");
        const li= document.createElement("li");
        const button= document.createElement("button");
        button.addEventListener("click",addTag);
        button.textContent=tag.name;
        button.value= tag.name;

        li.appendChild(button);
         ul.appendChild(li);
    })

    tagList.appendChild(ul);

    return tagList;

   


};

   

 function addTag(event){
  tagRoot.classList.remove("show");
  entry.tag= event.target.value;

  console.log(entry);
 }

const tagRoot= document.getElementById("tagRoot");
tagRoot.setAttribute("class","tagRoot");
    tagRoot.appendChild(createTagMenu());

 const tagButton = document.getElementById("tagButton");
 tagButton.addEventListener("click",()=>{
   console.log("the tag button is working");
    tagRoot.classList.toggle("show"); console.log(tagRoot);});

// DISCARDING ENTRY
 const discardButton= document.getElementById("discard");
  discardButton.addEventListener("click",discardEntry);

function discardEntry(){
  confirm("You Are About To Delete Your Entry. Are You Sure?");
true &&   (entry={id: "",
              date: "",
              heading:"",
              entry:""});

console.log(entry);
};

// UPDATING THE HEADING
const entryTitle= document.getElementById("entryTitle");
entryTitle.addEventListener("input",(event)=>{
  entry.heading = event.target.value;

});

// UPDATING THE ENTRY
const textArea= document.getElementById("textarea");
textArea.addEventListener("input",(event)=>{
  entry.entry = event.target.value;
});



// SAVInG THE ENTRY
const saveButton= document.getElementById("save");
saveButton.addEventListener("click",saveEntry);

 function saveEntry(){
// this code generates random number letter combinations.
entry.id= crypto.randomUUID();

allCards.unshift(entry);

console.log("this is allCards");
console.log(allCards);

console.log("this is old entry");
console.log(entry);
// the code below has taken the updated allCards and stored it as the 
// last saved version of cards.
localStorage.setItem("cardStorage", JSON.stringify(allCards));

entry = {id: "",
              date: "",
              heading:"",
              entry:""};

              console.log("this is new entry");
              console.log(entry);

 };

// this code below gets the storedCards (the last stored version)
// of the allCards converts it to the array so it can be used.
// i dont think i need it right now. i think it will be usefull when
// i want to do something with the stored data. right now i just keep 
// updating it as per new entry

const storedCards= JSON.parse(localStorage.getItem("cardStorage"));




// const insertMemory= document.getElementById("insertMemory");
// insertMemory.addEventListener("click",addMemory);
// function addMemory(){};

