// membuat event onclick pada p3 yang ada di section id a (dengan inline HTML)
// tangkap dulu elemen nya
const p3 = document.querySelector('section#a .p3');
// buat dulu functon nya
function ubahBGp3() {

    p3.style.backgroundColor = 'lightblue';
}

// membuat event onclick pada p2 yang ada di section id a (dengan method)
// tangkap dulu elemen nya
const p2 = document.querySelector('section#a .p2');
//buat dulu function nya
function ubahBGp2() {
    p2.style.backgroundColor = 'lightgreen';
}
// buat method nya
p2.onclick = ubahBGp2;

// membuat event ketika di click akan muncul alert di elemen p yang ada di section id b (dengan AddEventListener())
// tankap dulu elemen nya
/* const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    alert('Hello world!');
});
 */
// membuat event ketika di click paragraf 4 di elemen section id b maka akan menambahkan elemen baru (dengan AddEventListener())
// tangkap dulu elemen nya 
const p4 = document.querySelector('section#b p');
// buat method nya 
p4.addEventListener('click', function () {
    // tangkap dulu elemen ul nya
    const ul = document.querySelector('section#b ul');
    // buat elemen baru li
    const liBaru = document.createElement('li');
    // buat isi elemen baru li nya
    const textLiBaru = document.createTextNode('item baru');
    // masukan isi elemen nya ke elemen liBaru
    liBaru.appendChild(textLiBaru);
    // masukan liBaru nya ke ul
    ul.appendChild(liBaru);
});


// contoh menggunakan event handler dengan membuat 2 event (ini akan menimpa perubahan sebelumnya)
// menangkap elemen p1 di section id a
const p1 = document.querySelector('section#a .p1')

/* p1.onclick = function () {
    p1.style.backgroundColor = 'salmon';
}
p1.onclick = function () {
    p1.style.backgroundColor = 'blue';
} */

// contoh menggunakan AddEventListener dengan membuat 2 event (ini akan menambah bukan menimpa)
p1.addEventListener('click', function () {
    p1.style.backgroundColor = 'lightblue';
});
p1.addEventListener('click', function () {
    p1.style.color = 'red';
});

const h1 = document.getElementsByTagName('h1')[1];
h1.addEventListener('click', function () {
    h1.style.backgroundColor = ('salmon');
});
h1.addEventListener('click', function () {
    h1.style.color = ('white');
});


