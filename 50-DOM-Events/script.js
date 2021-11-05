// membuat event onclick pada p3 yang ada di section id a (dengan inline HTML)
// tangkap dulu elemen nya
// const p3 = document.querySelector('section#a .p3');
// buat dulu functon nya
// function ubahBGp3() {

//     p3.style.backgroundColor = 'lightblue';
// }

// membuat event onclick pada p2 yang ada di section id a (dengan method)
// tangkap dulu elemen nya
// const p2 = document.querySelector('section#a .p2');
//buat dulu function nya
// function ubahBGp2() {
// p2.style.backgroundColor = 'lightgreen';
// p2.style.fontSize = '30px';
// }
// buat method nya
// p2.onclick = ubahBGp2;

// membuat event ketika di click akan muncul alert di elemen p yang ada di section id b (dengan AddEventListener())
// tankap dulu elemen nya
/* const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    alert('Hello world!');
});
 */
// membuat event ketika di click paragraf 4 di elemen section id b maka akan menambahkan elemen baru (dengan AddEventListener())
// tangkap dulu elemen nya 
// const p4 = document.querySelector('section#b p');
// buat method nya 
// p4.addEventListener('click', function () {
// tangkap dulu elemen ul nya
// const ul = document.querySelector('section#b ul');
// buat elemen baru li
// const liBaru = document.createElement('li');
// buat isi elemen baru li nya
// const textLiBaru = document.createTextNode('item baru');
// masukan isi elemen nya ke elemen liBaru
// liBaru.appendChild(textLiBaru);
// masukan liBaru nya ke ul
// ul.appendChild(liBaru);
// });


// contoh menggunakan event handler dengan membuat 2 event (ini akan menimpa perubahan sebelumnya)
// menangkap elemen p1 di section id a
// const p1 = document.querySelector('section#a .p1')

/* p1.onclick = function () {
    p1.style.backgroundColor = 'salmon';
}
p1.onclick = function () {
    p1.style.backgroundColor = 'blue';
} */

// contoh menggunakan AddEventListener dengan membuat 2 event (ini akan menambah bukan menimpa)
// p1.addEventListener('click', function () {
//     p1.style.backgroundColor = 'lightblue';
// });
// p1.addEventListener('click', function () {
//     p1.style.color = 'red';
// });

// const h1 = document.getElementsByTagName('h1')[1];
// h1.addEventListener('click', function () {
//     h1.style.backgroundColor = ('salmon');
// });
// h1.addEventListener('click', function () {
//     h1.style.color = ('white');
// });

// =========================================================================================================================================================

// 1. event handler

// - dengan inline HTML
// const p3 = document.querySelector('.p3');
// function ubahWarnaP1() {
//     p3.style.backgroundColor = 'salmon';
// }

// - dengan method function
// const p2 = document.querySelector('.p2');
// cara ke 1
// p2.onclick = function ubahwarnaP2() {
//     p2.style.backgroundColor = 'salmon';
// }
// cara ke 2
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'salmon';
// }
// p2.onclick = ubahWarnaP2;

// 2. addEventListener
// const p4 = document.getElementsByTagName('p')[3];
// p4.addEventListener('click', function (e) {
//     const ulParent = document.querySelector('section#b ul');

//     const liNew = document.createElement('li');
//     const textLi = document.createTextNode(`item`);
//     liNew.appendChild(textLi);

//     ulParent.appendChild(liNew);
// });

// perbedaan event handler dan addEventListener

// 1. event handler - memberi 2 style berbeda
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'rebeccapurple';
// }
// yang terjadi adalah style yang pertama akan ditimpa
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

// 2. addEventListener - memberi 2 style berbeda
p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'rebeccapurple';
});
// yang terjadi adalah style nya akan berfungsi semuanya
p3.addEventListener('click', function () {
    p3.style.color = 'red';
});