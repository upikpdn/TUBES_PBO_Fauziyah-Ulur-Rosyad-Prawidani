# Tugas Besar Pemrograman Berorientasi Objek


Kelas : S1 SE-03-A

Kelompok : 7

Nama Anggota :
1. Fauziyah Ulur Rosyad P. (19104033)
2. Nabilah Sharfina (19104025)
3. Iqbal Pratama Putra (19104070)

Program Virtual Fitting Room

A. Latar Belakang
  Di era sekarang bisnis pakaian menjadi salah satu bentuk bisnis yang
menjanjikan. Berbagai macam model pakaian bermunculan dengan ragam kreatifitas
yang menarik. Namun, dengan adanya pandemi wabah Covid-19 ini, masyarakat lebih
berhati-hati dalam berbelanja dan terkadang enggan berbelanja karena pakaian bisa
menjadi ladang virus yang menyebar.
  Dengan perkembangan teknologi yang sekarang ini, adanya inovasi virtual fitting
room agar masyarakat dapat berbelanja dengan cara memilih pakaian dari mulai jenis
hingga harganya tanpa adanya kontak fisik dengan barang langsung (touchless). Hal
tersebut diharapkan dapat mengurangi adanya penyebaran virus Covid-19.

B. Tujuan :
Tujuan adanya virtual fitting room ini, yaitu :
1. Memudahkan masyarakat dalam berbelanja pakaian tanpa adanya kontak fisik
dengan benda lain.
2. Mencegah dan mengurangi rantai penyebaran virus Covid-19.
3. Mampu mengimplementasikan dan memahami konsep OOP dalam bahasa
pemrograman Javascript.

C. Isi Program :
1. Input Data Pelanggan
Pada menu 1 ini, user dapat menginputkan data diri mereka, seperti
Nomor Urut, Nama Lengkap, Tanggal Lahir, Jenis Kelamin, Tipe Pakaian, Merek
Pakaian, dan Warna Pakaian yang akan dipesan oleh user. Pada menu 1 ini, kami
memilih menggunakan const untuk mendeklarasikan sebuah variable. Kami
menggunakan const objPelanggan kemudian memanggil property yang ada pada
parameter class Pelanggan dan Pakaian. Variable const akan mengizinkan untuk
melakukan perubahan data sesuai dengan method yang telah disediakan oleh
array maupun object. Namun adakalanya kami juga menggunakan let pada kasus kasus tertentu.
2. Input Harga
Pada menu 2 ini, user dapat menambah data yang berhubungan dengan
pesanan mereka yang sudah diinputkan sebelumnya yaitu dengan memanggil
Nomor Urut dan menginputkan Harga. Dalam menu ini, kami memasukkan
function Mix yang mana berfungsi untuk menggabungkan 2 objek baru dengan
class yang berbeda.
3. Output Ukuran
Pada menu 3 ini, user dapat melihat ukuran pakaian yang didapat setelah
menginputkan Harga di menu sebelumnya. Pada tahap ini kami menggunakan
objek pakaian dengan memanggil method getUkuran(),
4. Metode Pembayaran
Pada menu 4 ini, user dapat memilih metode pembayaran yang tersedia
yaitu cash, e-banking, dan e-wallet dengan cara menginputkan angka sesuai menu
yang ditampilkan. Apabila user memasukkan tidak sesuai angka yang tersedia,
maka inputan dinyatakan tidak terdaftar.
5. Keluar
Pada menu 5 ini, user dinyatakan telah selesai melakukan transaksi atau
memilih mengakhiri transaksi.

D. Running Program
1. Sistem menampilkan pilihan dari menu utama.
2. Kemudian user menginputkan Nomor Urut, Nama Lengkap, Tanggal Lahir, Jenis
Kelamin, Tipe Pakaian, Merek Pakaian, dan Warna Pakaian. Setelah itu, sistem
akan menyimpan data kemudian menampilkan hasil outputnya.
3. User menginputkan Nomor Urut dan Harga (sebagai penentu ukuran pakaian
nantinya).
4. User memilih menu pilihan metode pembayaran.
5. User selesai melakukan transaksi.

E. Class Diagram

![tubes (2)](https://user-images.githubusercontent.com/53574005/107951232-99d6cc00-6fca-11eb-97e7-d320e74c601b.png)
