'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'MySQL Workbench', icon: './assets/icon/MySQL Workbench.png' },
    { name: 'Python', icon: './assets/icon/python-icon.svg' },
    { name: 'Microsoft Power BI', icon: './assets/icon/power-bi.svg' },
    { name: 'Microsoft Excel', icon: './assets/icon/microsoft excel.svg' },
    { name: 'Github', icon: './assets/icon/github.svg' },
    { name: 'Visual Studio Code', icon: './assets/icon/vs-code.svg' },
  ];

  const technicalSkills = [
    'Pengumpulan Data',
    'Data Pre-processing',
    'Analisis Data',
    'Visualisasi',
  ];

  const projects = [
    {
      title: 'HR Analytics Dashboard untuk Monitoring & Diagnosa Awal Atrisi Karyawan',
      image: './assets/image/HR Analytics Dashboard.png',
      link: 'https://github.com/dhikaramadhansaputra/Latihan_Power_BI/tree/master/Bikin%20dashboard/HR%20Analytics%20Dashboard',
      type: 'Github',
    },
    {
      title: 'Analisis Pasar untuk Industri Ritel di Indonesia',
      image: './assets/index/analisis pasar.png',
      link: 'https://github.com/dhikaramadhansaputra/Full_Project_Data_Analyst/tree/master/Analisis%20Pasar%20untuk%20Industri%20Ritel%20di%20Indonesia',
      type: 'Github',
    },
    {
      title: 'Visualisasi Tren Penerimaan Mahasiswa Baru UMP Tahun 2014-2024',
      image: './assets/image/Gambar portofolio website.jpg',
      link: 'https://github.com/dhikaramadhansaputra/Full_Project_Data_Analyst/tree/master/Tren%20Penerimaan%20MABA%20UMP%202014%20-%202024',
      type: 'Github',
    },
    {
      title: 'Pengaruh Faktor Sosial & Ekonomi Terhadap Klasifikasi Daerah Miskin di Indonesia',
      image: './assets/index/project 1.jpg',
      link: 'https://github.com/dhikaramadhansaputra/Full_Project_Data_Analyst/tree/master/Klasifikasi%20Tingkat%20Kemiskinan%20di%20Indonesia',
      type: 'Github',
    },
    {
      title: 'Visualisasi Sales & Customer Distribution',
      image: './assets/index/visualisasi-sales-and-customer-distribution.png',
      link: 'https://public.tableau.com/views/SalesCustomerDashboard_17432110871670/SalesDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      type: 'Tableau',
    },
    {
      title: 'Validasi Dataset Penjualan Video Games',
      image: './assets/index/Distribusi data (numerik) - cut.png',
      link: 'https://github.com/dhikaramadhansaputra/latihan_data_pre-processing/tree/master/Latihan%20validasi%20data',
      type: 'Github',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">DRS</h1>
          <div className="hidden md:flex gap-8">
            {['profile', 'about', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition capitalize text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="profile"
        className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0"
      >
        <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl hover:shadow-blue-500/50 transition-shadow">
              <img
                src="./assets/index/foto KP crop.jpg"
                alt="Dhika Ramadhan Saputra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <div>
              <p className="text-blue-400 font-semibold text-lg">Hallo, saya</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-2">
                Dhika Ramadhan <span className="text-blue-400">Saputra</span>
              </h1>
              <p className="text-2xl text-gray-300 mt-4">Data Analyst</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base"
              >
                <a href="https://raw.githubusercontent.com/dhikaramadhansaputra/CV-Resume/ca94b44de5724837eec326828aa6f66e1e5faf28/Februari%202026/(Feb%202026)%20CV%20Dhika%20Ramadhan%20Saputra.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 h-12 text-base"
              >
                Kontak Saya
              </Button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/dhikaramadhansaputra/',
                    '_blank'
                  )
                }
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() =>
                  window.open('https://github.com/dhikaramadhansaputra', '_blank')
                }
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-slate-800/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">Seputar Informasi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Tentang Saya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-shadow">
                <img
                  src="./assets/index/tentang 2.jpg"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="pt-6 text-center">
                    <img
                      src="./assets/index/experience.png"
                      alt="Experience"
                      className="w-12 h-12 mx-auto mb-3"
                    />
                    <h3 className="text-lg font-semibold text-white">Pengalaman</h3>
                    <p className="text-gray-300 text-sm mt-2">
                      Belajar mandiri sejak
                      <br />
                      September 2024
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="pt-6 text-center">
                    <img
                      src="./assets/index/education.png"
                      alt="Education"
                      className="w-12 h-12 mx-auto mb-3"
                    />
                    <h3 className="text-lg font-semibold text-white">Pendidikan</h3>
                    <p className="text-gray-300 text-sm mt-2">
                      Sedang menempuh
                      <br />
                      Teknik Informatika (S-1) UMP
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-300 leading-relaxed text-base">
                Saya adalah mahasiswa S-1 Teknik Informatika tahun ke-4 di UMP dengan minat di
                bidang Data Analyst. Sejak September 2024, saya secara mandiri mempelajari
                tentang data pipeline, mulai dari pengumpulan data, preprocessing, hingga
                visualisasi, serta mengerjakan beberapa project kecil sebagai portofolio. Di
                semester 6, saya mengambil peminatan mata kuliah bidang AI (Artificial
                Intelligence) guna menunjang bidang analisis data yang saya tekuni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="experience"
        className="py-20 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Kemampuan Saya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Alat Kerja</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="bg-slate-800 border-slate-700 hover:border-blue-600 transition hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                        />
                        <h4 className="text-white font-semibold text-sm text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Teknis</h3>
              <div className="space-y-3">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-600 transition hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <img
                      src="./assets/index/checkmark.png"
                      alt="Checkmark"
                      className="w-5 h-5"
                    />
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Proyek</h2>
            <p className="text-gray-400">Meliputi real project maupun dummy project</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-700 border-slate-600 overflow-hidden hover:border-blue-600 transition hover:shadow-xl hover:shadow-blue-600/20 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <h3 className="text-white font-semibold mb-4 line-clamp-3">
                    {project.title}
                  </h3>
                  <div className="mt-auto pt-4">
                    <Button
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {project.type}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">Ingin diskusi lebih lanjut ?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Kontak Saya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-600 transition hover:shadow-lg hover:shadow-blue-600/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:dhikaramadhansaputra@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      dhikaramadhansaputra
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-600 transition hover:shadow-lg hover:shadow-blue-600/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/dhikaramadhansaputra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Dhika Ramadhan Saputra
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>Copyright © 2025 Dhika Ramadhan Saputra. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
