/*this is where you take the components from global
and decide how they will be structured inside home
same fro the other pages
*/
 const navItems= navData;

window.addEventListener("load",page);

function page(){

headerTemplate();

// ########

const intro={
    heading: "Daily Reflections",
    paragraph: "A sanctuary for your thoughts. Captured in the quiet moments between the noise of the world"
}

pageIntro(intro);

// #####


cardData(cards);

// ###

footer();


}

