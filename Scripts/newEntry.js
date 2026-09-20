 
const navItems= [...navData];
console.log(navData);


 function add(navItems){
       navItems.unshift({name:"Archive", url:"..//Html/archive.html", icon:false});
      // navItems.splice(1,1);
      navItems.splice(2,1);

 
    return navItems;

        
   };
console.log(add(navItems));

    

 window.addEventListener("load",page);

const headerPhrase = "Begin A Chronicle...";
 function page(){

headerTemplate(headerPhrase);

footer();

 }

 const storedCards= JSON.parse(localStorage.getItem("cardStorage"));

let allCards;

if (storedCards){
  allCards = storedCards;
}else{
  allCards=[...cards];
}
// above code. basically if there is a stored version in local storage use that, if not use 
// a copy of the component as the starting baseline.

//  let entry={id: "",
//               date: "",
//               heading:"",
//               entry:"",
//               tag:[]};


// ## THIS SECTION CREATES THE DATE FORMAT AND displays it as the value of the input at the date Id (updated*)
const entryDate= document.getElementById("date");

 window.addEventListener("load",updateDate);

function updateDate(){

    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-GB",{

        weekday : "long",
        day : "numeric",
        month: "long",
        year : "numeric"

    });

   
   entryDate.value= formattedDate;


};
// this is okay. 
              




// PRIVATE 
const privateButton= document.getElementById("private");
privateButton.addEventListener("click",makePrivate);
function makePrivate(event){
  console.log("private Button");
    event.target.classList.add("clicked");
  //  makes the button gold when clciked.
  // remember to remove the class at form submission

  // this button doesnt work
 
 
};





//  THE TAG BUTTON AND ALL ITS EFFECTS
  const tagListArray = [
        {name: "Family", id: 1},
        {name: "Work", id:2 },
        {name: "Ideas", id: 3},
        {name: "Travel", id:4}

    ];


const tagList= document.createElement("div");
tagList.id="tagList";

function createTagMenu(){

    tagListArray.forEach(buttonTag=>{
    console.log(buttonTag);
        const eachTagButton= document.createElement("button");
        eachTagButton.addEventListener("click",(event)=>addTag(event,buttonTag));
        eachTagButton.textContent=buttonTag.name;
        eachTagButton.value= buttonTag.name;
        eachTagButton.name="entryTag";
        eachTagButton.type="button";
      
        
        eachTagButton.setAttribute("class","tagButtons");

         tagList.appendChild(eachTagButton); 
    })
   return tagList;

};
// foro each `tag` inside the tagListArray, create a button for it, whose value, name, type class attributes are those respectively and put the tag.name as the text content. then put each entire button inside the tagList div. 

   const tags=[];

 function addTag(event,buttonTag){  
  event.currentTarget.classList.toggle("clicked");


if(event.currentTarget.classList.contains("clicked") ){
  
  const newTag={id: buttonTag.id, addedTag: buttonTag.name};
    tags.push(newTag)

  return   tags;

  }else{
  
   const index= tags.findIndex(eachtag=>{
    return buttonTag.id == eachtag.id;
      
  });

  tags.splice(index,1);
  
return tags;
  }
  /*#add tag takes event and buttonTag as parameters. these are passed at the function call and at the declaration.
     #when the button is clicked, it calls this function. with every click the classlist "clicked" is toggled on and off. default is off.
     #if at any particular click, "clicked" has been toggled on, then newTag variable is created where its assigned an object whose valued are buttonTag id and name.
     #if when clicked the "clicked" class is not there then 
     a vairable called index is created whose value is a number resulting from the expression: go into tags, call each object 'eachTag', check is buttonTag id is equal to eachTag id. find the index of that object. 
     then splice the tags array at the index provided and only that object.
     */
  
 }


const tagRoot= document.getElementById("tagRoot");
tagRoot.setAttribute("class","tagRoot");
    tagRoot.appendChild(createTagMenu());

 const addTagButton = document.getElementById("tagButton");
 addTagButton.addEventListener("click",()=>{
    tagRoot.classList.toggle("show");});



