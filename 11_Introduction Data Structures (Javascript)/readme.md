                            (11) Introduction Data Structures (javascript)

1. Mengapa Belajar Data Structure ?
   - untuk mengefisiensi kode dan mengerti kualitas dari kode yang dibuat
   - Efisien Kode

---

2. Data Structure

   - Data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori computer (string, number, Boolean, dll)
   - Data structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen didalam memori computer
   - Data dapat dikelola dengan berbagai cara

   Basic Data Structures

   - Array
   - Set
   - Delete
   - Read
   - Search
   - Insert

   > Array

   Yaitu data structure paling dasar dan serbaguna.

   > Reading

   Merupakan nilai yang terkandung pada indeks didalam array, operasi yang efisien, dan jenis operasi tercepat karena hanya membutuhkan 1 steps.

   > Searching

   - Mencari apakah nila tertentu ada dalam array atau tidak
   - Kembalikan dari Reading
   - Ketika melakukan operasi searching pada aaray computer tidak memiliki cara untuk melompat langsung ke nilai tertentu

   > Insertion

   - Efisiesi tergantung dimana kita memasukan valuenya
   - Memasukan value pada akhir dari array hanya membutuhkan 1 steps

   > Deletion

   - Operasi menghilangkan value pada indeks tertentu
   - Membutuhkan jumlah N steps untuk array yang mengandung N data

   > Set

   - Data structure sama seperti array, tetapi perbedaannya hanya pada set yang tidak mengijinkan duplicat value dimasukan ke dalamnya
   - Dari keempat operasi reading, searching, insertion dan deletion terdapat perbedaan efisiensi pada operasi insertion. Sedangkan untuk operasi lainya sama seperti array.
     Operasi pada set
   - Reading : dapat menggunakan forEach
   - Searching : pada set dapat menggunakan has method

---

3. Deskripsi

   - Menganalisa jumlah steps adalah sangat penting untuk mengetahui performa dari data structure di suat aplikasi
   - Reading, searching, dan deletion pada array dan set memiliki efisiensi yang sama yaitu secara berurutan 1 steps, N steps dan N steps.
   - Set penting jika kita menginginkan data structure yang terbebas dari duplikasi walaupun lebih lambat dari array pada operasi insertonnya.
   - Namun tidak membutuhkan pemeriksaan duplikasi, menggunakan array lebih disarankan.
