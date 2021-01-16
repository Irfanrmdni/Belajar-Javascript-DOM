
// menghapus button yang memiliki class delete-item (class nya ada banyak)

// dengan querySelector - ini hanya akan bekerja hanya pada class yang pertama
// const del = document.querySelector('.delete-item');
// del.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
// });


// dengan querySelectorAll - ini akan bekerja pada semua class yang memiliki nama delete-item (karena querySelectorAll)
// const del = document.querySelectorAll('.delete-item');

// del.forEach(function (elemen) {
//     elemen.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     })
// });


// dengan mengambil document body dan target berdasarkan class name (jika class nya terdapat banyak nama maka kita harus seleksi semua class nya)
// document.body.addEventListener('click', function (e) {
//     if (e.target.className === 'float-right btn btn-danger btn-sm delete-item') {
//         e.target.parentElement.style.display = 'none';
//     }
// });

// dengan mengambil document body berdasarkan class List contains (ini cukup 1 saja seleksi class nya)
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        e.target.parentElement.remove();
    }
});