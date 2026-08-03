
window.addEventListener("load",page);

function page(){

headerTemplate();

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