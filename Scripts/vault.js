
function add(navData){

        navData.push({name:"Archive", url:"", icon:false},
                    {name:"Settings", url:"", icon:true, iconName:"fa-solid fa-gear"});

        return navData;

        
     }

     
const navItems = add(navData);

const headerPhrase = "The Vault";


window.addEventListener("load",page);

function page(){

headerTemplate(headerPhrase);

// ########

const intro={
    heading: "Memory Vault",
    paragraph: "Yesterday's whispers, today's refelctions and tomorrow's treasures. Where fleeting moments find a home and every chapter of your story is safely kept. "
}

pageIntro(intro);

// #####


cardData(cards);

// ###

footer();


}