                                                        (18) React Routing

1. Apa itu Router

   Merupakan modul yang berfungsi untuk melakukan proses navigasi pada SPA(Single page application)

   Multi Page Application (MPA)
   Adalah jenis aplikasi website perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

   Single Page Application (SPA)
   Adalah aplikasi website dimana hanya 1 halaman yang menangani semua aktivitas yang terjadi.

---

2.  Component yang penting dalam Library React Router DOM

        • browserRouter

        digunakan sebagai router yang menggunakan API, sehingga dapat menggunakan location untuk singkronkan UI dengan url. Dalam objek location merepresentasikan dimana lokasi aplikasi sekarang.

        • Switch

        Digunakan untuk membungkus kumpulan beberapa componenr Route

        Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, jika tidak cocok maka route akan di-render ke route terakhir dengan component Notfound

        • Route

        Digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi.
        Attribute path merupakan url pada browser pada proses routing

        • Link

        Digunakan untuk berpindah antar halaman, propery to tersebut merujuk pada path di route yang akan dituju.

---

3.  Menggunakan url param React

    - Parameter URL

      Adalah parameter yang nilainya ditetapkan secara dinamis di URL halaman.
      /movie/titanic

    - Link Redirect

      Dapat digunakan pada kondisi apapun Lebih sering digunakan pada halaman 404
      Memberikan history baru pada browser Menimpa history pada browser
      Berinteraksi dengan click seperti a href Beraksi dengan suatu kondisi

      Hook Routing React

      • useHistory

      memberi akses ke instance Riwayat yang dapat digunakan untuk bernavigasi. Menambah history baru.
      Contoh :

      - length = (angka) jumlah entri dalam tumpukan riwayat
      - go = (fungsi) memindahkan petunjuk ditumpukan Riwayat sebanyak n entri
      - goBack = (fungsi) setara dengan go(-1)
      - goForward = (fungsi) setara dengan go(1)
      - Push = (fungsi) mendorong entri bar uke tumpukan Riwayat
      - replace = (fungsi) mengganti entri saat ini ditumpukan Riwayat history

        • useParams

        mengembalikan objek pasangan kunci/nilai parameter URL, digunakan untuk mengakses match.params dari <Route> saat ini. Menerima id dari url param.

        • useRouteMatch

        mencoba memcocokan URL saat ini dengan cara yang sama seperti <Route>.
        Sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.
