'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  getHeroContent,
  getFocusAreas,
  getPrograms,
  getImpactStats,
  getGoverningBody,
  getDonationInfo,
  getFoundationInfo
} from '@/lib/content'

export default function HomePage() {
  // Force rebuild - Dynamic hero photos with real images
  const foundationInfo = getFoundationInfo()
  const heroContent = getHeroContent()
  const focusAreas = getFocusAreas()
  const programs = getPrograms()
  const impactStats = getImpactStats()
  const governingBody = getGoverningBody()
  const donationInfo = getDonationInfo()

  // Dynamic photo rotation (Gates Foundation style)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = heroContent.heroCard?.images || [{
    src: heroContent.heroCard?.image || "/media/logos/logo.jpg",
    title: heroContent.heroCard?.title || "Aklima Foundation",
    subtitle: heroContent.heroCard?.subtitle || "Making Impact",
    description: heroContent.heroCard?.description || "Community-driven initiatives",
    alt: "Community impact and transformation"
  }]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-4">
              <img
                src="/media/logos/logo.jpg"
                alt="Aklima Progressive Foundation Logo"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#mission" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Our Mission</a>
              <a href="#focus" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Our Work</a>
              <a href="#programs" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Programs</a>
              <a href="#impact" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Impact</a>
              <a href="#stories" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Stories</a>
              <a href="#governing-body" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">About</a>
              <a href="#donate" className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-emerald-200">Support Us</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-green-50">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {heroContent.badge && (
                  <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 font-semibold text-sm shadow-sm mb-6">
                    {heroContent.badge}
                  </div>
                )}

                {/* Gates Foundation Style Bold Statement */}
                <div className="text-2xl lg:text-3xl font-black text-emerald-700 mb-4 tracking-wide">
                  BUILDING DIGNITY, CREATING OPPORTUNITY
                </div>

                {heroContent.title && (
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-br from-gray-900 to-emerald-700 bg-clip-text text-transparent">
                    {heroContent.title}
                  </h1>
                )}

                {/* Gates Style Mission Statement */}
                <div className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8 leading-tight border-l-4 border-emerald-600 pl-6">
                  Our mission is to create communities where every person has access to education, healthcare, and the tools to build a dignified life.
                </div>

                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-6">
                  {heroContent.description}
                </p>

                {/* Impact Numbers - Gates Style */}
                <div className="grid grid-cols-3 gap-8 mt-8 p-6 bg-white/80 rounded-2xl shadow-lg border border-emerald-100">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-700">400</div>
                    <div className="text-sm font-semibold text-gray-600">School Bags Distributed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-700">6</div>
                    <div className="text-sm font-semibold text-gray-600">Mobility Devices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-700">2025</div>
                    <div className="text-sm font-semibold text-gray-600">Founded</div>
                  </div>
                </div>

                <p className="text-gray-600 font-medium mt-6">
                  <strong>{heroContent.founders}</strong>
                </p>
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Gates Foundation Style Hero Image with Dynamic Rotation */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex].src}
                      alt={heroImages[currentImageIndex].alt || "Community impact and transformation"}
                      className="w-full h-96 lg:h-[500px] object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>

                  {/* Gates-style overlay with dynamic content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="text-2xl font-bold mb-2">{heroImages[currentImageIndex].title}</div>
                        <div className="text-emerald-200 font-semibold mb-3">{heroImages[currentImageIndex].subtitle}</div>
                        <div className="text-sm text-gray-200 mb-4">{heroImages[currentImageIndex].description}</div>

                        {/* Impact stats overlay */}
                        <div className="flex gap-6 text-sm">
                          {(heroContent.heroCard?.stats || ["400 school bags distributed", "6 Tricycles for mobility support"]).map((stat, index) => (
                            <div key={index} className="text-emerald-300 font-semibold">
                              {stat}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Gates-style corner accent */}
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    Live Impact
                  </div>

                  {/* Photo indicators (Gates style) */}
                  <div className="absolute bottom-4 left-8 flex gap-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-emerald-400' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">See Our Impact</h2>
              <p className="text-xl text-gray-600">Real stories of transformation in our communities</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Road Infrastructure Video */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl mb-6 flex items-center justify-center border border-emerald-200">
                  <div className="text-center">
                    <div className="text-4xl text-emerald-600 mb-4">🛣️</div>
                    <div className="text-emerald-700 font-semibold mb-2">Road Infrastructure Video</div>
                    <div className="text-sm text-emerald-600">Upload: road-infrastructure-impact.mp4</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Better Roads, Building Better Lives</h3>
                <p className="text-gray-600 mb-4">
                  See the dramatic transformation of road infrastructure in Magrahat. From impassable conditions
                  to smooth pathways that connect communities and create opportunities.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📍 Magrahat, West Bengal</span>
                  <span>🏗️ Infrastructure Impact</span>
                </div>
              </motion.div>

              {/* Independence Day Video */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-50 rounded-2xl mb-6 flex items-center justify-center border border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🇮🇳</div>
                    <div className="text-blue-700 font-semibold mb-2">Independence Day Impact</div>
                    <div className="text-sm text-blue-600">Upload: independence-day-impact-2024.mp4</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Independence Day of Impact</h3>
                <p className="text-gray-600 mb-4">
                  Celebrating freedom by creating opportunities. Watch our Independence Day initiative that
                  distributed 400 school bags and 6 tricycles, transforming lives in our community.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📅 August 15, 2024</span>
                  <span>🎒 400 School Bags</span>
                  <span>🚲 6 Tricycles</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Upload Guide */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">📹 Ready to Upload Your Videos?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-emerald-700">
                <div>
                  <h4 className="font-semibold mb-2">Road Infrastructure Video:</h4>
                  <p className="text-sm">Upload to: <code className="bg-white px-2 py-1 rounded">/media/videos/road-infrastructure/</code></p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Independence Day Video:</h4>
                  <p className="text-sm">Upload to: <code className="bg-white px-2 py-1 rounded">/media/videos/independence-day-2025/</code></p>
                </div>
              </div>
              <div className="mt-4 text-sm text-emerald-600">
                💡 <strong>Tip:</strong> Videos will automatically appear here once uploaded and the website is updated!
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {foundationInfo.mission}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Where we work</h3>
                  <p className="text-gray-600 mb-4">{foundationInfo.workingAreas}</p>
                  <div className="text-emerald-700 font-semibold">
                    📍 Magrahat • Diamond Harbour • Kakdwip
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section id="focus" className="py-20 bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Focus Areas</h2>
              <p className="text-xl text-gray-600">Six priorities guide our grants and programs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center text-2xl text-emerald-700 mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Current Programs</h2>
              <p className="text-xl text-gray-600">Practical, high‑impact initiatives you can support today.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="h-36 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-2xl border border-gray-100 mb-6"></div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                    {program.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <a
                    href={program.link}
                    className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    {program.buttonText}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Impact at a Glance</h2>
              <p className="text-xl text-gray-600">Our achievements in supporting the community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 text-center shadow-lg border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl font-black text-emerald-700 mb-2 leading-none">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation Facts Section - Gates Foundation Style */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Foundation Facts</h2>
              <p className="text-xl text-emerald-100">Building impact in West Bengal since 2024</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-emerald-300 mb-4">400+</div>
                <div className="text-xl font-semibold text-emerald-100 mb-2">Students Supported</div>
                <div className="text-emerald-200">School bags and educational supplies distributed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-emerald-300 mb-4">6</div>
                <div className="text-xl font-semibold text-emerald-100 mb-2">Mobility Devices</div>
                <div className="text-emerald-200">Tricycles provided for independent mobility</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-emerald-300 mb-4">3</div>
                <div className="text-xl font-semibold text-emerald-100 mb-2">Districts Served</div>
                <div className="text-emerald-200">Magrahat, Diamond Harbour, Kakdwip</div>
              </motion.div>
            </div>

            {/* Story Feature - Gates Style */}
            <div className="bg-gradient-to-r from-emerald-800/50 to-green-800/50 rounded-3xl p-12 border border-emerald-700">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-emerald-300 font-semibold mb-4">STORIES OF IMPACT</div>
                  <h3 className="text-3xl font-bold mb-6">From School Bags to Dreams: How Education Changes Everything</h3>
                  <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                    "My daughter can now attend school with dignity and pride," says Ruma Begum from Magrahat Village.
                    The school bag she received wasn't just supplies—it was hope, opportunity, and a pathway to a better future.
                  </p>
                  <div className="text-emerald-300 font-semibold">
                    Independence Day Initiative • August 15, 2024
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-emerald-600">
                  <div className="text-center">
                    <div className="text-4xl text-emerald-300 mb-4">🎒</div>
                    <div className="text-emerald-200 font-semibold">Beneficiary Story Video</div>
                    <div className="text-sm text-emerald-300">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Body Section */}
        <section id="governing-body" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Governing Body</h2>
              <p className="text-xl text-gray-600">Leadership committed to transparency and community impact.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governingBody.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 font-semibold text-lg text-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {member}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{donationInfo.title}</h2>
              <p className="text-xl text-gray-600">{donationInfo.description}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{donationInfo.howToDonate.title}</h3>
                <p className="text-gray-600 mb-8">{donationInfo.howToDonate.description}</p>
                <a
                  href={`mailto:${donationInfo.howToDonate.email}`}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  {donationInfo.howToDonate.buttonText}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-lg border border-emerald-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{donationInfo.donationImpact.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {donationInfo.donationImpact.amounts.map((amount, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      {amount}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-8 items-center justify-between mb-8">
            <div>
              <div className="font-semibold text-gray-900 mb-2">Contact Information</div>
              <div className="text-gray-600">{foundationInfo.contact.address}</div>
              <div className="text-gray-600">Email: {foundationInfo.contact.email}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2">Quick Links</div>
              <div className="flex gap-4 flex-wrap">
                <a href="#mission" className="text-gray-600 hover:text-emerald-700 transition-colors">Mission</a>
                <a href="#programs" className="text-gray-600 hover:text-emerald-700 transition-colors">Programs</a>
                <a href="#donate" className="text-gray-600 hover:text-emerald-700 transition-colors">Donate</a>
                <a href="#governing-body" className="text-gray-600 hover:text-emerald-700 transition-colors">Governing Body</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
            © {new Date().getFullYear()} Aklima Progressive Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
