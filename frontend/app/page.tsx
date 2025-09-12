'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
  const foundationInfo = getFoundationInfo()
  const heroContent = getHeroContent()
  const focusAreas = getFocusAreas()
  const programs = getPrograms()
  const impactStats = getImpactStats()
  const governingBody = getGoverningBody()
  const donationInfo = getDonationInfo()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                ❤
              </div>
              <div>
                <div className="text-xl font-black text-gray-900">Aklima Progressive</div>
                <div className="text-xs tracking-wider text-gray-600 uppercase font-semibold">Foundation</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#mission" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Mission</a>
              <a href="#focus" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Focus</a>
              <a href="#programs" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Programs</a>
              <a href="#impact" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Impact</a>
              <a href="#governing-body" className="text-gray-600 hover:text-emerald-700 font-medium transition-all hover:bg-emerald-50 px-4 py-2 rounded-lg">Governing Body</a>
              <a href="#donate" className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-emerald-200">Donate</a>
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
                <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 font-semibold text-sm shadow-sm mb-6">
                  {heroContent.badge}
                </div>
                <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-br from-gray-900 to-emerald-700 bg-clip-text text-transparent">
                  {heroContent.title}
                </h1>
                <div className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-6 leading-tight">
                  {heroContent.subtitle}
                </div>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-4">
                  {heroContent.description}
                </p>
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
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 text-center shadow-xl border border-emerald-100">
                  <img 
                    src={heroContent.heroCard.image} 
                    alt={heroContent.heroCard.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-lg mb-6 hover:scale-105 transition-transform"
                  />
                  <div className="text-xl font-bold text-emerald-700 mb-4">{heroContent.heroCard.title}</div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="text-2xl text-emerald-700">❤</div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 mb-1">{heroContent.heroCard.subtitle}</div>
                      <div className="text-gray-600 text-sm mb-3">{heroContent.heroCard.description}</div>
                      {heroContent.heroCard.stats.map((stat, index) => (
                        <div key={index} className={`${index === 0 ? 'font-bold text-emerald-700' : 'text-gray-600'} text-sm`}>
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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
