# Aplikasi Peramalan Cuaca Jakarta (Ionic Vue)

Aplikasi mobile berbasis Ionic Vue yang saya buat ini didesain menampilkan data cuaca kota Jakarta secara *real-time* menggunakan API Open-Meteo. Proyek ini dibuat untuk memenuhi persyaratan Tugas 2 Pemrograman Berbasis Piranti Bergerak (PBPB).

## Fitur Aplikasi
- Real-time Data Fetching: Mengambil data prakiraan cuaca langsung dari Open-Meteo API berdasarkan koordinat Jakarta (Latitude: -6.2, Longitude: 106.8).
- **Prakiraan Per Jam**: Menampilkan komponen data waktu pengukuran (`time`) dan suhu (`temperature_2m`) dalam format per jam.
- Desain Responsif & Mudah Dibaca: Data disajikan dalam bentuk tabel yang bersih, rapi, dan adaptif untuk tampilan *mobile screen*.
- Format Waktu Indonesia: Konversi otomatis format waktu ISO API menjadi format penulisan waktu Indonesia standar yang mudah dipahami.
- State Management Handling: Dilengkapi dengan indikator *loading* saat mengambil data dan penanganan *error* jika koneksi internet terputus.

## Teknologi yang Digunakan
- [Ionic Framework (Vue)](https://ionicframework.com/docs/vue/overview) - Framework UI Aplikasi Mobile
- [Vue.js 3 (Composition API)](https://vuejs.org/) - JavaScript Framework
- [Axios](https://axios-http.com/) - HTTP Client untuk melakukan API Request
- [Open-Meteo API](https://open-meteo.com/) - Penyedia Data Cuaca Gratis

## Prasyarat
Pastikan telah menginstal komponen berikut:
- [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan)
- Ionic CLI (Instal via terminal: `npm install -g @ionic/cli`)

## Instalasi

Buka dahulu terminal lalu masukkan perintah dibawah ini:

## Clone Repositori
```bash
git clone [https://github.com/YosephPaparang/pbpb-tugas-2-peramalan-cuaca.git](https://github.com/YosephPaparang/pbpb-tugas-2-peramalan-cuaca.git)
cd peramalan-cuaca
```

# Instalasi Dependensi
Instal seluruh library yang dibutuhkan oleh aplikasi (termasuk Axios):
```bash
npm install
```

# Jalankan Server Lokal (Development)
Jalankan aplikasi di browser menggunakan fitur live-reload dari Ionic:
```bash
ionic serve
```
Aplikasi otomatis terbuka di alamat browser: http://localhost:8100

# Struktur Direktori Utama
peramalan-cuaca/
├── public/
├── src/
│   ├── components/     # Komponen reusable
│   ├── theme/          # Pengaturan warna & styling global Ionic
│   ├── views/
│   │   └── HomePage.vue # Halaman utama (Logika fetch API & Tabel Cuaca)
│   ├── App.vue         # Root komponen
│   └── main.js         # Entry point aplikasi
├── package.json        # Manifest file & daftar dependensi (Axios, Ionic Vue, dll)
└── README.md           # Dokumentasi proyek

## Endpoint API yang Digunakan

Aplikasi ini mengonsumsi data dari Open-Meteo dengan spesifikasi berikut:

    URL: https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m

    Atribut yang diambil:

        hourly.time : Waktu pengukuran cuaca.

        hourly.temperature_2m : Derajat suhu dalam satuan Celcius (°C).

## Lisensi
Untuk laporan tugas 2 Pemograman Berbasis Perangkat Bergerak (PBPB) Yoseph Fredrik Paparang (053444878)
