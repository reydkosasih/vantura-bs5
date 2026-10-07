# Vantura - Modern Bootstrap 5 Admin Template

![Bootstrap 5](https://img.shields.io/badge/Bootstrap-v5.3.8-7952b3?style=flat-square&logo=bootstrap&logoColor=white)
![Developer](https://img.shields.io/badge/Developer-Rey%20Dwi%20Kosasih-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**Vantura** adalah template dashboard admin modern dan responsif yang dibangun menggunakan **Bootstrap 5 (v5.3.8)**. Template ini dirancang dengan antarmuka yang bersih, intuitif, serta mendukung fitur *Dark Mode* bawaan untuk pengalaman pengguna yang maksimal.

---

## 🌟 Fitur Utama

- **Bootstrap 5 (v5.3.8)**: Menggunakan versi Bootstrap terbaru dengan utility class modern.
- **Tema Terang & Gelap (Dark/Light Mode)**: Dilengkapi script pendeteksi tema instan tanpa *flash of unstyled content* (FOUT) dan tersimpan di `localStorage`.
- **Desain Responsif**: Tampilan optimal di berbagai perangkat desktop, tablet, maupun ponsel cerdas.
- **Tipografi Elegan**: Menggunakan font Google *Plus Jakarta Sans*.
- **Icon Set Terintegrasi**: Menggunakan *Bootstrap Icons* (v1.11.3).
- **Komponen Lengkap**: Tombol, alert, kartu, form, tabel, hingga grafik interaktif.
- **Struktur Kode Rapi & Modular**: Mudah dikustomisasi dan diintegrasikan ke berbagai backend framework (Laravel, CodeIgniter, Node.js, Django, dsb.).

---

## 📑 Daftar Halaman & Komponen

| Kategori | Halaman / Berkas | Deskripsi |
| :--- | :--- | :--- |
| **Main** | [`index.html`](file:///c:/laragon/www/vantura-bs5/index.html) | Dashboard utama dengan metrik ringkas & ringkasan aktivitas |
| **UI Components** | [`buttons.html`](file:///c:/laragon/www/vantura-bs5/buttons.html) | Variasi tombol, status state, dan button group |
| | [`cards.html`](file:///c:/laragon/www/vantura-bs5/cards.html) | Desain kartu konten modular |
| | [`alerts.html`](file:///c:/laragon/www/vantura-bs5/alerts.html) | Komponen notifikasi & feedback alert |
| **Data & Forms** | [`forms.html`](file:///c:/laragon/www/vantura-bs5/forms.html) | Input form, validasi, dan kontrol form kustom |
| | [`tables.html`](file:///c:/laragon/www/vantura-bs5/tables.html) | Tabel data terstruktur |
| | [`charts.html`](file:///c:/laragon/www/vantura-bs5/charts.html) | Visualisasi data dan grafik statistik |
| **Autentikasi** | [`auth-login.html`](file:///c:/laragon/www/vantura-bs5/auth-login.html) | Halaman masuk / login |
| | [`auth-register.html`](file:///c:/laragon/www/vantura-bs5/auth-register.html) | Halaman pendaftaran akun baru |
| | [`auth-forgot.html`](file:///c:/laragon/www/vantura-bs5/auth-forgot.html) | Halaman reset kata sandi |
| **Pengguna** | [`profile.html`](file:///c:/laragon/www/vantura-bs5/profile.html) | Tampilan profil pengguna & pengaturan akun |

---

## 📁 Struktur Direktori

```text
vantura-bs5/
├── css/
│   ├── admin.css          # CSS kustomisasi utama admin panel
│   └── bootstrap.min.css  # Berkas Bootstrap 5 CSS
├── js/
│   ├── admin.js           # Logika navigasi, toggle tema, dsb.
│   └── bootstrap.bundle.min.js
├── alerts.html
├── auth-forgot.html
├── auth-login.html
├── auth-register.html
├── buttons.html
├── cards.html
├── charts.html
├── forms.html
├── index.html             # Entry point dashboard
├── profile.html
├── tables.html
└── README.md
```

---

## 🚀 Cara Menjalankan

Karena template ini murni berbasis HTML, CSS, dan JavaScript statis, Anda dapat menjalankannya dengan mudah:

1. **Menggunakan Web Server Lokal (Direkomendasikan)**:
   - Jika menggunakan **Laragon**, letakkan di folder `www` (contoh: `http://vantura-bs5.test` atau `http://localhost/vantura-bs5`).
   - Atau menggunakan ekstensi VS Code **Live Server**: klik kanan pada `index.html` lalu pilih *Open with Live Server*.
   - Atau menggunakan Python built-in server:
     ```bash
     python -m http.server 8000
     ```
2. **Buka Langsung di Browser**:
   - Klik ganda pada berkas [`index.html`](file:///c:/laragon/www/vantura-bs5/index.html) untuk membuka langsung di web browser favorit Anda.

---

## 👤 Pengembang

- **Developer**: Rey Dwi Kosasih
- **GitHub**: [@reydkosasih](https://github.com/reydkosasih)
- **LinkedIn**: [Rey Dwi Kosasih](https://linkedin.com/in/rey-dwi-kosasih)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**. Silakan gunakan dan kembangkan secara bebas sesuai kebutuhan Anda.

