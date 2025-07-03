'use client';
import { FaWhatsapp, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section
        id="home"
        className="pt-28 pb-16 md:pt-36 min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Teks Konten */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h1 className="font-semibold text-indigo-500 md:text-xl lg:text-2xl animate-fadeInUp">
                  Hai..! 👋 saya
                  <span className="block font-bold text-black text-4xl mt-1 lg:text-5xl animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Salman Al Farisiy
                  </span>
                </h1>
                <h2 className="text-slate-500 text-lg mb-5 lg:text-2xl animate-fadeInUp delay-100">
                  Full Stack Web Developer
                </h2>
                <p className="text-slate-400 mb-10 animate-fadeInUp delay-200">
                  Membangun Solusi Digital dari Frontend hingga Backend. Saya adalah Full Stack Web Developer yang menghadirkan performa, keamanan, dan desain modern ke dalam setiap baris kode.
                </p>

                {/* Tombol Konten */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-200 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 py-3 px-8 rounded-full hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Hubungi Saya via WhatsApp"
                  >
                    <FaWhatsapp className="text-xl" /> Hubungi Saya
                  </a>
                  <a
                    href="#about"
                    className="transition-all duration-200 text-base font-semibold text-indigo-500 bg-white py-2.5 px-6 rounded-full border-indigo-500 border-2 hover:bg-indigo-100 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    aria-label="Lihat Profil Saya"
                  >
                    <FaUser className="text-lg" /> Lihat Profil Saya
                  </a>
                </div>
              </div>
            </div>

            {/* Foto Konten */}
            <div className="w-full lg:w-1/2 order-1 lg:order-3">
              <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto shadow-2xl rounded-2xl overflow-hidden bg-white animate-fadeInUp delay-300">
                <img
                  src="/1.webp"
                  alt="Foto profil Salman Al Farisiy, Full Stack Web Developer"
                  className="max-w-full w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .animate-fadeInUp.delay-100 { animation-delay: 0.1s; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-300 { animation-delay: 0.3s; }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-100 min-h-[60vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
              <FaUser className="text-indigo-400" /> About Me
            </h1>
            <p className="mb-4 text-slate-600 text-lg">
              Halo! Saya seorang pengembang web yang memiliki ketertarikan besar dalam membangun solusi digital yang fungsional, efisien, dan user-friendly. Ketertarikan saya terhadap dunia teknologi dimulai sejak masa sekolah, dan terus berkembang menjadi karier profesional di bidang pengembangan web.
            </p>
            <p className="mb-6 text-slate-600 text-lg">
              Saya telah bekerja di berbagai proyek, mulai dari website portofolio pribadi hingga aplikasi web skala menengah untuk kebutuhan bisnis. Dengan kombinasi antara kemampuan teknis dan semangat belajar yang tinggi, saya senantiasa berusaha menghadirkan hasil kerja yang tidak hanya memenuhi ekspektasi, tapi juga memberi nilai lebih bagi pengguna.
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span> Keahlian Inti
            </h2>
            <ul className="list-disc list-inside mb-4 space-y-1 text-slate-700 pl-4">
              <li><span className="font-semibold text-indigo-500">JavaScript (ES6+)</span></li>
              <li><span className="font-semibold text-indigo-500">React dan ekosistemnya (Redux, Next.js)</span></li>
              <li><span className="font-semibold text-indigo-500">Node.js dan Express.js</span></li>
              <li><span className="font-semibold text-indigo-500">Python untuk backend dan automasi</span></li>
              <li><span className="font-semibold text-indigo-500">HTML5, CSS3, dan Tailwind CSS</span></li>
              <li><span className="font-semibold text-indigo-500">RESTful API dan integrasi pihak ketiga</span></li>
              <li><span className="font-semibold text-indigo-500">Penggunaan Git & GitHub untuk versi kontrol</span></li>
            </ul>
            <p className="mb-4 text-slate-600">
              Saya juga terbiasa dengan prinsip <span className="font-semibold text-purple-500">clean code</span>, <span className="font-semibold text-purple-500">responsive design</span>, serta pengujian dasar (unit & integration testing).
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span> Nilai-nilai Utama
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pl-4">
              <li><span className="font-semibold text-indigo-500">Ketepatan Waktu:</span> Menyelesaikan tugas sesuai jadwal adalah prioritas saya, karena saya percaya waktu adalah aset berharga untuk semua pihak.</li>
              <li><span className="font-semibold text-indigo-500">Perhatian terhadap Detail:</span> Saya selalu memastikan setiap baris kode dan elemen desain diperhatikan secara menyeluruh untuk menghasilkan produk yang berkualitas tinggi.</li>
              <li><span className="font-semibold text-indigo-500">Komunikasi yang Jelas:</span> Saya terbiasa bekerja secara kolaboratif dan terbuka terhadap masukan, sehingga komunikasi yang efektif menjadi bagian penting dari cara saya bekerja.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-purple-100 via-indigo-50 to-white min-h-[50vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <h1 className="justify-center text-3xl md:text-4xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
              My Skills
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Front-End */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 flex space-x-2 text-4xl text-indigo-500">
                  <span title="HTML5"><i className="devicon-html5-plain colored" /></span>
                  <span title="CSS3"><i className="devicon-css3-plain colored" /></span>
                  <span title="JavaScript"><i className="devicon-javascript-plain colored" /></span>
                  <span title="React"><i className="devicon-react-original colored" /></span>
                  <span title="Angular"><i className="devicon-angularjs-plain colored" /></span>
                </div>
                <h2 className="text-xl font-semibold text-indigo-600 mb-2">Front-End</h2>
                <p className="text-slate-600">HTML, CSS, JavaScript, React, Angular</p>
              </div>

              {/* Back-End */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 flex space-x-2 text-4xl text-purple-500">
                  <span title="Node.js"><i className="devicon-nodejs-plain colored" /></span>
                  <span title="Express"><i className="devicon-express-original colored" /></span>
                  <span title="Django"><i className="devicon-django-plain colored" /></span>
                  <span title="Ruby on Rails"><i className="devicon-rails-plain colored" /></span>
                </div>
                <h2 className="text-xl font-semibold text-purple-600 mb-2">Back-End</h2>
                <p className="text-slate-600">Node.js, Express, Django, or Ruby on Rails</p>
              </div>

              {/* DevOps & Tools */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 flex space-x-2 text-4xl text-pink-500">
                  <span title="Docker"><i className="devicon-docker-plain colored" /></span>
                  <span title="Git"><i className="devicon-git-plain colored" /></span>
                  <span title="Jenkins"><i className="devicon-jenkins-line colored" /></span>
                  <span title="AWS"><i className="devicon-amazonwebservices-original colored" /></span>
                  <span title="CI/CD"><i className="devicon-githubactions-plain colored" /></span>
                </div>
                <h2 className="text-xl font-semibold text-pink-600 mb-2">DevOps & Tools</h2>
                <p className="text-slate-600">Docker, Git, Jenkins, AWS, or CI/CD solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Devicon CDN for icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </section>

      {/* Pengalaman Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-100 min-h-[60vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                Pengalaman Profesional
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 w-1 h-full bg-indigo-200 transform -translate-x-1/2"></div>

              {/* Experience items */}
              <div className="space-y-8 md:space-y-12">
                {/* Experience 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:flex-row-reverse">
                  {/* Year (mobile) */}
                  <div className="md:hidden w-full mb-4">
                    <div className="w-24 h-8 bg-indigo-500 rounded-md flex items-center justify-center mx-auto">
                      <span className="text-white font-medium">2023</span>
                    </div>
                  </div>

                  {/* Year (desktop) */}
                  <div className="hidden md:flex w-1/2 items-center justify-center">
                    <div className="w-24 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-medium">2023</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 px-4 md:pr-8 md:pl-0">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                        <h2 className="text-xl font-bold text-indigo-600">Full Stack Web Developer</h2>
                      </div>
                      <p className="text-slate-600 font-medium mb-4">Freelance Developer</p>
                      <p className="text-slate-700">
                        Mengembangkan aplikasi web full-stack menggunakan React.js, Node.js, dan berbagai teknologi modern. Bertanggung jawab dalam merancang arsitektur aplikasi, mengimplementasikan fitur-fitur kompleks, dan memastikan performa optimal. Berhasil menyelesaikan berbagai proyek e-commerce, sistem manajemen, dan aplikasi web responsif dengan tingkat kepuasan klien yang tinggi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Year (mobile) */}
                  <div className="md:hidden w-full mb-4">
                    <div className="w-24 h-8 bg-purple-500 rounded-md flex items-center justify-center mx-auto">
                      <span className="text-white font-medium">2022</span>
                    </div>
                  </div>

                  {/* Year (desktop) */}
                  <div className="hidden md:flex w-1/2 items-center justify-center">
                    <div className="w-24 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-medium">2022</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 px-4 md:pl-8 md:pr-0">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <h2 className="text-xl font-bold text-purple-600">Frontend Developer</h2>
                      </div>
                      <p className="text-slate-600 font-medium mb-4">Web Development Agency</p>
                      <p className="text-slate-700">
                        Fokus pada pengembangan antarmuka pengguna yang responsif dan user-friendly menggunakan React.js, TypeScript, dan Tailwind CSS. Berkolaborasi dengan tim desain dan backend untuk menciptakan pengalaman pengguna yang optimal. Mengoptimalkan performa aplikasi dan memastikan kompatibilitas cross-browser yang baik.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:flex-row-reverse">
                  {/* Year (mobile) */}
                  <div className="md:hidden w-full mb-4">
                    <div className="w-24 h-8 bg-pink-500 rounded-md flex items-center justify-center mx-auto">
                      <span className="text-white font-medium">2021</span>
                    </div>
                  </div>

                  {/* Year (desktop) */}
                  <div className="hidden md:flex w-1/2 items-center justify-center">
                    <div className="w-24 h-8 bg-pink-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-medium">2021</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 px-4 md:pr-8 md:pl-0">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                        <h2 className="text-xl font-bold text-pink-600">Junior Web Developer</h2>
                      </div>
                      <p className="text-slate-600 font-medium mb-4">Startup Technology</p>
                      <p className="text-slate-700">
                        Memulai karir sebagai junior developer dengan fokus pada pengembangan website menggunakan HTML, CSS, JavaScript, dan PHP. Belajar dan mengimplementasikan konsep-konsep dasar web development, responsive design, dan best practices dalam coding. Berpartisipasi dalam pengembangan beberapa proyek internal dan landing page untuk klien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio Section */}
      <section
        id="portofolio"
        className="py-20 bg-gradient-to-br from-indigo-100 via-white to-purple-100 min-h-[60vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                Portfolio Proyek
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Beberapa proyek terbaik yang telah saya kembangkan dengan berbagai teknologi modern
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="E-commerce Website"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">E-commerce Platform</h2>
                  <p className="text-slate-600 mb-4">
                    Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">MongoDB</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Lihat Project</a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Task Management App"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">Task Management App</h2>
                  <p className="text-slate-600 mb-4">
                    Aplikasi manajemen tugas dengan fitur real-time collaboration, drag-and-drop, dan notifikasi.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Vue.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Express</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">Socket.io</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Lihat Project</a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Weather Dashboard"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">Weather Dashboard</h2>
                  <p className="text-slate-600 mb-4">
                    Dashboard cuaca interaktif dengan prediksi 7 hari, peta cuaca, dan integrasi API real-time.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">Chart.js</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Lihat Project</a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Social Media App"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">Social Media Platform</h2>
                  <p className="text-slate-600 mb-4">
                    Platform media sosial dengan fitur posting, komentar, like, dan sistem follow yang kompleks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">React Native</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Firebase</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">Redux</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Lihat Project</a>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Analytics Dashboard"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">Analytics Dashboard</h2>
                  <p className="text-slate-600 mb-4">
                    Dashboard analitik bisnis dengan visualisasi data interaktif dan laporan real-time.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Angular</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">D3.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Lihat Project</a>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Learning Platform"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">Learning Platform</h2>
                  <p className="text-slate-600 mb-4">
                    Platform pembelajaran online dengan video streaming, quiz interaktif, dan sistem sertifikasi.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Laravel</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Vue.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">MySQL</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">Demo</a>
                    <a href="#" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section
        id="testimonial"
        className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-100 min-h-[40vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                Testimoni Pelanggan
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Berikut beberapa testimoni dari klien yang telah bekerja sama dengan saya
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimoni 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar pelanggan 1"
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-indigo-200"
                />
                <p className="text-slate-700 italic mb-4">“Salman sangat profesional dan komunikatif. Proyek e-commerce kami selesai tepat waktu dan hasilnya sangat memuaskan!”</p>
                <div>
                  <span className="font-bold text-indigo-600">Andi Pratama</span>
                  <div className="text-slate-500 text-sm">Owner, TokoOnline.id</div>
                </div>
              </div>
              {/* Testimoni 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Avatar pelanggan 2"
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-purple-200"
                />
                <p className="text-slate-700 italic mb-4">“Sangat puas dengan dashboard analitik yang dibangun Salman. User interface-nya modern dan mudah digunakan.”</p>
                <div>
                  <span className="font-bold text-purple-600">Dewi Lestari</span>
                  <div className="text-slate-500 text-sm">CTO, DataInsight</div>
                </div>
              </div>
              {/* Testimoni 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 md:col-span-2">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Avatar pelanggan 3"
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-pink-200"
                />
                <p className="text-slate-700 italic mb-4">“Kerja sama dengan Salman sangat menyenangkan. Komunikasi jelas, hasil kerja rapi, dan selalu memberikan solusi terbaik.”</p>
                <div>
                  <span className="font-bold text-pink-600">Budi Santoso</span>
                  <div className="text-slate-500 text-sm">Project Manager, StartupInovasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-indigo-100 via-white to-purple-100 min-h-[60vh] border-t border-indigo-100 animate-fadeInUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                Hubungi Saya
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Ada pertanyaan atau ingin berkolaborasi? Silakan hubungi saya melalui form di bawah ini
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Informasi Kontak */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
                <p className="mb-8 text-indigo-100">
                  Silakan hubungi saya melalui form atau informasi di bawah ini.
                </p>

                <div className="space-y-6">
                  {/* Telepon */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">Telepon</p>
                      <p className="text-white font-semibold">+62 123 4567 890</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">Email</p>
                      <p className="text-white font-semibold">info@example.com</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">WhatsApp</p>
                      <p className="text-white font-semibold">+62 812 3456 7890</p>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline hover:text-indigo-200 transition-colors"
                      >
                        Kirim Pesan via WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Alamat */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">Alamat</p>
                      <p className="text-white font-semibold">Jl. Contoh No. 123, Kota, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="text-lg font-medium mb-3">Jam Operasional</h3>
                  <p className="text-sm text-indigo-100">Senin - Jumat: 09.00 - 17.00</p>
                  <p className="text-sm text-indigo-100">Sabtu: 09.00 - 14.00</p>
                </div>
              </div>

              {/* Form Kontak */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-indigo-600 mb-6">Kirim Pesan</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Masukkan alamat email Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor HP
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Masukkan nomor HP Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
