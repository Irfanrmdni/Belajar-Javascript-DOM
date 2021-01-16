// DOM Manipulation -> kita dapat mengubah/mengganti/membuat/menghapus elemen elemen yang ada pada DOM

// cara nya :
// bikin dulu elemen tag HTML nya kemudian bikin lagi isi/tulisan nya jadi dibuat terpisah (setelah itu masukan isi/tulisan nya)

// contoh 1 : menambahkan elmen baru di akhir parent
// membuat/menambahkan elemen baru
// buat dulu elemen tag HTML
const pBaru = document.createElement('p');
// buat isi/text untuk elemen tag HTML
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan isi/elemen ke dalam pelemen tag HTML (pBaru)
pBaru.appendChild(textPBaru);
// terakhir kita akan simpan elemen tag HTML pBaru yang sudah ada isinya tadi ke section id a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// contoh 2 : menambahkan elemen baru di li yang kedua
// buat dulu elemen tag HTML
const liBaru = document.createElement('li');
// buat isi/text untuk elemen tag HTML
const isiLiBaru = document.createTextNode('item baru');
// simpan isi/elemen ke dalam pelemen tag HTML (liBaru)
liBaru.appendChild(isiLiBaru);
// terakhir kita akan simpan elemen tag HTML liBaru yang sudah ada isinya tadi ke section id b ul li(ke-2)
// tangkap dulu elemen ul nya
const ul = document.querySelector('section#b ul');
// cari elemen li yang akan di masukan (li ke-2)
// const li2 = document.querySelector('section#b ul li:nth-child(2)'); // -> cara 01
const li2 = ul.querySelector('ul li:nth-child(2)');                   // -> cara 02
// insert/masukan elemen liBaru ke li2 yang sudah di cari tadi
ul.insertBefore(liBaru, li2);

// contoh 3 : menghapus elemen child
// cari elemen parent nya dulu (const sectionA) -> karena sudah ada
// tankap elemen a (karena ini akan dihapus)
const link = document.querySelector('section#a a');
// menghapus elemen link (tag a)
sectionA.removeChild(link);

// contoh 4 : replace elemen paragraf 4 yang ada di section id b
// tangkap dulu parent nya section b
const sectionB = document.querySelector('section#b');
// cari/tankap elemen p (paragraf 4) 
const p4 = sectionB.querySelector('p');
// buat elemen baru dulu
const h2Baru = document.createElement('h2');
// buat isi elemen baru nya
const textH2Baru = document.createTextNode('Judul baru');
// masukan isi elemen baru nya ke elemen h2 (h2Baru)
h2Baru.appendChild(textH2Baru);
// replace elemen p4 ke h2Baru dengan cara panggil elemen parent nya dulu
sectionB.replaceChild(h2Baru, p4);

// menampilkan semua elemen yang baru ditambahkan
pBaru.style.backgroundColor = ('lightgreen');
liBaru.style.backgroundColor = ('lightblue');
h2Baru.style.backgroundColor = ('salmon');

