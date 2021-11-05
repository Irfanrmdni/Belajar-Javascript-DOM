//element.innerHTML
//contoh 1 : mengubah isi dari tag h1 yang id nya judul
// const judul = document.getElementById('judul');
// judul.innerHTML = `Welcome to IRstudio`;

//contoh 2 : mengubah isi dari tag section id nya a
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = `<h1><em>Irfan ramdani</em></h1><h1><em>nabila</em></h1>`;

//element.style.<properti>
//contoh 1 : mengubah elmen tag h1 yang tidak memiliki id/class
// const judulUtama = document.getElementsByTagName('h1');
// judulUtama[0].style.backgroundColor = 'lightblue';

//element.setAttribute()
//contoh 1 : menambahkan atribute id di tag p yang mempunyai section id b
// const ubah = document.getElementById('b');
// const ubahP = ubah.getElementsByTagName('p');
// ubahP[0].setAttribute('id', 'paragraf5');

// cara kedua 
// const ubah = document.querySelector('#b p');
// ubah.setAttribute('id', 'paragraf5');

//element.getAttribute()
//contoh 1 : mengetahui isi attribute dari elemen / tag HTML
// ubah.getAttribute('id');

//element.removeAttribute()
//contoh 1 : menghilangkan attribute dari tag/elemen a
// const hapus = document.querySelector('#a a');
// hapus.removeAttribute('href');

//element.classList() -> untuk menambah / menghapus class
//1. mengetahui di elemen/tag p yang ada di id a punya class atau tidak
// const cek = document.querySelector('#a');
// const cekp = cek.getElementsByTagName('p');
// for (let i = 0; i < cekp.length; i++) {
//     cekp[i].classList;
// }

//2. menambah class di elemen/tag p1 yang ada di id a
// const tambahClass = document.querySelector('#a .p1');
// tambahClass.classList.add('label'); // -> maka akan bertambah class nya jadi p1 dan label

//3. menghapus class di elemen/tag p2 yang ada di id a
// const hapusClass = document.querySelector('#a .p2');
// hapusClass.classList.remove('p2'); // -> maka akan menghapus nama class nya 

//4. menambah class 'label' di elemen/tag p3 yang ada di id a dengan menggunakan toggle 
//(kalau ada class 'label' akan dihilangkan kalau tidak ada akan di tambah) 
// const tambahToggle = document.querySelector('#a .p3');
// tambahToggle.classList.toggle('label');

//5. mengetahui class dari elemen/tag p1 yang ada di id a
// tambahClass.classList.add('label2'); // -> jadi mempunyai 3 class yaitu p1 label label2
// tambahClass.classList.item(1); // -> untuk cek/menampilkan urutan ke 2 class dari p1 (dimulai dari 0)

//6. mereplace class dari elemen/tag label dari p1 yang ada di id a
// tambahClass.classList.replace('label', 'label5'); // -> ini akan mereplace class label menjadi label5

// ==================================================================================================================
// 1. innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = `<a href="https://www.youtube.com/">youtube</a>`;

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'irfan ramdani';

// 2. style
// const judul = document.getElementById('judul');
// judul.style.color = 'white';
// judul.style.backgroundColor = 'rebeccapurple';
// judul.style.textAlign = 'center';

// 3. setAttribute
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.querySelector('p');
// p4.setAttribute('class', 'subjudul');
// p4.setAttribute('id', 'subjudul');

// 4. getAttribute
// const div = document.getElementById('container');
// console.log(div.getAttribute('id'));

// const a = document.querySelector('section#a a');
// a.setAttribute('class', 'link');
// console.log(a.getAttribute('class'));
// console.log(a.getAttribute('href'));

// 5. removeAttribute
// const a = document.querySelector('section#a a');
// a.removeAttribute('href');

// 6. classList.add
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// 7. classList.remove
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.add('subjudul');
// p2.classList.remove('label');

// 8. classList.toggle
// const p2 = document.querySelector('.p2');
// p2.classList.toggle('label');

// 9. classList.item
// const secB = document.querySelector('section#b');

// secB.classList.add('judul');
// secB.classList.add('subjudul');
// secB.classList.add('content');

// console.log(secB.classList.item(0));
// console.log(secB.classList.item(1));
// console.log(secB.classList.item(2));

// 10. classList.contains
const p1 = document.getElementsByClassName('p1')[0];

p1.classList.add('satu');
p1.classList.add('dua');
p1.classList.add('tiga');

console.log(p1.classList.contains('dua'));

// 11. classList.replace
p1.classList.replace('tiga', 'sepuluh');