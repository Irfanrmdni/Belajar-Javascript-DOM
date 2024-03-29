// cara 01 event handler

// mengatur tombol x (close)

// menangkap elmen card dan close
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// // cara 01 (dengan CSS) - mengatur agar tombol close di klik maka akan hilang
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// ini hanya dapat membuat 1 aksi saja (ketika tombol di klik 1x maka berikutnya itu tdak bisa) karena querySelector nya bukan All


// cara 02 (dengan DOM Traversal) - mengatur agar tombol close di klik maka akan hilang

// menangkap elmen card dan close
// const close = document.querySelectorAll('.close');
// memanggil semua close dengan looping
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // ambil close pada indeks ke i, ambil/telusuri parent nya, setelah itu kasih display none 
//         // close[i].parentElement.style.display = 'none';

//         // atau dengan membuat parameter di function (e) -> maka event ini berisi event yang sedang terjadi (click)
//         e.target.parentElement.style.display = 'none'; // e nya akan ditarget (akan menghasilkan elemen close karena target nya)
//     });
// }

// cara 03 (dengan DOM Traversal dan forEach pengganti looping) - mengatur agar tombol close di klik maka akan hilang

// close.forEach(function (elemen) {
//     elemen.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     });
// });



// contoh DOM Traversal Method parentElement
// menangkap elemen class nama yang utama/pertama
// const nama = document.querySelector('.nama');
// console.log(nama.parentElement); // mengambil parent / induk yang pertama (card)

// console.log(nama.parentElement.parentElement); // mengambil parent / induk yang paling utama (container)  

// contoh DOM Traversal Method nextSibling
// console.log(nama.nextSibling); // ini akan mengambil baris baru/enter (kalau ada di elemen nya maka hasilnya text)

// contoh DOM Traversal Method nextElementSibling
// console.log(nama.nextElementSibling); // ini akan mengabaikan baris baru karena yang diambil adalah elemen bukan node (ini yang dipakai)

// contoh DOM Traversal Method prevElementSibling
// console.log(nama.previousElementSibling); // ini sama seperti nextElementSibling namun akan mengambil elemen sebelumnya (img)

// ===========================================================================================================================================

// 1. event handler
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// 2. dom traversal
const card = document.querySelectorAll('.card');
const close = document.querySelectorAll('.close');
// dengan for
/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // card[i].style.visibility = 'hidden';

        // close[i].parentElement.style.visibility = 'hidden';

        e.target.parentElement.style.visibility = 'hidden';
    });
} */

// dengan forEach
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.visibility = 'hidden';
    });
});

// DOM Traversal Method
const nama = document.querySelector('.nama');

// mengambil card
// console.log(nama.parentElement);
// console.log(nama.parentNode);

// mengambil container
// console.log(nama.parentElement.parentElement);
// console.log(nama.parentNode.parentNode);

// mengambil telp
// console.log(nama.nextElementSibling);

// nextSibling ini akan mengambil text / spasi 
// console.log(nama.nextSibling);

// mengambil img
// console.log(nama.previousElementSibling);

// nextSibling ini akan mengambil text / spasi 
// console.log(nama.previousSibling);