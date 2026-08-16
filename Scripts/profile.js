function add(navData){

        navData.push({name:"Archive", url:"", icon:false},
                    {name:"Settings", url:"", icon:true, iconName:"fa-solid fa-gear"});

        return navData;

        
     }

     
const navItems = add(navData);



window.addEventListener("load",page);
const headerPhrase= "About Us";
function page(){
    headerTemplate(headerPhrase);

// #####

const intro={
    heading: "Write It. Keep It. Rememeber It.",
    paragraph: "Your own personal space to record moments, thoughts, ideas and memories that reflect your experiences. "
}

pageIntro(intro);

// ####

footer();
}