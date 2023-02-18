                                (5) Version Control and Branch Management (Git)

Versioning -> mengatur versi dari source code program.

- Version Control System (VCS)
- Source Code Manager (SCM)
- Revision Control System (RCS)
  Version control system
- Single user
- Centralized
- Distributed  
  Vcs yang digunakan para developer untuk mengambangkan software secara Bersama-sama.
  Real World Collacoration
  Remote computer / server yang menjadi pusat singkron dengan 3 developer :
- My computer
- John computer
- Doe computer

---

Git repository dibedaka menjadi 2 folder, yang pertama projek yang sedang dikerjakan, dan folder. .git yang berisi konfigurasi, commitnya apa aja. Git akan mengetrek semua perubahan dari siapa yang merubah dan kapan berubah. pada Git bisa melakukan unduh. Satu commit bisa berisi banyak file dan setiap file bisa di cek setiap perubahannya. Commit akan dijadikan Riwayat.
The Staging Area
Pada Git terbagi menjadi 3 :

- Working directory, mengupdate dengan commit, dengan menggunakan git add
- Staging area, untuk menandai file file. Dengan menggunakan git commit untuk memberikan pesan dari apa aja yang sudah dirubah.
- Repository, untuk menyimpan dari semua commit.

---

git status, add, commit
git status, menampilkan perubahan.
git add, untuk mengubah working directory ke staging area.
git commit -m, untuk menambahkan pesan.
Saat melakukan commit, jangan menggunakan pesan yang tidak jelas.
Ketika ingin mengecek perubahan apa aja, maka menggunakan git diff.
git stash, untuk menyimpan sementara yang dimanakan stash area.
gitignore, untuk mengacuhkan atau tidak mengirimkan bagian-bagian ke github.
Untuk penulisannya bisa satu folder, satu file.

---

Pettern
.log, log
Git Log, Checkout
git log, untuk melihat perubahan apa aja yang terjadi.
git reset, untuk melakukan pengembalian dari titik tertentu, ada 2 jenis set yaitu --soft dan --hard.
git push, untuk mengirimkan commit kedalam server.
git fetch, untuk mengambil data yang ada didalam server yang terbaru dari repo.
git pull, untuk menarik data yang ada di repository.

---

Branches
git branch
git branch -D, untuk menhapus.
Git merge

---

Workflow Collaboration
Yaitu bagaimana alur dalam menggunakan git di Github atau GitLab.
