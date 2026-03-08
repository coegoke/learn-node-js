# 🚀 Node.js 60-Day Fullstack Masterclass Roadmap

Selamat datang di repositori pembelajaran Node.js komprehensif! Repositori ini berisi rangkuman belajar harian yang dirancang untuk membawa Anda dari **Pemula** menjadi **Senior Backend/Fullstack Engineer** yang siap menangani aplikasi skala produksi (*Production-Ready*).

Roadmap ini disusun terstruktur selama **60 Hari** karena mencakup ekosistem luas di sekitar Node.js—mulai dari fundamental JavaScript Asynchronous, REST API, Database Relasional/NoSQL, Keamanan Lanjut, WebSockets, Arsitektur Microservice, hingga praktik DevOps & Deployment.

Mari kita mulai petualangan ini! 💻✨

---

## 🗺️ The Roadmap

### 🧱 Phase 1: The Fundamentals (Day 1 - 10)
Fokus: Memahami *runtime* Node.js, *asynchronous programming*, dan membangun REST API sederhana yang terkoneksi dengan database.

- [x] **Day 1: Node.js & Express Basics** - Inisialisasi Project, Setup Server Express, Routing Dasar, Middleware Keamanan (`helmet`, `cors`), dan Autentikasi (`jsonwebtoken`, `bcrypt`). *(Lihat folder `day 1`)*
- [ ] **Day 2: Asynchronous JavaScript** - Memahami Event Loop, Callbacks, Promises, dan kombinasi `async/await` di sisi server.
- [ ] **Day 3: Core Modules & File System** - Eksplorasi modul bawaan Node.js (`fs`, `path`, `http`, `os`) untuk manajemen file dan informasi sistem.
- [ ] **Day 4: Advanced Validation & Error Handling** - Validasi *payload request* yang ketat menggunakan `express-validator` dan sentralisasi penanganan *error*.
- [ ] **Day 5-6: Relational Databases & ORM** - Integrasi SQLite/PostgreSQL menggunakan Object-Relational Mapping (Prisma atau Sequelize).
- [ ] **Day 7: NoSQL Databases** - Pengenalan MongoDB dan Mongoose ODM.
- [ ] **Day 8-9: Authentication Mastery** - Implementasi keamanan Autentikasi *Stateful* vs *Stateless* dan JSON Web Tokens (JWT).
- [ ] **Day 10: 🏆 Mini Project 1** - Membangun CRUD REST API yang utuh dengan Database dan Autentikasi.

### 🛡️ Phase 2: Intermediate Concepts (Day 11 - 25)
Fokus: Keamanan tingkat lanjut, Performa, dan implementasi fitur dunia nyata (*Real-world features*).

- [ ] **Day 11: Security Best Practices** - Penanganan tingkat lanjut serangan XSS, CSRF, SQL Injection, dan Web API Rate Limiting.
- [ ] **Day 12: Advanced Authorization** - Role-Based Access Control (RBAC) dan manajemen Refresh Tokens.
- [ ] **Day 13: File Streaming & Uploads** - Menangani input *multipart/form-data* menggunakan Multer dan upload ke Cloud Storage (AWS S3/Cloudinary).
- [ ] **Day 14: Pagination, Filtering & Sorting** - Praktik terbaik membangun API yang efisien untuk *dataset* besar.
- [ ] **Day 15-16: Real-time Communication** - Mengganti HTTP Request dengan WebSockets menggunakan `Socket.io`.
- [ ] **Day 17: Email & Notifications** - Sistem Reset Password dan verifikasi email via `Nodemailer` atau SendGrid.
- [ ] **Day 18: Logging & Monitoring** - Menyimpan riwayat aktivitas trafik dan *error* secara persisten (Winston, Morgan).
- [ ] **Day 19-20: Caching Strategies** - Mengoptimalkan kecepatan pembacaan API menggunakan *In-Memory Database* **Redis**.
- [ ] **Day 21: Background Jobs & Task Queues** - Mendelegasikan tugas berat agar tidak memblokir Event Loop Node.js (BullMQ / RabbitMQ).
- [ ] **Day 22-23: Automated Testing** - Memastikan kode bebas *bug* melalui Unit Testing dengan **Jest** & **Supertest**.
- [ ] **Day 24: Integration & E2E Testing** - Pengujian alur integrasi antar komponen.
- [ ] **Day 25: 🏆 Mini Project 2** - Aplikasi E-Commerce/Chatting Sederhana yang menerapkan *Real-time*, Redis, dan Testing.

### 🏛️ Phase 3: Advanced Architecture & Patterns (Day 26 - 40)
Fokus: Mendesain sistem yang dapat dikembangkan (*Scalable*) dalam skala enterprise dan mudah dikelola (*Maintainable*).

