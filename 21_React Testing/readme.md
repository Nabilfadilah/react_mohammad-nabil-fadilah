                                        (21) React Testing

1.  Apa itu Testing

    Adalah proses memverifikasi bahwa test kita benar dan code kita tetap benar selama masa aplikasi. Test assertion adalah ekspresi Boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

    Manfaat Testing :

    - Merasa percaya diri jika mengubah suatu bagian pada aplikasi. Saat mengubah bagian tertentu dan ada bagian lain menjadi broken kita akan segera mengetahuinya.
    - Mengurangi bug pada aplikasi, walaupun testing tidak menjamin aplikasi bebas dari bug, tapi bisa mencegah hal yang berpotensi menjadi bug.

    Kategori Testing :

    - Rendering component tress
      Tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
    - Menjalankan aplikasi lengkap  
      Dalam environment browser asli, tes “end-to-end”.

    Pemilihan perkakas untuk testing dikembalikan kepada kebutuhan masing-masing.

    Rekomendasi Tools :

    - Jest
    - React Testing Library

---

2.  Create basic testing with RTL

    - Render dan Debug

      React Testing Library digunakan untuk berinteraksi dengan komponen, itulah kenapa struktur HTML sebgai output dari fungsi render.

    - Memilih element

      Digunakan untuk assertions atau untuk interaksi pengguna, dapat memilih elemen dengan fungsi object screen RTL. Contohnya getByText.

    - Kategori Testing

      • LabelText
      • PlaceholderText
      • AltText
      • DisplayValue

---

3.  Testing custom Hooks
    Library yang digunakan
    Akan memberikan alat untuk mengetes hooks tanpa merender satu komponen.

    Implementasi

    - Custom Hooks
    - Testing Value
    - Testing Callback
    - Testing Re-render
