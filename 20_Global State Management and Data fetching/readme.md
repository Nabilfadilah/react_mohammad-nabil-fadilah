                                 (20) Global State Management and Data Fetching

1. pengertian Redux

   Redux adalah library untuk manajemen state global dengan menggunakan struktur one-way data flow menggunakan beberapa tipe code.

   > Kapan Redux digunakan

   - Banyak state yang perlu ditaruh dibanyak tempat
   - State pada app sering berubah
   - Logic untuk mengubah state kompleks
   - Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
   - Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

   > Redux Libaries dan Tools

   - React-Redux
   - Redux Toolkit
   - Redux DevTools Extension

   > Komponen penting Redux

   - Actions,
     Digunakan untuk memberikan inofrmasi dari aplikasi ke store
   - Reducer,
     Pure javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
   - Store,
     Objek sentral yang menyimpan state pada aplikasi

   > Memakai dan mengubah state

   - Hooks
   - Connect

---

2. Redux Thunk

   Thunk Middleware redux yang membuat action creator yang mengembalikan function bukan action.
   Redux Thunk diperlukan

   - Untuk menghandle side effect logic yang kompleks
   - Untuk logic async seperti request data

---

3. Data Fetching

   Aplikasi yang membutuhkan server dan server memberikan respon ke aplikasi

   Cara untuk fetching data di react

   - Fetch API

     Tidak perlu import, karena sudah ada didalam objek global.

     Biasanya menggunakan method, url, body atau headers.

     Response :
     Type, url, useFinalURL, status, ok, statusText, headers.

     Methods :
     Json(), text(), formData().

   - Axios

   - React
