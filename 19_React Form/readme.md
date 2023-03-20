                                                    (19) React Form

1. Apa itu React Form

   Form dapat digunakan untuk menghandle inputan dari user, dari pengembangan website.

   Macam Form

   - Element <input>
   - Element <textarea>
   - Element <select>
   - Radio Button
   - Checkbox
   - Dll.

---

2. Controlled Component

   Dapat menggabungkan cara menyimpan dan memperbaharui state di HTML dan React dengan menggunakan state pada React. Component React me-render dari form untuk mengontrol masukan pengguna selanjutnya.

   > Uncontrolled Component

   Adalah alternatif dari controlled component, data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled state bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

   - Atribut default Value

     Akan menimpa nilai pada DOM, dengan uncontrolled component.
     Tag File Input Memungkinkan pengguna untuk memilih satu / lebih dari media penyimpanan untuk diunggah ke server / dimanipulasi dengan js lewat file API.

   > Uncontrolled vs Controlled

   - Uncontrolled

     Adalah input yang tidak terkontrol seperti input formular HTML tradisional.
     Kita harus ‘manarik’ nilai daro field saaat kita membutuhkannya Ketika form di submit.

   - Controlled

     Menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai. Ini adalah cara yang lebih “React way”.

   > Apa yang membuat elemen “Controlled”

   Selain input, ada elemen bentuk lain, seperti checkboxes, radio, select dan textarea. Elemen formulir menjadi “controlled” jika kita menetapkan nilainya melalui prop.

---

3. Basic validasi

   - Buat apa ?

     • Mencari input data yang benar dan sesuai format.
     • Melindungi akun pengguna
     • Melindungi sistem/aplikasi

   - Tipe validasi

     • Client-side validation
     Validasi yang dilakukan pada sisi browser. Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.

     Dapat dibagi menjadi 2 :

     - Built-in form validation
     - Menggunakan javascript
     - Server-side validation

       Validasi yang dilakukan pada sisi server. Bertugas untuk memvalidasi data Kembali, sebelum disimpan di database. Jika ditemukan kesalahan maka response akan dikirim Kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

   - Built-in form validation

     • Required,
     Digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.

     • Minlength dan maxlength,
     Digunakan untuk menentukan jumlah karakter minimal dan maksimal yang dimasukan.

     • min dan max,
     digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukan.

     • type,
     digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.

     • Pattern,
     Digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukan.

   - Menggunakan javascript,
     Kapan melakukannya ?

     • Ketika ada perubahan di form. Akan mentrigger event onChange.
     • Ketika menekan tombol submit. Ketikan menekan tombol submit akan mentrigger event onSubmit.
