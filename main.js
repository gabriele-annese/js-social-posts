/**
 * Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
 */

// generiamo numeri random per foto
const Numbers = [];
for(let i = 0; i < 5; i++){
    const number =  Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    if(!Numbers.includes(number)) {
        Numbers.push(number)
    }
}
console.log(Numbers)

// creiamo array di 5 oggetti
const post = [
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: `https://picsum.photos/id/${Numbers[0]}/600/350`,
        like: 100
    },
    {
        nome: 'Martina Greco',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: `https://picsum.photos/id/${Numbers[1]}/600/350`,
        like: 100
    },
    {
        nome: 'Franceso Ascani',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        img: `https://picsum.photos/id/${Numbers[2]}/600/350`,
        like: 100
    },
    {
        nome: 'Rosa Gallo',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum.',
        img: `https://picsum.photos/id/${Numbers[3]}/600/350`,
        like: 100
    },
    {
        nome: 'Giacomo Ferrari',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut aliaslibero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut aliaslibero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: `https://picsum.photos/id/${Numbers[4]}/600/350`,
        like: 100
    },
]
console.log(post)
// creiamo nodo 
const postContainer = document.querySelector("#container");
// printiamo i post
genPost(post, postContainer,);

// *********************FUNZIONE************************************//
function genPost(array, container){
    container.innerHTML = "";
    for(let i = 0; i < array.length ; i++){
        const info = array[i];
    
        //creare aggiungere il markup
        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${info.profilo}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${info.nome}</div>
                        <div class="post-meta__time">${info.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${info.text}</div>
            <div class="post__image">
                <img src="${info.img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${info.like}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
    }
}


function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }