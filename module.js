const btnImg = document.querySelector('.btn__img');
const btnImg1 = document.querySelector('.btn__img1');
const btnImg2 = document.querySelector('.btn__img2');
const btnImg3 = document.querySelector('.btn__img3');
const btnImg4 = document.querySelector('.btn__img4')
const imageContainer = document.querySelector('.image__container');
const closeModal = document.querySelector('#closeModal')
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modalText');
const cardImg = document.querySelector('.card-img')
const cards = document.querySelectorAll('.card')

const original = [...cards]
btnImg1.addEventListener('click', () => {
    imageContainer.innerHTML = '';

    original.forEach((card) => {
        const cardText = card.querySelector('.card-text').innerText;
        if (cardText === 'Веб-сайт') {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.style.marginTop = '60px'
            newCard.innerHTML = card.innerHTML;
            imageContainer.appendChild(newCard);
        }
    });
});

btnImg2.addEventListener('click', () => {
    imageContainer.innerHTML = '';

    original.forEach((card) => {
        const cardText = card.querySelector('.card-text').innerText;
        if (cardText === 'Додаток') {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.style.marginTop = '60px'
            newCard.innerHTML = card.innerHTML;
            imageContainer.appendChild(newCard);
        }
    });
});

btnImg3.addEventListener('click', () => {
    imageContainer.innerHTML = '';

    original.forEach((card) => {
        const cardText = card.querySelector('.card-text').innerText;
        if (cardText === 'Дизайн') {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.style.marginTop = '60px'
            newCard.innerHTML = card.innerHTML;
            imageContainer.appendChild(newCard);
        }
    });
});

btnImg3.addEventListener('click', () => {
    imageContainer.innerHTML = '';

    original.forEach((card) => {
        const cardText = card.querySelector('.card-text').innerText;
        if (cardText === 'Маркетинг') {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.style.marginTop = '60px'
            newCard.innerHTML = card.innerHTML;
            imageContainer.appendChild(newCard);
        }
    });
});

// if (cardImg) {
//     cardImg.addEventListener('click', () => {
//         modal.style.display = 'block';
//         modal.innerHTML = `<div class="container">
//         <div class="wrapper">
//             <main class="cards">
//                 <div class="card">
//                     <img src="./картинки/img (11).png" alt="" class="card-img">
//                     <div class="text">
//                         <h1 class="text-card">Технокряк</h1>
//                         <p class="card-text">Веб-сайт</p>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img src="./картинки/img (6).png" alt="" class="card-img">
//                     <div class="text2">
//                         <h1 class="text-card">Постер New Orlean vs Golden Star</h1>
//                         <p class="card-text">Дизайн</p>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img src="./картинки/img (7).png" alt="" class="card-img">
//                     <div class="text">
//                         <h1 class="text-card">Ресторан Seafood</h1>
//                         <p class="card-text">Додаток</p>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img src="./картинки/img (8).png" alt="" class="card-img">
//                     <div class="text">
//                         <h1 class="text-card">Проєкт Prime</h1>
//                         <p class="card-text">Маркетинг</p>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img src="./картинки/img (10).png" alt="" class="card-img">
//                     <div class="text3">
//                         <h1 class="text-card">Inspiration has no Borders</h1>
//                         <p class="card-text">Веб-сайт</p>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img src="./картинки/img (11).png" alt="" class="card-img">
//                     <div class="text3">
//                         <h1 class="text-card">Inspiration has no Borders</h1>
//                         <p class="card-text">Веб-сайт</p>
//                     </div>
//                 </div>
//             </main>
//         </div>
//       </div>`
//     }) 
// }

// modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none'
//     }
// })

// const btnContainer = document.querySelector('.btn__container');

// btnContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('active__btn')) return;

//     const activeBtn = btnContainer.querySelector('.active__btn');
//     if (activeBtn) activeBtn.classList.remove('active__btn');

//     event.target.classList.add('active__btn');
// });

const objCards = [
    {image: "./картинки/img (6).png", content: 'Технокряк', discribe: 'Веб-сайт', id: 6},
    {image: "./картинки/img (7).png", content: 'Постер New Orlean vs Golden Star', discribe: 'Дизайн', id: 7},
    {image: "./картинки/img (8).png", content: 'Ресторан Seafood', discribe: 'Додаток', id: 8},
    {image: "./картинки/img (9).png", content: 'Проєкт Prime', discribe: 'Маркетинг', id: 9},
    {image: "./картинки/img (10).png", content: 'Inspiration has no Borders', discribe: 'Веб-сайт', id: 10},
    {image: "./картинки/img (11).png", content: 'Макет Prime', discribe: 'Веб-сайт',id: 11},
];

cards.forEach((card) => {
    console.log(card.id);
    if(card.id === '6'){
        card.addEventListener('click', (event) => {
            console.log(event.target);
           let modalAppend = `
           <span id="closeModal">&times;</span>
           <img src="${objCards[0].image}">
           <h1>${objCards[0].content}</h1>
           <span>${objCards[0].discribe}</span>
           `
        modal.insertAdjacentHTML('beforeend', modalAppend)
        modal.classList.toggle("window__modal")
        })
    }
})