- [ ] **Day 26: Clean Architecture & SOLID Principles** - Restrukturisasi sistem folder Express.js berskala besar.
- [ ] **Day 27: Design Patterns** - Implementasi Dependency Injection, Repository Pattern, Factory, & Singleton.
- [ ] **Day 28: GraphQL vs REST** - Membuat API yang lebih fleksibel menggunakan GraphQL dan Apollo Server.
- [ ] **Day 29-30: Microservices Architecture (Intro)** - Transisi pemikiran dari Monolith ke Microservices. Memecah *service*.
- [ ] **Day 31: Inter-Service Communication** - Manajemen komunikasi antar-servis dengan gRPC dan Message Brokers (Kafka/RabbitMQ).
- [ ] **Day 32: API Gateways** - Sentralisasi *entry point* *client* (Kong / Nginx).
- [ ] **Day 33: CQRS & Event Sourcing** - Memisahkan operasi *Read* dan *Write* untuk optimasi performa *database*.
- [ ] **Day 34-36: Fullstack Integration** - Implementasi Server-Side Rendering (SSR) & Static Site Generation (SSG) React Ecosystem (Next.js/Remix) berpasangan dengan layanan Node.js API.
- [ ] **Day 37: Performance Profiling** - Pencarian dan *debugging Memory Leaks* di Node.js (Clinic.js/Node Inspect).
- [ ] **Day 38: Clustering & Worker Threads** - Memaksimalkan utilitas multi-core CPU untuk kinerja aplikasi berlipat ganda.
- [ ] **Day 39-40: 🏆 Mini Project 3** - Membangun 2 Microservices terpisah yang saling berkomunikasi dengan *Message Broker*.

### ☁️ Phase 4: DevOps, Cloud & Production (Day 41 - 60)
Fokus: Mengantarkan kode hasil *development* ke *Production Server* dengan aman, stabil, dan bisa diperbesar kapasitasnya (*Scale-up / Scale-out*).

- [ ] **Day 41-43: Containerization (Docker)** - Membungkus aplikasi Node.js beserta konfigurasinya (.Dockerfile & Docker Compose) untuk konsistensi di lokal maupun *server*.
- [ ] **Day 44: Linux Server Administration** - Perintah esensial sistem operasi server (SSH, Bash, Permission Roles).
- [ ] **Day 45-46: Web Servers & Reverse Proxies** - Konfigurasi Nginx dan Node.js Process Manager (PM2).
- [ ] **Day 47-49: Continuous Integration & Deployment (CI/CD)** - Otomatisasi pengujian, *build*, & *deploy* menggunakan GitHub Actions / GitLab CI.
- [ ] **Day 50: Cloud Providers Basics** - Meng-host aplikasi di layanan Cloud (AWS EC2 / GCP Compute Engine / DigitalOcean VPS) berserta sistem Relasional Service Database Cloud (RDS).
- [ ] **Day 51-52: Serverless Architecture** - Menjalankan Node.js tanpa mengurus infrastruktur *backend* (AWS Lambda, Vercel).
- [ ] **Day 53: Infrastructure as Code (IaC)** - Mengontrol pembentukan *server cloud* melalui kode dasar (Terraform).
- [ ] **Day 54: Orchestration (Kubernetes)** - Pengenalan tata cara manajemen ratusan *container* Node.js untuk aplikasi global.
- [ ] **Day 55: App Monitoring & Alerting** - Menyalakan alarm ketika server bermasalah menggunakan Prometheus, Grafana, Datadog / NewRelic.
- [ ] **Day 56: Load Balancing & Auto-Scaling** - Strategi memecah beban ratusan ribu trafik bersamaan ke banyak cabang.
- [ ] **Day 57-60: 🏆 Final Capstone Project**
  - Pembuatan dan pendokumentasian sistem berskala enterprise yang utuh.
  - Setup CI/CD Pipeline penuh, Ter-Docker-isasi, Monitoring Grafana nyala, termanajemen dengan Clean-Architecture.
  - Sertifikat kelulusan mandiri Anda siap!

---

## 🎯 Cara Menggunakan Repositori Ini

1. **Jelajahi per Hari**: Terdapat *folder* untuk setiap pembagian hari (contoh: `/day-1`, `/day-2`).
2. **Baca Dokumentasi Pendek**: Setiap bab akan memiliki file `README.md` lokal mandirinya sendiri terkait instruksi dan paket yang diinstal.
3. **Praktekkan Kode**: Jalankan `npm install` sesuai lokasinya dan lakukan eksperimen Anda sendiri.
4. **Beri Tanda Ceklis** pada daftar di *README.md* ini sesudah Anda berhasil menguasai materi tersebut.

Terus belajar dan jangan menyerah ketika melihat Error Terminal Merah! ☕🚀
