
// Document Selection 2

// 1. document.getElementById() -> javascript tolong carikan elemen yang id nya ... yang ada di dalam document
// 2. document.getElementsByTagName() -> javascript tolong carikan elemen elemen yang tagName nya ... yang ada di dalam document
// 3. document.getElementsByClassName() -> javascript tolong carikan elemen yang class nya ... yang ada di dalam document

// 4. document.querySelector() -> Menanyakan selector (Selector CSS) javascript tolong carikan yang selector nya ... yang ada di dalam document
//Menghasilkan elemen

// memanggil elemen p di dalam id b
// membuat variabel untuk menampung elemen p
// const p4 = document.querySelector('#b p');
// mengubah warna elemen
// p4.style.color = 'green';
// p4.style.fontSize = '25px';

// memanggil elemen li di dalam id b
// membuat variabel untuk menampung li
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // mengubah background color li tengah / yang kedua
// li2.style.backgroundColor = 'Lightblue';

// 5. document.querySelectorAll() -> Menanyakan selector (Selector CSS) javascript tolong carikan yang semua selector nya ... yang ada di dalam document
//Menghasilkan nodeList

// mengubah semua elemen p
// membuat variabel untuk menampung elemen p
// const p = document.querySelectorAll('p');
// // mengubah background color elemen p dengan looping
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'salmon';
// }

// dengan cara memanggil elemen parent nya dan mengubah elemen di dalam nya
// membuat variabel untuk membuat elemen parent nya dan menampung nya
// const section2 = document.getElementById('b'); // -> karena elemen section nya id
// // mengubah elemen p di dalam id b / section2
// const p5 = section2.querySelector('p');
// p5.style.backgroundColor = 'cyan';

// cara lain dengan mengganti getElemenById dengan querySelector
// const section2 = document.querySelector('#b'); // ciri dari querySelector dia memakai tanda # karena id
// mengubah elemen li di dalam id b
// const li2 = section2.getElementsByTagName('li');
// for (let i = 0; i < li2.length; i++) {
//     li2[i].style.backgroundColor = 'salmon';
// }

// ===========================================================================================================================================================

// 1. querySelector
// const paragraf4 = document.querySelector('#b p');
// paragraf4.style.color = 'red';
// paragraf4.style.fontSize = '24px';

// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'lightblue';

// 2. querySelectorAll
// const paragraf = document.querySelectorAll('p');
// for (let i = 0; i < paragraf.length; i++) {
//     paragraf[i].style.backgroundColor = 'orange';
// }

// 2. mengubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'salmon';