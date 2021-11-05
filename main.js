/**
 * Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
 */

// creiamo array di 5 oggetti
const post = [
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://picsum.photos/id/122/600/350',
        like: 100
    },
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://picsum.photos/id/122/600/350',
        like: 100
    },
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://picsum.photos/id/122/600/350',
        like: 100
    },
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://picsum.photos/id/122/600/350',
        like: 100
    },
    {
        nome: 'Matteo Rossi',
        profilo: 'https://picsum.photos/id/1/600/350',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://picsum.photos/id/122/600/350',
        like: 100
    },
]


