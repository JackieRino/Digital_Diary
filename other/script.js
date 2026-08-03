


function updateDate(){

    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-GB",{

        weekday : "long",
        day : "numeric",
        month: "long",
        year : "numeric"

    });

    document.getElementById("date").textContent= formattedDate;

};





















// pug html

// const header = '<header id="homeHeader" className="allHeader">    <h1 style="font-size: medium;">Digital Diary</h1><nav id="homeNav" class="allNav">        <ul>           <li><a href="/newEntry.html"  id="newEntryLink">New Entry</a></li>           <li><a href="/vault.html"> <i class="fa-regular fa-circle-user"></i></a></li>       </ul>    </nav>    </header>'

// updateDate();
// // setInterval(updateClock,1000);
// const createTemplate =() => {
//     const globalHeader = document.createElement('header');
// globalHeader.id = '';
// globalHeader.classList.add('');
// globalHeader.appendChild(globalHeader)
// }
