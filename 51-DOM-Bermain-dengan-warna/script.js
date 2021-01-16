// latihan 1 merubah warna background body dengan klik tombol button
//tangkap h1
// const h1 = document.getElementsByTagName('h1')[0];
// tangakp elemen button nya
const tombolWarna = document.getElementById('tombolWarna');
// tangkap body
// const body = document.getElementsByTagName('body')[0]; untuk body kita tidak perlu tangkep karna sudah ada default nya
// buat method/function/event nya
tombolWarna.addEventListener('click', function () {
    // document.body.style.backgroundColor = ('royalblue'); // untuk body kita bisa tangkap dengan ini (cara 1)
    // h1.style.color = 'white'; dengan tangkap elemen h1 nya dan masukan ke method click dan ubah warna (cara 2)
    // document.body.setAttribute('class', 'putih'); // dengan menambahkan class di body dan di tangkap (cara 3)

    // agar diklik berubah warna dan diklik lagi berubah warna ke semula maka gunakan toggle
    document.body.classList.toggle('putih');
});

// latihan 2 mengubah warna background random
// buat tombol nya di javascript
const tombolRandom = document.createElement('button');
// buat isi elemen nya
const textTombolRandom = document.createTextNode('Ubah warna random');
// gabungkan elemen dan isi nya
tombolRandom.appendChild(textTombolRandom);
// buat attribute untuk button
tombolRandom.setAttribute('type', 'button');
// simpan tombol ubah warna random ini setelah tombol ubah warna
tombolWarna.after(tombolRandom);
// buat method event nya
tombolRandom.addEventListener('click', function () {
    // buat fungsi random nya dengan method math
    const r = Math.floor(Math.random() * 255 + 1); // agar floor ini menghasilkan bilangan bulat
    const g = Math.floor(Math.random() * 255 + 1); // agar floor ini menghasilkan bilangan bulat
    const b = Math.floor(Math.random() * 255 + 1); // agar floor ini menghasilkan bilangan bulat
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// lathan 3 mengubah warna background dengan menggunakan slider
// tangkap elemen input sMerah , sHijau , sBiru
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');

// buat method event nya
sMerah.addEventListener('input', function () {
    // buat variabel untuk nampung value sMerah 
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    // tangkap elemen body nya untuk merubah background
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});
sHijau.addEventListener('input', function () {
    // buat variabel untuk nampung value sMerah 
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    // tangkap elemen body nya untuk merubah background
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});
sBiru.addEventListener('input', function () {
    // buat variabel untuk nampung value sMerah 
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    // tangkap elemen body nya untuk merubah background
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

// latihan 4 membuat event cursor mouse digerakan akan merubah background
// tangkap body (jadi ketika mouse digerakan maka akan melakukan function/aksi)
document.body.addEventListener('mousemove', function (event) {
    //1. cari tau dulu posisi mouse (dengan menggunakan method clientX/ClientY untuk mencari tahu posisi sumbu X/Y pada mouse)
    //2. dengan menggunakan clientX/ClientY maka harus ada nilai yang di balikan ke function
    // console.log(event.clientX);

    //3. cari tahu ukuran browser (ukuran browser ada di dalam object window -> semua halaman termasuk topbar/close/address bar dll.)
    //4. dengan menggunakan window.innerWidth (ukuran halaman yang background putih/document)
    // console.log(window.innerWidth);

    //5. mengatur agar warna nya dari 0-255 setiap mouse digerakan baik secara sumbu X / Y
    //6. caranya dengan membagi posisi mouse dengan ukuran width object window(document yang putih) 
    const xPos = Math.round((event.clientX / window.innerWidth) * 255); // agar hasilnya bilangan bulat (math.round)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255); // agar hasilnya bilangan bulat (math.round)

    //7. masukan angka dari sumbu nya ke backgroundcolor
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)';

    //8. ketika content nya kosong maka dari ukuran height nya maka otomatis event nya tidak akan jalan
    //9. maka kita gunakan di css ukuran html dan body nya 100% 

});