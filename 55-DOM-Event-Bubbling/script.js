// // Event Bubbling

// // menangkap elmen close (child dari parent card) -> dikasih event
// const close = document.querySelectorAll('.close');


// // cara 03 (dengan DOM Traversal dan forEach pengganti looping) - mengatur agar tombol close di klik maka akan hilang
// close.forEach(function (elemen) {
//     elemen.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // contoh menggunakan prevent default (ini akan menghentikan aksi default dari tag a hyperlink nya)
//         e.stopPropagation(); // maka ini hanya akan menjalankan event yang child nya aja (tanpa parent nya)
//     });
// });


// // menangkap elemen card (parent dari child close) -> dikasih event
// const cards = document.querySelectorAll('.card');
// // membuat looping dengan forEach
// cards.forEach(function (kartu) { // untuk setiap cards (looping) akan diberi nama (kartu)
//     // maka jalankan fungsi berikut

//     // untuk setiap kartu akan di kasih event click dan untuk function e akan menjalankan aksi click
//     kartu.addEventListener('click', function (e) {
//         alert('ok');
//     });
// });

// // ketika parent dan child nya dikasih event maka ini yang dijalankan adalah parent dan child nya juga 
// // nah kita mau hanya menjalankan event si child nya aja .. bagaimana ? nah kita gunakan stopPropagation()

// berikut cara agar event nya berhenti di container atau kita buat event terakhir nya di container (cara paling efektif daripada yang diatas)
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target); -> nah ini akan ketika mouse di klik maka akan mentarget elemen yang ada di dalam containe 
    if (e.target.className == 'close') { // jika elemen yang di target itu punya nama class 'close'
        e.target.parentElement.style.display = 'none'; // maka e.target (close nya) parent nya (card) akan di kasih style display none
    }
});


