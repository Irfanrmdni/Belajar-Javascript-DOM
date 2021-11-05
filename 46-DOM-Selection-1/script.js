
// Document Selection

// 1. document.getElementById() -> javascript tolong carikan elemen yang id nya ... yang ada di dalam document
// -> mengembalikan elemen HTML
// menyeleksi/memanggil elemen h1 yang memiliki id="judul"
// membuat variabel untuk menampung elemen nya
// const judul = document.getElementById('judul');
// mengubah warna judul
// judul.style.color = '#1299ab';
// mengubah background judul
// judul.style.backgroundColor = '#ddd';
// mengubah text yang ada di dalam judul
// judul.innerHTML = 'Irpan ramdani';


// 2. document.getElementsByTagName() -> javascript tolong carikan elemen elemen yang tagName nya ... yang ada di dalam document
// -> mengembalikan HTML Collection (Bentuk nya array/object)
// menyeleksi/memanggil elemen p -> ini lebih dari satu (Banyak)
// membuat variabel untuk menampung elemen p nya
// const p = document.getElementsByTagName('p');
// mengubah background elemen p
// p.style.backgroundColor = 'lightblue'; // ini akan error karena ini berbentuk array (HTML Collection)

// caranya dengan menggunakan index .. mau index ke berapa yang ingin diubah?...ini harus satu satu
/* p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'lightblue';
p[3].style.backgroundColor = 'lightblue'; */

// atau cara dengan menggunakan looping
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// memanggil elemen h1 -> meskipun ada 1 ini akan tetap menjadi HTML Collection
// const h1 = document.getElementsByTagName('h1')[0]; // -> ini hanya mengambil h1 pada index ke 0
// h1.style.fontSize = '35px';


// 3. document.getElementsByClassName() -> javascript tolong carikan elemen yang class nya ... yang ada di dalam document
// -> mengembalikan HTML Collection (Bentuk nya array/object)

// mengubah id p1 
// membuat variabel untuk menampung class p1
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dengan javascript';

// ===========================================================================================================================================================

// DOM Selection

// 1. getElementById()
const judul = document.getElementById('judul');

judul.style.color = 'darkblue';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'irfan ramdani';

// ===========================================================================================================================================================

// 2. getElementsByTagName()
// menyeleksi seluruh element html p
// const paragraf = document.getElementsByTagName('p');

// memberi style hanya untuk elemen html p pada index ke 2. index mulai dari 0
// paragraf[2].style.backgroundColor = 'salmon';

// memberi style untuk seluruh elemen html p
// for (let i = 0; i < paragraf.length; i++) {
//     paragraf[i].style.backgroundColor = 'salmon';
// }

// menyeleksi elemen html p hanya pada index / bagian ke 2
const paragraf = document.getElementsByTagName('p')[2];

// memberi style pada elemen html p index ke 2
paragraf.style.backgroundColor = 'salmon';

// ===========================================================================================================================================================

// 3. getElementsByClassName
const paragraf3 = document.getElementsByClassName('p2')[0];
paragraf3.innerHTML = 'ini diubah menggunakan javascript';
paragraf3.style.backgroundColor = 'cyan';