const navbarBtn = document.querySelector('.fa-bars')

const closeBtn = document.querySelector('.fa-xmark')

const overlayDivi = document.querySelector('.official-overlay')

const dropdownDivi = document.querySelector('.dropdown-content')
const navbarinDorduncuLinki = document.querySelector('.nav-bottom__right > a:nth-child(4)')

console.log(navbarinDorduncuLinki)

const boxesDivi = document.querySelector('.boxes')


// HADISE DINLEYICILERI

navbarBtn.addEventListener('click',openOverlay)
closeBtn.addEventListener('click', closeOverlay)

navbarinDorduncuLinki.addEventListener('click', openDropMenyu)
// FIUNKSIYALAR
function openOverlay() {
   overlayDivi.classList.add('overlay-aktiv')
}


function closeOverlay() {
  overlayDivi.classList.remove('overlay-aktiv')
}


function openDropMenyu(e) {
    e.preventDefault()
dropdownDivi.classList.toggle('drop-aktiv')
}



// WINDOW.ADDEVENTLISTENER
// onload

// load vs DOMContentLoaded

window.addEventListener('DOMContentLoaded', melumatlariPlaceholderdenGetir)
// asinxron proqramlashdirma

async function melumatlariPlaceholderdenGetir() {
const unvan = "https://jsonplaceholder.typicode.com/posts"

// request - sen terefden istek gonderilir


try {
    const gelenCavab = await fetch(unvan) //response 
    const gelenCavabJSONaCevir= await gelenCavab.json()

    // console.log(gelenCavabJSONaCevir[0].title)
    // console.log(gelenCavabJSONaCevir[1].title)
    // console.log(gelenCavabJSONaCevir[2].title)
    // console.log(gelenCavabJSONaCevir[3].title)

    for(let i=0; i<100; i++) {
        boxesDivi.innerHTML += `<div class="box">
        <img src="./assets/images/exam.png" alt="">
        <div class="type-block">
            ${gelenCavabJSONaCevir[i].id}
        </div>

        <div class="title">
           ${gelenCavabJSONaCevir[i].title}
        </div>
    </div>`
    }

    
}

// x=5
// x+=25 x=x+25

catch(err){

}
}