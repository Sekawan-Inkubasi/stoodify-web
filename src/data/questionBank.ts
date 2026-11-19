import type { Question } from '../types/quiz';

export const QUESTION_BANK: Question[] = [
  {
    "id": 1,
    "question": "Kabel yang paling umum digunakan untuk menghubungkan komputer ke router atau switch adalah kabel...",
    "options": [
      "Kabel HDMI",
      "Kabel UTP / LAN",
      "Kabel AUX",
      "Kabel VGA"
    ],
    "correctIndex": 1,
    "explanation": "Kabel UTP (Unshielded Twisted Pair) dengan konektor RJ-45 adalah standar kabel LAN untuk menghubungkan perangkat jaringan.",
    "category": "Jaringan"
  },
  {
    "id": 2,
    "question": "Perangkat jaringan yang bertugas menghubungkan jaringan lokal ke internet dan membagikan rute data adalah...",
    "options": [
      "Router",
      "Monitor",
      "Printer",
      "Flashdisk"
    ],
    "correctIndex": 0,
    "explanation": "Router bertugas meneruskan paket data antar jaringan yang berbeda dan menghubungkan perangkat lokal ke internet.",
    "category": "Jaringan"
  },
  {
    "id": 3,
    "question": "Apa singkatan dari 'Wi-Fi' yang sering kita gunakan sehari-hari?",
    "options": [
      "Wide Fiber",
      "Web Information",
      "Window File",
      "Wireless Fidelity"
    ],
    "correctIndex": 3,
    "explanation": "Wi-Fi adalah kependekan dari Wireless Fidelity, teknologi jaringan nirkabel berbasis standar IEEE 802.11.",
    "category": "Jaringan"
  },
  {
    "id": 4,
    "question": "Berapa alamat IP 'Loopback' atau Localhost yang merujuk ke komputer kita sendiri?",
    "options": [
      "192.168.1.1",
      "8.8.8.8",
      "127.0.0.1",
      "0.0.0.0"
    ],
    "correctIndex": 2,
    "explanation": "127.0.0.1 adalah alamat IPv4 loopback standar yang digunakan perangkat untuk mengakses layanannya sendiri.",
    "category": "Jaringan"
  },
  {
    "id": 5,
    "question": "Perintah di terminal/CMD untuk menguji apakah komputer kita terhubung ke suatu server internet adalah...",
    "options": [
      "exit",
      "ping",
      "copy",
      "format"
    ],
    "correctIndex": 1,
    "explanation": "Perintah 'ping' mengirimkan paket data ICMP untuk mengecek apakah komputer tujuan aktif dan mengukur kecepatannya.",
    "category": "Jaringan"
  },
  {
    "id": 6,
    "question": "Layanan internet yang bertugas mengubah nama website (seperti google.com) menjadi alamat IP adalah...",
    "options": [
      "DNS (Domain Name System)",
      "DHCP",
      "FTP",
      "Bluetooth"
    ],
    "correctIndex": 0,
    "explanation": "DNS berfungsi seperti buku kontak telepon internet yang menerjemahkan nama domain ke alamat IP angka server.",
    "category": "Jaringan"
  },
  {
    "id": 7,
    "question": "Protokol web aman yang memiliki ikon gembok hijau/terkunci di address bar browser adalah...",
    "options": [
      "HTTP biasa",
      "FTP",
      "Telnet",
      "HTTPS"
    ],
    "correctIndex": 3,
    "explanation": "HTTPS mengamankan komunikasi data antara browser dan web server menggunakan enkripsi SSL/TLS.",
    "category": "Jaringan"
  },
  {
    "id": 8,
    "question": "Konektor berkepala plastik bening dengan 8 pin yang dipasang di ujung kabel LAN disebut...",
    "options": [
      "USB Type-C",
      "Jack 3.5mm",
      "RJ-45",
      "DisplayPort"
    ],
    "correctIndex": 2,
    "explanation": "Konektor RJ-45 (Registered Jack 45) adalah konektor standar untuk kabel jaringan ethernet UTP.",
    "category": "Jaringan"
  },
  {
    "id": 9,
    "question": "Alamat fisik unik yang tertanam pada kartu jaringan (NIC) setiap perangkat disebut...",
    "options": [
      "IP Address",
      "MAC Address",
      "Nomor IMEI",
      "Kode Pos"
    ],
    "correctIndex": 1,
    "explanation": "MAC (Media Access Control) Address adalah identitas fisik unik sepanjang 48-bit yang dimiliki oleh setiap kartu jaringan.",
    "category": "Jaringan"
  },
  {
    "id": 10,
    "question": "Apa fungsi dari fitur Hotspot / Tethering pada smartphone kamu?",
    "options": [
      "Membagikan koneksi internet ponsel ke perangkat lain",
      "Menghapus memori ponsel",
      "Mendinginkan suhu baterai",
      "Memperbesar suara speaker"
    ],
    "correctIndex": 0,
    "explanation": "Tethering/Hotspot mengubah ponsel menjadi access point nirkabel mini agar laptop atau HP lain bisa ikut internetan.",
    "category": "Jaringan"
  },
  {
    "id": 11,
    "question": "Perangkat jaringan yang berfungsi membagi koneksi kabel LAN ke banyak komputer dalam satu ruangan lab adalah...",
    "options": [
      "Proyektor",
      "Speaker",
      "Scanner",
      "Switch"
    ],
    "correctIndex": 3,
    "explanation": "Switch menghubungkan banyak komputer dalam satu jaringan lokal (LAN) dan meneruskan data antar port secara efisien.",
    "category": "Jaringan"
  },
  {
    "id": 12,
    "question": "Di Linux, perintah dasar apa yang digunakan untuk berpindah dari satu folder ke folder lain?",
    "options": [
      "ls",
      "pwd",
      "cd (change directory)",
      "mkdir"
    ],
    "correctIndex": 2,
    "explanation": "Perintah 'cd nama_folder' digunakan di terminal untuk masuk atau berpindah direktori.",
    "category": "Jaringan"
  },
  {
    "id": 13,
    "question": "Di Linux, perintah dasar apa yang digunakan untuk melihat daftar file dan folder yang ada di direktori aktif?",
    "options": [
      "cd",
      "ls",
      "rm",
      "cp"
    ],
    "correctIndex": 1,
    "explanation": "Perintah 'ls' (list) menampilkan semua berkas dan subfolder yang berada di dalam folder saat ini.",
    "category": "Jaringan"
  },
  {
    "id": 14,
    "question": "Apa fungsi dari 'Mode Pesawat' (Airplane Mode) pada smartphone?",
    "options": [
      "Mematikan semua sinyal nirkabel (seluler, Wi-Fi, Bluetooth)",
      "Membuat baterai terisi penuh seketika",
      "Menghapus aplikasi berat",
      "Merekam suara sekitar"
    ],
    "correctIndex": 0,
    "explanation": "Mode pesawat menonaktifkan seluruh pemancar radio nirkabel pada ponsel agar tidak mengganggu instrumen penerbangan.",
    "category": "Jaringan"
  },
  {
    "id": 15,
    "question": "Berapa jumlah oktet (kelompok angka) pada format alamat IPv4 standar seperti 192.168.1.1?",
    "options": [
      "2 oktet",
      "6 oktet",
      "8 oktet",
      "4 oktet"
    ],
    "correctIndex": 3,
    "explanation": "IPv4 terdiri dari 4 oktet angka desimal (0-255) yang masing-masing dipisahkan oleh tanda titik.",
    "category": "Jaringan"
  },
  {
    "id": 16,
    "question": "Topologi jaringan yang paling umum digunakan di lab komputer sekolah modern karena mudah dirawat adalah...",
    "options": [
      "Topologi Bus",
      "Topologi Ring (Cincin)",
      "Topologi Star (Bintang)",
      "Topologi Mesh"
    ],
    "correctIndex": 2,
    "explanation": "Topologi Star menghubungkan setiap PC ke satu switch pusat, sehingga jika 1 kabel putus, PC lain tidak terganggu.",
    "category": "Jaringan"
  },
  {
    "id": 17,
    "question": "Domain website Indonesia khusus untuk instansi sekolah (seperti SMK Telkom) biasanya berakhiran...",
    "options": [
      ".go.id",
      ".sch.id",
      ".mil.id",
      ".ac.id"
    ],
    "correctIndex": 1,
    "explanation": "Ekstensi '.sch.id' (school Indonesia) dikhususkan untuk situs web lembaga pendidikan sekolah dasar hingga menengah di Indonesia.",
    "category": "Jaringan"
  },
  {
    "id": 18,
    "question": "Sistem pertahanan keamanan yang menyaring lalu lintas data masuk dan keluar komputer dari ancaman disebut...",
    "options": [
      "Firewall",
      "Wallpaper",
      "Screensaver",
      "Watermark"
    ],
    "correctIndex": 0,
    "explanation": "Firewall bertindak sebagai dinding penyaring yang memblokir akses mencurigakan dari jaringan internet ke komputer.",
    "category": "Jaringan"
  },
  {
    "id": 19,
    "question": "Kecepatan akses internet biasanya dinyatakan dalam satuan...",
    "options": [
      "RPM",
      "Watt",
      "Kilogram",
      "Mbps (Megabit per second)"
    ],
    "correctIndex": 3,
    "explanation": "Kecepatan transfer data internet diukur dalam bit per detik, umumnya Mbps (Mega-bit per second) atau Gbps.",
    "category": "Jaringan"
  },
  {
    "id": 20,
    "question": "Aplikasi browser buatan Google yang paling banyak digunakan di laptop dan Android adalah...",
    "options": [
      "Adobe Photoshop",
      "Microsoft Word",
      "Google Chrome",
      "VLC Player"
    ],
    "correctIndex": 2,
    "explanation": "Google Chrome adalah perangkat lunak peramban web (web browser) untuk membuka halaman situs internet.",
    "category": "Jaringan"
  },
  {
    "id": 21,
    "question": "Protokol yang secara otomatis memberikan alamat IP ke HP atau laptop saat tersambung ke Wi-Fi adalah...",
    "options": [
      "DNS",
      "DHCP",
      "FTP",
      "SMTP"
    ],
    "correctIndex": 1,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) membagikan setelan IP otomatis sehingga pengguna tidak perlu mengetik IP manual.",
    "category": "Jaringan"
  },
  {
    "id": 22,
    "question": "Perangkat keras yang mengubah sinyal serat optik (fiber optic) dari ISP menjadi sinyal kabel internet rumah adalah...",
    "options": [
      "Modem / ONT",
      "Sound Card",
      "RAM",
      "Cooling Fan"
    ],
    "correctIndex": 0,
    "explanation": "Modem / ONT (Optical Network Terminal) mengubah sinyal cahaya fiber optik menjadi sinyal digital ethernet untuk router.",
    "category": "Jaringan"
  },
  {
    "id": 23,
    "question": "Apa arti dari status pesan error '404 Not Found' saat kamu membuka suatu link website?",
    "options": [
      "Server mati total terkena petir",
      "Password kamu salah",
      "Koneksi kuota habis",
      "Halaman web yang dituju tidak ditemukan di server"
    ],
    "correctIndex": 3,
    "explanation": "Kode status 404 menandakan browser berhasil terhubung ke server, namun halaman atau tautan berkas yang diminta tidak ada.",
    "category": "Jaringan"
  },
  {
    "id": 24,
    "question": "Alat pengupas dan penjepit konektor RJ-45 ke kabel LAN disebut...",
    "options": [
      "Obeng Plus",
      "Gergaji Besi",
      "Tang Crimping",
      "Solder Listrik"
    ],
    "correctIndex": 2,
    "explanation": "Tang crimping (crimping tool) digunakan siswa teknik jaringan untuk mengunci pin logam konektor RJ-45 pada kabel UTP.",
    "category": "Jaringan"
  },
  {
    "id": 25,
    "question": "Jaringan komputer lokal berskala kecil dalam satu ruangan lab atau rumah disebut...",
    "options": [
      "WAN (Wide Area Network)",
      "LAN (Local Area Network)",
      "MAN",
      "SAN"
    ],
    "correctIndex": 1,
    "explanation": "LAN adalah jaringan komputer yang mencakup area geografis terbatas seperti rumah, kantor, atau lab sekolah.",
    "category": "Jaringan"
  },
  {
    "id": 26,
    "question": "Komponen utama komputer yang berfungsi sebagai 'otak' pemroses seluruh instruksi kerja adalah...",
    "options": [
      "CPU (Processor)",
      "Casing",
      "Mousepad",
      "Kabel Power"
    ],
    "correctIndex": 0,
    "explanation": "CPU (Central Processing Unit) memproses data, perhitungan logika, dan mengatur koordinasi seluruh komponen komputer.",
    "category": "Coding"
  },
  {
    "id": 27,
    "question": "Memori komputer yang bersifat sementara dan akan terhapus saat komputer dimatikan adalah...",
    "options": [
      "Harddisk / SSD",
      "Flashdisk",
      "CD-ROM",
      "RAM (Random Access Memory)"
    ],
    "correctIndex": 3,
    "explanation": "RAM bersifat volatile, artinya data di dalamnya hanya bertahan selama ada aliran listrik untuk mempercepat jalannya program.",
    "category": "Coding"
  },
  {
    "id": 28,
    "question": "Media penyimpanan modern yang menggunakan chip flash memory tanpa piringan berputar dan jauh lebih cepat dari HDD adalah...",
    "options": [
      "Disket Floppy",
      "Pita Kaset",
      "SSD (Solid State Drive)",
      "CD-R"
    ],
    "correctIndex": 2,
    "explanation": "SSD tidak memiliki komponen mekanis bergerak, membuat kecepatan baca/tulis data dan booting OS jauh lebih instan dibanding HDD.",
    "category": "Coding"
  },
  {
    "id": 29,
    "question": "Shortcut kombinasi tombol keyboard yang paling umum untuk 'Menyalin' (Copy) teks adalah...",
    "options": [
      "Ctrl + V",
      "Ctrl + C",
      "Ctrl + Z",
      "Ctrl + P"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + C digunakan untuk menyalin (Copy) teks atau berkas ke clipboard sistem.",
    "category": "Coding"
  },
  {
    "id": 30,
    "question": "Shortcut kombinasi tombol keyboard yang digunakan untuk 'Menempelkan' (Paste) teks yang sudah disalin adalah...",
    "options": [
      "Ctrl + V",
      "Ctrl + X",
      "Ctrl + S",
      "Ctrl + A"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + V digunakan untuk menempelkan (Paste) data dari clipboard ke dokumen yang sedang aktif.",
    "category": "Coding"
  },
  {
    "id": 31,
    "question": "Shortcut keyboard yang paling sering digunakan untuk 'Membatalkan tindakan terakhir' (Undo) adalah...",
    "options": [
      "Ctrl + Y",
      "Ctrl + N",
      "Ctrl + W",
      "Ctrl + Z"
    ],
    "correctIndex": 3,
    "explanation": "Ctrl + Z berfungsi untuk Undo (membatalkan aksi atau ketikan yang baru saja dilakukan jika terjadi kesalahan).",
    "category": "Coding"
  },
  {
    "id": 32,
    "question": "Sistem operasi open-source berlogo maskot penguin bernama Tux yang banyak dipelajari siswa SMK adalah...",
    "options": [
      "Windows 11",
      "macOS",
      "Linux",
      "MS-DOS"
    ],
    "correctIndex": 2,
    "explanation": "Linux adalah sistem operasi open-source dengan maskot penguin Tux, menjadi fondasi utama server dan sistem Android.",
    "category": "Coding"
  },
  {
    "id": 33,
    "question": "Komponen komputer yang bertugas khusus mengolah tampilan grafis resolusi tinggi dan visual game 3D adalah...",
    "options": [
      "Power Supply",
      "GPU / Kartu Grafis",
      "Thermal Paste",
      "Optical Drive"
    ],
    "correctIndex": 1,
    "explanation": "GPU (Graphics Processing Unit) memiliki ribuan core pemroses paralel khusus untuk merender piksel dan grafis visual 3D.",
    "category": "Coding"
  },
  {
    "id": 34,
    "question": "Port kabel yang paling umum digunakan saat ini untuk menghubungkan laptop ke proyektor atau TV modern adalah...",
    "options": [
      "HDMI",
      "Kabel Antena TV",
      "Port Serial COM",
      "Kabel PS/2"
    ],
    "correctIndex": 0,
    "explanation": "HDMI (High-Definition Multimedia Interface) mentransfer sinyal video definisi tinggi sekaligus audio dalam satu kabel tunggal.",
    "category": "Coding"
  },
  {
    "id": 35,
    "question": "Papan sirkuit utama di mana seluruh komponen PC (seperti Processor, RAM, VGA) ditancapkan disebut...",
    "options": [
      "Keyboard",
      "Whiteboard",
      "Skateboard",
      "Motherboard"
    ],
    "correctIndex": 3,
    "explanation": "Motherboard (Mainboard) adalah papan induk tempat semua jalur komunikasi komponen komputer saling terhubung.",
    "category": "Coding"
  },
  {
    "id": 36,
    "question": "Perangkat penyuplai daya yang mengubah arus listrik AC rumah menjadi DC untuk komponen PC adalah...",
    "options": [
      "Harddisk",
      "Soundcard",
      "PSU (Power Supply Unit)",
      "LAN Card"
    ],
    "correctIndex": 2,
    "explanation": "Power Supply Unit menyuplai voltase listrik yang stabil (12V, 5V, 3.3V) ke seluruh komponen di dalam komputer.",
    "category": "Coding"
  },
  {
    "id": 37,
    "question": "Kombinasi tombol keyboard untuk 'Memilih semua teks atau file' sekaligus (Select All) adalah...",
    "options": [
      "Ctrl + B",
      "Ctrl + A",
      "Ctrl + E",
      "Ctrl + F"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + A (All) menyeleksi seluruh teks dalam satu dokumen atau seluruh berkas di dalam suatu folder.",
    "category": "Coding"
  },
  {
    "id": 38,
    "question": "Format file gambar yang mendukung transparansi latar belakang (tanpa background) adalah...",
    "options": [
      ".png",
      ".jpg",
      ".txt",
      ".mp3"
    ],
    "correctIndex": 0,
    "explanation": "Format PNG (Portable Network Graphics) mendukung channel alpha untuk menghasilkan background transparan pada logo/grafis.",
    "category": "Coding"
  },
  {
    "id": 39,
    "question": "Format dokumen digital standar yang tata letaknya tidak akan berantakan di perangkat apa pun adalah...",
    "options": [
      ".exe",
      ".bat",
      ".zip",
      ".pdf"
    ],
    "correctIndex": 3,
    "explanation": "PDF (Portable Document Format) mempertahankan format teks dan tata letak dokumen secara konsisten di berbagai perangkat.",
    "category": "Coding"
  },
  {
    "id": 40,
    "question": "Program aplikasi di Windows yang digunakan untuk melihat aplikasi yang sedang hang/not-responding dan mematikannya adalah...",
    "options": [
      "Paint",
      "Calculator",
      "Task Manager",
      "Notepad"
    ],
    "correctIndex": 2,
    "explanation": "Task Manager (dibuka dengan Ctrl+Shift+Esc) memonitor kinerja proses dan dapat menghentikan paksa (End Task) aplikasi macet.",
    "category": "Coding"
  },
  {
    "id": 41,
    "question": "Sistem operasi smartphone yang paling banyak digunakan di dunia yang berbasis kernel Linux adalah...",
    "options": [
      "Symbian",
      "Android",
      "Blackberry OS",
      "Windows Phone"
    ],
    "correctIndex": 1,
    "explanation": "Android dikembangkan oleh Google berbasis kernel Linux dan menjadi sistem operasi ponsel pintar nomor satu di dunia.",
    "category": "Coding"
  },
  {
    "id": 42,
    "question": "Satuan terkecil data dalam dunia digital komputer yang hanya bernilai 0 atau 1 disebut...",
    "options": [
      "Bit",
      "Byte",
      "Kilobyte",
      "Gigahertz"
    ],
    "correctIndex": 0,
    "explanation": "Bit (Binary Digit) adalah unit terkecil representasi data dalam sistem komputasi digital (hanya bernilai 0 atau 1).",
    "category": "Coding"
  },
  {
    "id": 43,
    "question": "1 Byte data komputer tersusun dari berapa Bit?",
    "options": [
      "4 Bit",
      "16 Bit",
      "32 Bit",
      "8 Bit"
    ],
    "correctIndex": 3,
    "explanation": "1 Byte terdiri dari 8 bit biner, yang cukup untuk merepresentasikan 1 karakter huruf atau simbol standar ASCII.",
    "category": "Coding"
  },
  {
    "id": 44,
    "question": "Alat input komputer yang digunakan untuk menggerakkan kursor panah di layar monitor disebut...",
    "options": [
      "Speaker",
      "Printer",
      "Mouse",
      "Flashdisk"
    ],
    "correctIndex": 2,
    "explanation": "Mouse adalah peranti penunjuk (pointing device) utama untuk navigasi kursor grafis pada sistem operasi desktop.",
    "category": "Coding"
  },
  {
    "id": 45,
    "question": "Tipe colokan kabel USB bolak-balik yang kini digunakan hampir di seluruh smartphone Android baru adalah...",
    "options": [
      "Micro USB",
      "USB Type-C",
      "Mini USB",
      "VGA"
    ],
    "correctIndex": 1,
    "explanation": "USB Type-C memiliki desain simetris (bisa dicolok bolak-balik), mendukung pengisian daya cepat, dan transfer data tinggi.",
    "category": "Coding"
  },
  {
    "id": 46,
    "question": "Pasta abu-abu yang dioleskan di antara Processor dan pendingin heatsink untuk meratakan panas disebut...",
    "options": [
      "Thermal Paste",
      "Pasta Gigi",
      "Lem Fox",
      "Minyak Rem"
    ],
    "correctIndex": 0,
    "explanation": "Thermal paste mengisi celah udara mikroskopis agar panas dari chip CPU tersalurkan optimal ke pendingin heatsink.",
    "category": "Coding"
  },
  {
    "id": 47,
    "question": "Sistem perangkat lunak dasar pertama yang dijalankan motherboard saat PC baru dinyalakan adalah...",
    "options": [
      "Microsoft Excel",
      "Google Chrome",
      "Spotify",
      "BIOS / UEFI"
    ],
    "correctIndex": 3,
    "explanation": "BIOS / UEFI melakukan inisialisasi hardware (POST) dan memuat bootloader sistem operasi dari media penyimpanan.",
    "category": "Coding"
  },
  {
    "id": 48,
    "question": "Tombol keyboard terpanjang yang berada di bagian bawah dan berfungsi memberi jarak spasi adalah tombol...",
    "options": [
      "Enter",
      "Backspace",
      "Spacebar (Spasi)",
      "Shift"
    ],
    "correctIndex": 2,
    "explanation": "Spacebar adalah tombol bilah panjang horizontal yang digunakan untuk memberi jeda spasi antar kata saat mengetik.",
    "category": "Coding"
  },
  {
    "id": 49,
    "question": "Apa fungsi dari tombol 'PrtScn' (Print Screen) pada keyboard komputer?",
    "options": [
      "Mencetak langsung ke kertas",
      "Mengambil tangkapan layar (screenshot)",
      "Mematikan layar monitor",
      "Mengunci keyboard"
    ],
    "correctIndex": 1,
    "explanation": "Tombol Print Screen menangkap gambar tampilan layar saat itu ke dalam clipboard sistem untuk disimpan atau diedit.",
    "category": "Coding"
  },
  {
    "id": 50,
    "question": "Tipe pendingin komputer yang menggunakan cairan radiator khusus untuk mendinginkan CPU panas disebut...",
    "options": [
      "Liquid Cooling / Water Cooler",
      "Kipas Angin Dinding",
      "Es Batu",
      "Kompresor AC"
    ],
    "correctIndex": 0,
    "explanation": "Liquid Cooling mengalirkan cairan pendingin melalui waterblock untuk menyerap panas CPU dan mendinginkannya di radiator.",
    "category": "Coding"
  },
  {
    "id": 51,
    "question": "Bahasa markup dasar yang digunakan untuk menyusun kerangka dan struktur sebuah halaman website adalah...",
    "options": [
      "CSS",
      "Python",
      "SQL",
      "HTML"
    ],
    "correctIndex": 3,
    "explanation": "HTML (HyperText Markup Language) adalah fondasi kerangka konten (teks, gambar, tautan) pada setiap halaman web.",
    "category": "Logika & AI"
  },
  {
    "id": 52,
    "question": "Bahasa yang digunakan untuk mengatur tampilan visual website (warna, font, margin, dan layout) adalah...",
    "options": [
      "HTML",
      "C++",
      "CSS",
      "Assembly"
    ],
    "correctIndex": 2,
    "explanation": "CSS (Cascading Style Sheets) bertugas menghias dan mempercantik tata letak elemen HTML pada halaman website.",
    "category": "Logika & AI"
  },
  {
    "id": 53,
    "question": "Bahasa pemrograman yang berjalan langsung di browser untuk membuat website menjadi interaktif dan hidup adalah...",
    "options": [
      "HTML",
      "JavaScript",
      "CSS",
      "Photoshop"
    ],
    "correctIndex": 1,
    "explanation": "JavaScript memberikan fungsionalitas interaktif pada website, seperti animasi tombol, pop-up, kalkulator, dan validasi formulir.",
    "category": "Logika & AI"
  },
  {
    "id": 54,
    "question": "Tag HTML yang digunakan untuk membuat tautan / link yang bisa diklik berpindah halaman adalah...",
    "options": [
      "<a>",
      "<p>",
      "<img>",
      "<h1>"
    ],
    "correctIndex": 0,
    "explanation": "Tag <a href='...'> (anchor) digunakan untuk membuat hyperlink menuju URL atau halaman web lain.",
    "category": "Logika & AI"
  },
  {
    "id": 55,
    "question": "Tag HTML yang digunakan untuk menampilkan gambar di halaman web adalah...",
    "options": [
      "<picture>",
      "<video>",
      "<draw>",
      "<img src='...'>"
    ],
    "correctIndex": 3,
    "explanation": "Tag <img> dengan atribut 'src' (source) digunakan untuk menyematkan berkas gambar ke dalam tampilan HTML.",
    "category": "Logika & AI"
  },
  {
    "id": 56,
    "question": "Dalam pemrograman, 'Variabel' diibaratkan seperti...",
    "options": [
      "Kabel listrik",
      "Layar monitor",
      "Wadah / kotak untuk menyimpan nilai data",
      "Tombol power"
    ],
    "correctIndex": 2,
    "explanation": "Variabel adalah nama penampung di memori komputer yang digunakan untuk menyimpan nilai data yang bisa dibaca dan diubah.",
    "category": "Logika & AI"
  },
  {
    "id": 57,
    "question": "Struktur logika percabangan yang memilih aksi berdasarkan kondisi Benar atau Salah adalah...",
    "options": [
      "for loop",
      "if - else",
      "console.log",
      "import"
    ],
    "correctIndex": 1,
    "explanation": "Pernyataan 'if - else' mengevaluasi kondisi: jika benar (true) jalankan blok A, jika salah (false) jalankan blok B.",
    "category": "Logika & AI"
  },
  {
    "id": 58,
    "question": "Perintah JavaScript yang paling sering dipakai siswa untuk mencetak teks pengujian ke console browser adalah...",
    "options": [
      "console.log()",
      "print_paper()",
      "alert_all()",
      "write_word()"
    ],
    "correctIndex": 0,
    "explanation": "console.log() mencetak pesan atau isi variabel ke panel developer tools browser untuk keperluan pengecekan kode.",
    "category": "Logika & AI"
  },
  {
    "id": 59,
    "question": "Di Git, perintah untuk menyimpan catatan perubahan berkas dengan pesan deskripsi adalah...",
    "options": [
      "git delete",
      "git clear",
      "git close",
      "git commit -m 'pesan'"
    ],
    "correctIndex": 3,
    "explanation": "'git commit -m' mencatat snapshot versi terbaru dari kode proyekmu ke dalam riwayat repositori Git.",
    "category": "Logika & AI"
  },
  {
    "id": 60,
    "question": "Platform cloud populer tempat para programmer menyimpan dan berkolaborasi membuat proyek kode open source adalah...",
    "options": [
      "TikTok",
      "Instagram",
      "GitHub",
      "Netflix"
    ],
    "correctIndex": 2,
    "explanation": "GitHub adalah layanan hosting repositori berbasis Git yang digunakan jutaan developer di dunia untuk berbagi kode.",
    "category": "Logika & AI"
  },
  {
    "id": 61,
    "question": "Tipe data dalam pemrograman yang hanya berisi teks diapit tanda kutip (seperti \"Halo Dunia\") disebut...",
    "options": [
      "Boolean",
      "String",
      "Integer",
      "Float"
    ],
    "correctIndex": 1,
    "explanation": "String adalah tipe data kumpulan karakter alfanumerik yang dituliskan di dalam tanda petik.",
    "category": "Logika & AI"
  },
  {
    "id": 62,
    "question": "Tipe data yang hanya bernilai benar (true) atau salah (false) disebut...",
    "options": [
      "Boolean",
      "String",
      "Double",
      "Char"
    ],
    "correctIndex": 0,
    "explanation": "Tipe data Boolean dinamai dari George Boole, hanya memiliki dua nilai kondisi logis: true atau false.",
    "category": "Logika & AI"
  },
  {
    "id": 63,
    "question": "Istilah untuk kesalahan atau eror pada penulisan kode program yang menyebabkan aplikasi tidak berjalan disebut...",
    "options": [
      "Spider",
      "Ant",
      "Fly",
      "Bug"
    ],
    "correctIndex": 3,
    "explanation": "Bug adalah istilah umum untuk kekeliruan atau cacat pada kode program; proses memperbaikinya disebut Debugging.",
    "category": "Logika & AI"
  },
  {
    "id": 64,
    "question": "Struktur data kumpulan banyak nilai berurutan yang diakses menggunakan nomor indeks (mulai dari 0) disebut...",
    "options": [
      "Variable tunggal",
      "Boolean",
      "Array",
      "Constant"
    ],
    "correctIndex": 2,
    "explanation": "Array adalah variabel larik yang dapat menyimpan daftar banyak nilai dalam satu nama variabel dengan indeks angka.",
    "category": "Logika & AI"
  },
  {
    "id": 65,
    "question": "Di sebagian besar bahasa pemrograman modern, nomor indeks pertama pada Array selalu dimulai dari angka...",
    "options": [
      "1 (Satu)",
      "0 (Nol)",
      "-1",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "Mayoritas bahasa pemrograman modern (JavaScript, C, Python, Java) menggunakan zero-based indexing di mana elemen pertama berindeks 0.",
    "category": "Logika & AI"
  },
  {
    "id": 66,
    "question": "Proses mengulang suatu baris kode berkali-kali sampai batas tertentu tercapai disebut...",
    "options": [
      "Perulangan (Looping)",
      "Restarting",
      "Deleting",
      "Shutting down"
    ],
    "correctIndex": 0,
    "explanation": "Looping (seperti for loop atau while loop) mengotomatisasi pekerjaan berulang tanpa perlu menulis baris kode berkali-kali.",
    "category": "Logika & AI"
  },
  {
    "id": 67,
    "question": "Aplikasi code editor gratis dan sangat populer buatan Microsoft yang banyak dipakai siswa SMK untuk ngoding adalah...",
    "options": [
      "MS Paint",
      "Windows Media Player",
      "WordPad",
      "Visual Studio Code (VS Code)"
    ],
    "correctIndex": 3,
    "explanation": "VS Code adalah teks editor kode ringan dan bertenaga dengan ribuan ekstensi pendukung untuk berbagai bahasa pemrograman.",
    "category": "Logika & AI"
  },
  {
    "id": 68,
    "question": "Bahasa query standar yang digunakan untuk mengelola dan mengambil data dari database relasional adalah...",
    "options": [
      "HTML",
      "CSS",
      "SQL",
      "JSON"
    ],
    "correctIndex": 2,
    "explanation": "SQL (Structured Query Language) digunakan untuk perintah SELECT, INSERT, UPDATE, dan DELETE pada basis data relasional.",
    "category": "Logika & AI"
  },
  {
    "id": 69,
    "question": "Format pertukaran data berbasis teks ringan yang strukturnya mirip objek JavaScript dan banyak dipakai API adalah...",
    "options": [
      "DOCX",
      "JSON",
      "EXE",
      "MP4"
    ],
    "correctIndex": 1,
    "explanation": "JSON (JavaScript Object Notation) adalah standar teks ringan untuk mengirim data antara server dan aplikasi frontend.",
    "category": "Logika & AI"
  },
  {
    "id": 70,
    "question": "Apa hasil dari operasi logika matematika: 'TRUE AND TRUE'?",
    "options": [
      "TRUE",
      "FALSE",
      "0",
      "ERROR"
    ],
    "correctIndex": 0,
    "explanation": "Operator logika AND menghasilkan TRUE hanya jika kedua sisi kondisi bernilai TRUE.",
    "category": "Logika & AI"
  },
  {
    "id": 71,
    "question": "Apa hasil dari operasi logika matematika: 'TRUE OR FALSE'?",
    "options": [
      "FALSE",
      "NULL",
      "ERROR",
      "TRUE"
    ],
    "correctIndex": 3,
    "explanation": "Operator logika OR bernilai TRUE cukup jika salah satu dari kondisinya bernilai TRUE.",
    "category": "Logika & AI"
  },
  {
    "id": 72,
    "question": "Kumpulan instruksi langkah-demi-langkah yang terstruktur untuk memecahkan suatu masalah komputasi disebut...",
    "options": [
      "Hardware",
      "Spam",
      "Algoritma",
      "Hoaks"
    ],
    "correctIndex": 2,
    "explanation": "Algoritma adalah urutan langkah logis yang disusun sistematis untuk menyelesaikan tugas atau perhitungan matematika.",
    "category": "Logika & AI"
  },
  {
    "id": 73,
    "question": "Fungsi kecil yang dibungkus dan dapat dipanggil berulang kali di berbagai bagian kode program disebut...",
    "options": [
      "Folder",
      "Function / Method",
      "Keyboard",
      "Wallpaper"
    ],
    "correctIndex": 1,
    "explanation": "Function adalah blok kode mandiri yang menerima input argumen, melakukan proses, dan mengembalikan hasil.",
    "category": "Logika & AI"
  },
  {
    "id": 74,
    "question": "Framework CSS modern berbasis utility classes yang digunakan untuk mendesain website Stoodify ini adalah...",
    "options": [
      "Tailwind CSS",
      "Photoshop",
      "CorelDraw",
      "Canva"
    ],
    "correctIndex": 0,
    "explanation": "Tailwind CSS menyediakan kelas-kelas utilitas siap pakai (seperti flex, p-4, bg-blue-500) untuk mendesain web cepat.",
    "category": "Logika & AI"
  },
  {
    "id": 75,
    "question": "Library JavaScript buatan Facebook yang sangat populer untuk membangun antarmuka web modern reaktif adalah...",
    "options": [
      "Excel",
      "WinRAR",
      "Notepad++",
      "React"
    ],
    "correctIndex": 3,
    "explanation": "React adalah pustaka frontend berbasis komponen modular untuk membangun antarmuka web interaktif berperforma tinggi.",
    "category": "Logika & AI"
  },
  {
    "id": 76,
    "question": "Apa kepanjangan dari istilah 'AI' yang kini semakin populer dalam dunia teknologi?",
    "options": [
      "Apple Internet",
      "Automatic Input",
      "Artificial Intelligence (Kecerdasan Buatan)",
      "Anti Infection"
    ],
    "correctIndex": 2,
    "explanation": "AI (Artificial Intelligence) adalah bidang ilmu komputer yang menciptakan sistem mesin cerdas untuk meniru penalaran manusia.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 77,
    "question": "Kejahatan siber berupa pengiriman link palsu untuk mencuri username dan password korban disebut...",
    "options": [
      "Fishing (Memancing ikan)",
      "Phishing",
      "Coding",
      "Browsing"
    ],
    "correctIndex": 1,
    "explanation": "Phishing adalah upaya penipuan online dengan menyamar sebagai pihak resmi untuk mengelabui korban agar membocorkan kata sandi.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 78,
    "question": "Ciri kata sandi (password) yang kuat dan aman dari tebakan peretas adalah...",
    "options": [
      "Kombinasi huruf besar, kecil, angka, simbol minimal 8-12 karakter",
      "Hanya angka tanggal lahir",
      "Kata '12345678'",
      "Nama panggilan sendiri"
    ],
    "correctIndex": 0,
    "explanation": "Password yang kuat menggabungkan variasi karakter acak dan panjang, membuatnya sangat sulit ditebak oleh program brute-force.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 79,
    "question": "Kode verifikasi sementara via SMS/WhatsApp yang TIDAK BOLEH dibagikan kepada siapa pun adalah kode...",
    "options": [
      "Kode Pos",
      "Nomor WhatsApp",
      "Username",
      "OTP (One-Time Password)"
    ],
    "correctIndex": 3,
    "explanation": "Kode OTP adalah kunci rahasia sekali pakai untuk verifikasi akun pribadi; pihak resmi tidak pernah meminta kode OTP nasabah.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 80,
    "question": "Program komputer berbahaya yang dapat merusak sistem atau mencuri data pengguna disebut...",
    "options": [
      "Antivirus",
      "Hardware",
      "Malware / Virus",
      "Freeware"
    ],
    "correctIndex": 2,
    "explanation": "Malware (Malicious Software) mencakup virus, trojan, spyware, dan ransomware yang dirancang untuk merugikan sistem korban.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 81,
    "question": "Teknik belajar fokus 25 menit yang diselingi istirahat 5 menit untuk mencegah lelah mental disebut...",
    "options": [
      "Teknik SKS",
      "Teknik Pomodoro",
      "Teknik Begadang",
      "Teknik Rebahan"
    ],
    "correctIndex": 1,
    "explanation": "Teknik Pomodoro membagi waktu belajar menjadi interval 25 menit fokus penuh dan 5 menit rileks untuk menjaga stamina otak.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 82,
    "question": "Berapa menit durasi satu sesi 'Zen Focus' standar yang ada di aplikasi Stoodify?",
    "options": [
      "25 Menit",
      "10 Menit",
      "60 Menit",
      "120 Menit"
    ],
    "correctIndex": 0,
    "explanation": "Fitur Zen Focus di Stoodify mengadopsi ritme 25 menit sesi fokus agar siswa SMK dapat menyelesaikan modul tanpa distraksi HP.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 83,
    "question": "Kebiasaan belajar panik beberapa jam sebelum ujian yang bikin cepat lupa materi dikenal dengan singkatan...",
    "options": [
      "UAS",
      "LKPD",
      "OSIS",
      "SKS (Sistem Kebut Semalam)"
    ],
    "correctIndex": 3,
    "explanation": "Sistem Kebut Semalam memicu stres dan kurang tidur, sehingga materi hanya singgah sebentar di ingatan jangka pendek.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 84,
    "question": "Aplikasi asisten belajar cerdas karya siswa SMK Telkom Sidoarjo yang dipamerkan di booth ini adalah...",
    "options": [
      "Shopee",
      "Mobile Legends",
      "Stoodify",
      "Twitter"
    ],
    "correctIndex": 2,
    "explanation": "Stoodify adalah asisten belajar pintar berbasis AI yang mengintegrasikan jadwal sekolah, tugas, dan timer fokus bagi siswa.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 85,
    "question": "Apa kepanjangan dari LKPD yang sering dikerjakan siswa SMK saat praktikum di lab?",
    "options": [
      "Laporan Keuangan Peserta Didik",
      "Lembar Kerja Peserta Didik",
      "Lembar Komputer Praktik Digital",
      "Latihan Khusus Pemrograman Dasar"
    ],
    "correctIndex": 1,
    "explanation": "LKPD adalah Lembar Kerja Peserta Didik yang memuat panduan langkah dan tugas eksperimen praktikum di sekolah.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 86,
    "question": "Di aplikasi Stoodify, label 'SG' pada prioritas tugas Linux Hardening memiliki arti...",
    "options": [
      "Sangat Tinggi",
      "Sangat Gampang",
      "Semester Ganjil",
      "Sekolah Gratis"
    ],
    "correctIndex": 0,
    "explanation": "Tingkat urgensi 'SG' menandakan prioritas tugas Sangat Tinggi yang harus dikerjakan lebih dahulu agar tidak terlewat tenggat waktu.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 87,
    "question": "Layanan penyimpanan berkas online seperti Google Drive atau OneDrive sering disebut dengan istilah...",
    "options": [
      "Flashdisk Fisik",
      "Disket",
      "Penyimpanan Lemari",
      "Cloud Storage"
    ],
    "correctIndex": 3,
    "explanation": "Cloud storage menyimpan data di server internet sehingga dokumen tugas dapat dibuka dari komputer mana pun.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 88,
    "question": "Menyalin tugas orang lain tanpa izin dan mengakuinya sebagai karya sendiri dalam dunia akademik disebut...",
    "options": [
      "Inovasi",
      "Kolaborasi",
      "Plagiarisme",
      "Revisi"
    ],
    "correctIndex": 2,
    "explanation": "Plagiarisme adalah tindakan melanggar integritas akademik dengan mengambil karya atau ide orang lain tanpa atribusi sumber sah.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 89,
    "question": "Apa keuntungan utama aplikasi Stoodify yang berukuran ringan hanya ~9.9 MB?",
    "options": [
      "Membuat HP bisa terbang",
      "Cepat diunduh, tidak membebani memori HP, dan bisa dibuka offline",
      "Menambah pulsa otomatis",
      "Mengisi baterai tanpa kabel"
    ],
    "correctIndex": 1,
    "explanation": "Dengan ukuran ~9.9 MB, Stoodify ramah untuk semua jenis HP Android siswa dan dapat beroperasi 100% tanpa internet.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 90,
    "question": "Aplikasi kecerdasan buatan berbasis obrolan teks buatan OpenAI yang bisa menjawab pertanyaan adalah...",
    "options": [
      "ChatGPT",
      "Calculator",
      "Camera",
      "Galeri"
    ],
    "correctIndex": 0,
    "explanation": "ChatGPT adalah model AI percakapan yang dilatih untuk memahami dan menghasilkan jawaban teks dalam berbagai topik.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 91,
    "question": "Menyimpan salinan berkas tugas penting ke flashdisk atau cloud untuk mencegah data hilang disebut tindakan...",
    "options": [
      "Delete",
      "Format",
      "Spam",
      "Backup"
    ],
    "correctIndex": 3,
    "explanation": "Backup data secara berkala memastikan file tugas dan kodingan aman jika laptop mengalami kerusakan mendadak.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 92,
    "question": "Slogan utama aplikasi Stoodify yang terpampang di pameran inkubasi ini adalah...",
    "options": [
      "Sekolah Santai Tanpa Tugas",
      "Main Game Sepanjang Hari",
      "Belajar Efektif Tanpa Panik Bareng Stoodify",
      "Belajar Cepat Tanpa Baca"
    ],
    "correctIndex": 2,
    "explanation": "'Belajar Efektif Tanpa Panik Bareng Stoodify' adalah visi produk untuk menciptakan ketenangan ritme belajar siswa SMK.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 93,
    "question": "Aktivitas membuka media sosial terus-menerus padahal sedang jam belajar sekolah disebut bentuk...",
    "options": [
      "Diskon belanja",
      "Distraksi digital",
      "Literasi digital",
      "Enkripsi data"
    ],
    "correctIndex": 1,
    "explanation": "Notifikasi media sosial dan video pendek adalah distraksi digital terbesar yang memecah konsentrasi belajar siswa.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 94,
    "question": "Teknik mencatat pelajaran dengan membuat cabang-cabang visual warna-warni dari satu topik utama disebut...",
    "options": [
      "Mind Mapping",
      "Mengetik Buta",
      "Copy Paste",
      "Hapus Berkas"
    ],
    "correctIndex": 0,
    "explanation": "Mind Map memetakan konsep materi secara visual dengan diagram bercabang, memudahkan otak mengingat hubungan antar materi.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 95,
    "question": "Apa tujuan adanya fitur 'Streak Belajar' (seperti 5 Hari Streak) di akun Stoodify kamu?",
    "options": [
      "Mengukur kecepatan mengetik",
      "Menentukan juara kelas",
      "Menghapus akun yang tidak aktif",
      "Menjaga konsistensi kebiasaan belajar setiap hari"
    ],
    "correctIndex": 3,
    "explanation": "Streak counter memotivasi siswa membangun konsistensi belajar harian lewat kepuasan melihat rekor hari berturut-turut.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 96,
    "question": "Perangkat yang sering terhubung ke internet dalam konsep 'IoT' (Internet of Things) contohnya adalah...",
    "options": [
      "Buku tulis kertas",
      "Pena tinta",
      "Lampu pintar (Smart Lamp) yang dikontrol lewat HP",
      "Papan tulis kapur"
    ],
    "correctIndex": 2,
    "explanation": "IoT menghubungkan benda sehari-hari (seperti lampu pintar, CCTV, sensor suhu) ke jaringan internet untuk kendali jarak jauh.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 97,
    "question": "Kecerdasan buatan Gemini yang dikembangkan oleh Google termasuk dalam teknologi...",
    "options": [
      "Mesin Ketik Manual",
      "AI Multimodal Generatif",
      "Kamera Analog",
      "Printer Sablon"
    ],
    "correctIndex": 1,
    "explanation": "Google Gemini adalah model AI canggih yang mampu memahami teks, kode, audio, dan gambar secara terintegrasi.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 98,
    "question": "Fitur 'Daftar Tugas' di Stoodify membantu siswa agar...",
    "options": [
      "Tidak ada tugas atau PR sekolah yang terlewat dikumpulkan",
      "Semua tugas otomatis selesai sendiri",
      "Bisa bolos sekolah",
      "Guru tidak bisa memberi nilai"
    ],
    "correctIndex": 0,
    "explanation": "Daftar tugas terintegrasi jadwal sekolah memetakan tenggat waktu sehingga siswa tahu apa yang harus diselesaikan malam ini.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 99,
    "question": "Membiasakan tidur cukup 7-8 jam sebelum hari ujian sangat penting karena...",
    "options": [
      "Supaya bisa mimpi tentang soal ujian",
      "Agar baterai HP awet",
      "Tidak ada hubungannya",
      "Otak mengonsolidasikan ingatan materi dan fokus mental terjaga prima"
    ],
    "correctIndex": 3,
    "explanation": "Tidur cukup memungkinkan otak memindahkan informasi dari memori kerja sementara ke memori jangka panjang.",
    "category": "Manajemen Belajar"
  },
  {
    "id": 100,
    "question": "Sekolah kejuruan teknologi yang menyelenggarakan pameran inkubasi karya Stoodify ini adalah...",
    "options": [
      "SMA Negeri 1 Jakarta",
      "SMP Merdeka",
      "SMK Telkom Sidoarjo",
      "Universitas Indonesia"
    ],
    "correctIndex": 2,
    "explanation": "Stoodify dirancang dan dikembangkan dengan bangga oleh siswa inkubasi SMK Telkom Sidoarjo.",
    "category": "Manajemen Belajar"
  }
];