// // DISCARDING ENTRY
//  const discardButton= document.getElementById("discard");
// discardButton.addEventListener("click",discardEntry);

// function discardEntry(){
//   confirm("You Are About To Delete Your Entry. Are You Sure?");
//  true &&   (entry={id: "",
//                date: "",
//               heading:"",
//                entry:""});

// console.log(entry);
 

// // UPDATING THE HEADING
// const entryTitle= document.getElementById("entryTitle");
// entryTitle.addEventListener("input",(event)=>{
//   entry.heading = event.target.value;

// });

// UPDATING THE ENTRY
// const textArea= document.getElementById("textarea");
// textArea.addEventListener("input",(event)=>{
//   entry.entry = event.target.value;
// });



// // SAVInG THE ENTRY
// const saveButton= document.getElementById("save");
// saveButton.addEventListener("click",saveEntry);

//  function saveEntry(){
// // this code generates random number letter combinations.
// entry.id= crypto.randomUUID();

// allCards.unshift(entry);

// console.log("this is allCards");
// console.log(allCards);

// console.log("this is old entry");
// console.log(entry);
// // the code below has taken the updated allCards and stored it as the 
// // last saved version of cards.
// localStorage.setItem("cardStorage", JSON.stringify(allCards));

// entry = {id: "",
//               date: "",
//               heading:"",
//               entry:""};
              
// Also the input areas do not reset after the save button has been clicked. they should.
//               console.log("this is new entry");
//               console.log(entry);

//  };

// this code below gets the storedCards (the last stored version)
// of the allCards converts it to the array so it can be used.
// i dont think i need it right now. i think it will be usefull when
// i want to do something with the stored data. right now i just keep 
// updating it as per new entry

// const storedCards= JSON.parse(localStorage.getItem("cardStorage"));



// INSERT MEMORY
// not sure how this will work. pin it for now.


// const insertMemory= document.getElementById("insertMemory");
// insertMemory.addEventListener("click",addMemory);
// function addMemory(){};




// THOUGHTFUL (updated*)
const thoughtfulButton = document.getElementById("thoughtfulButton");

 thoughtfulButton.addEventListener("click",thoughtfulHandler);
 
  function thoughtfulHandler(event){
    event.target.classList.toggle("clicked");
    
    // remember to remove the class at the form submission
    event.target.classList.contains("clicked") ? thoughtfulButton.value ="true" : thoughtfulButton.value = "false";

    return console.log(thoughtfulButton.value);
  }


// # form submission

// const entry= 
const entries= JSON.parse(localStorage.getItem("cardStorage")) ||[];

const formElement= document.getElementById("form");

formElement.addEventListener("submit", (event)=>onSubmit((event)));

function onSubmit(event){
  event.preventDefault();
  // prevents auto submission by browser when button is clicked

  const formInfo= new FormData(event.currentTarget);
  // take the infromation collected from the form(target) that was targeted by the event(submission) and store it in the variable formInfo

  const infoObject= Object.fromEntries(formInfo);
  // take the data inside formInfo and store it in the variable infoObject in the formatt of an object.
const currentTags=[...tags];

  infoObject.thoughtful= thoughtfulButton.value;
  infoObject.tags= currentTags;
  infoObject.id = crypto.randomUUID();
  // create a unique id for the newly created object


entries.unshift(infoObject);
console.log(entries);
 localStorage.setItem("cardStorage",JSON.stringify(entries));


//#RESETTING FORM#

event.currentTarget.reset();
updateDate();


// resets the tags array
tagRoot.classList.remove("show");
console.log(JSON.parse(localStorage.getItem("cardStorage")));
tags.length=0;
console.log(tags);
console.log(JSON.parse(localStorage.getItem("cardStorage")));
// tagList.querySelectorAll(".tagButtons").classList.remove("clicked");
const clickedButtons = tagList.querySelectorAll(".clicked");
clickedButtons.forEach(button=>
  button.classList.remove("clicked"));
console.log(clickedButtons);

// resets the thoughtful 
thoughtfulButton.classList.remove("clicked");
thoughtfulButton.value = "false";


}