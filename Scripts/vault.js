
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