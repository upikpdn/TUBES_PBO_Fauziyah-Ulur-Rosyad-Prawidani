/**
 * Kelas        : S1 SE-03-A
 * Kelompok     : 7
 * Nama Anggota :
 * 1. Fauziyah Ulur Rosyad P. (19104033)
 * 2. Nabilah Sharfina        (19104025)
 * 3. Iqbal Pratama Putra     (19104070)
 * 
 * Membuat Program Virtual Fitting Room
 * Menggunakan Konsep OOP 
 * Menggunakan bahasa pemrograman Javascript
 */

/**
 * ============================================================
 * Parent Class
 * ============================================================
 */
class Pelanggan {
    constructor(nomor, nama, tl, jk) {
      this.nomor = nomor
      this.nama = nama
      this.tl = tl
      this.jk = jk
    }
  
    //Menghitung Umur
    getUmur() {
      return 2021 - (this.tl.slice(this.tl.length - 4))
    }
  }
  
  /**
   * ============================================================
   * Child Class 
   * ============================================================
   */
  class Pakaian extends Pelanggan{
    constructor(nomor, nama, tl, jk, tipe, merek, warna) {
      super(nomor, nama, tl, jk)
        this.tipe = tipe
        this.merek = merek
        this.warna = warna
    }
    
    //Menyimpan data ukuran
    getUkuran() {
      if(!Pakaian.hasOwnProperty("ukuran"))
        return null
      else
        return ukuran
    }
  }
  
  /**
   * ============================================================
   * /Function yang berfungsi untuk menentukan ukuran pakaian 
   * ============================================================
   */ 
  function Harga(){
    let harga, ukuran
  
    this.setHarga = function(newHarga) {
      harga = newHarga
  
      if(125000 <= harga && harga < 180000)
        ukuran = "S"
      else if(180000 <= harga && harga < 250000)
        ukuran = "M"
      else if(250000 <= harga && harga < 320000)
        ukuran = "L"
      else if(320000 <= harga && harga < 435000)
        ukuran = "XL"
      else if(435000 <= harga && harga < 500000)
        ukuran = "XXL"
      else
        console.log("Inputan tidak terdaftar!")
    }
  
    //Menyimpan data harga
    this.getHarga = function() {
        return harga
    }
  
    //Menyimpan data ukuran
    this.getUkuran = function() {
        return ukuran
    }
  }
  
  /**
   * ============================================================
   * Function yang berfungsi untuk menggabungkan 2 objek
   * ============================================================
   */
  function Mix(pakaian, harga) {
    for(let property in harga) {
      if(harga.hasOwnProperty(property)) {
        pakaian[property] = harga[property]
      }
    }
  
    return pakaian
  }
  
  const prompt = require(`prompt-sync`)()
  
  //Membuat objek baru
  const pakaian = new Pakaian()
  const harga = new Harga()
  
  /**
   * ============================================================
   * MENU UTAMA
   * ============================================================
   */
  exit = false
  do{
    console.log("<=====> WELCOME TO FITECH ROOM <=====>")
    console.log("1.\tInput Data Pelanggan")
    console.log("2.\tInput Harga")
    console.log("3.\tOutput Ukuran")
    console.log("4.\tMetode Pembayaran")
    console.log("5.\tKeluar")
    console.log()
  
    let angka = prompt("Masukkan Pilihan\t: ")
  
    switch(angka){
      case "1":
        console.log("\n======> *INPUT DATA PELANGGAN*")
        const objPelanggan = new Pakaian(
          prompt("Input No. Urut\t\t: "),
          prompt("Input Nama Lengkap\t: "),
          prompt("Input TL\t\t\t: "),
          prompt("Input Jenis Kelamin\t: "),
          prompt("Input Tipe\t\t\t: "),
          prompt("Input Merek\t\t\t: "),
          prompt("Input Warna\t\t\t: ")
        )
  
        console.log("\n===== DATA TERSIMPAN =====")
        console.log(`No. Urut\t\t: ${objPelanggan.nomor}`)
        console.log(`Nama Lengkap\t: ${objPelanggan.nama}`)
        console.log(`Tanggal Lahir\t: ${objPelanggan.tl}`)
        console.log(`Umur\t\t\t: ${objPelanggan.getUmur()}`)
        console.log(`Jenis Kelamin\t: ${objPelanggan.jk}`)
        console.log(`Tipe\t\t\t: ${objPelanggan.tipe}`)
        console.log(`Merek\t\t\t: ${objPelanggan.merek}`)
        console.log(`Warna\t\t\t: ${objPelanggan.warna}`)
        console.log()
        break
  
      case "2":
        console.log("\n======> *INPUT HARGA PAKAIAN*")
        prompt("Masukan No. Urut\t: ")
        const price = prompt("Masukkan Harga\t\t: ")
        console.log("")
  
        harga.setHarga(price)
        Mix(pakaian, harga)
        break
  
      case "3": 
        console.log("\n======> *OUTPUT UKURAN PAKAIAN*")
        console.log(`Ukuran\t\t\t\t: ${pakaian.getUkuran()}`)
        console.log()
        break
  
      case "4": 
        console.log("\n======> *METODE PEMBAYARAN*")
        console.log("1.\tCash")
        console.log("2.\tE-Banking")
        console.log("3.\tE-Wallet")
        console.log()
  
        let angka = Number(prompt("Pilih cara\t: "))
  
        if(angka === 1)
          angka = "Cash"
        else if(angka === 2)
          angka = "E-Banking"
        else if(angka === 3)
          angka = "E-Wallet"
        else
          console.log("Inputan tidak terdaftar!")
        
        console.log()
        break
  
      case "5": 
        exit = true
        console.log("\tTHANK YOU FOR TRYING! \n\tHOPE YOU'LL BE COME AGAIN SOON!")
        break
  
      default:
        console.log("WARNING: Input not valid!\n")
        break
    }
  } while(!exit)