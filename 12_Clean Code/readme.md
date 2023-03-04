                                                        (12) Clean Code

1. Pengertian Clean Code

   Clean Code adalah istilah untuk code yang mudah dibaca, difahami dan diubah oleh programmer. karena clean code memenuhi, work collaboration, feature development, faster development

---

2. Karakteristik clean code :

   - Mudah dipahami, dalam penamaan code misalnya mana variable harus mudah dipahami.
   - Mudah dieja dan dicari, dalam penamaan code misalnya mana variable dalam penamaan harus komplit jangan disingkat yang tidak semua orang mengerti.
   - Singkat namun mendeskripsikan konteks, dalam penamaan code misalnya mana variable singkat tapi dengan memiliki arti yang mudah diterjemahkan.
   - Konsiten, dalam penamaan code misalnya Ketika penamaan variable pada baris tertentu menggunakan huruf kapital tetapi pada baris selanjutnya tidak menggunakan huruf kapital.
   - Hindari penambahan konteks yang tidak perlu, dalam penamaan code misalnya mana variable atau object menggunakan nama yang sudah merujuk ke value tersebut.
   - Komentar, dalam membuat komentar dari code tertentu, harusnya cukup simple dan merujuk ke code tersebut jangan berlebihan dan ada komentar disetiap code.
   - Good Function, dalam penggunaan function harus detail seperti menambahkan penggunaan object.
   - Gunakan konvensi, bisa menggunakan cohtoh dari Airbnb atau google untuk melihat style yang baik.
   - Formatting,
      lembar baris code 80-120 karakter
      satu class 300-500 baris
      baris code yang berhubungan saling berdekatan
      dekatkan fungsi dengan pemanggilan
      deklarasi variable berdekatan dengan pengguna
      perhatikan identasi
      menggunakan prettier atau formatter

---

3. Clean Code principle

   - KISS (Keep it So Simple)
     Hindari membuat fungso yang dibuat untuk melakukan A, sekaligus meodeifikasi B, mengecek fungsi C.
      Fungsi / class harus kecil
      Fungsi dibuat untuk melakukan satu tugas
      Jangan gunakan terlalu banyak argument pada fungsi
      Harus diperhatikan untuk mencapai kondisi yang seimbang
      Kecil dan jumlahnya minimal
   - DRY (Don’t Repeat Yourself)
     Duplikasi code terjadi karena saring copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.
   - Refactoring
     Adalah proses restrukturisasi kode yang dibuat dengan cara merubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dapat dicapai dengan cara refactor.
     Teknik Refactoring :
      Membuat sebuah abstraksi
      Memecah kode dengan fungsi / class
      Perbaiki penamaan dan lokasi kode
      Deteksi kode yang memiliki duplikasi
