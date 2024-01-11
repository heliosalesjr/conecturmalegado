'use client'

import Creditos from './components/Creditos'

import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import Hero3 from './components/Hero3'

import Jogo from './components/Jogo'
import NavNextUI from './components/NavNextUI'

import VideosCNT from './components/Videos'

export default function Home() {
  return (
    <>
      <NavNextUI />
      <Hero3 />
      
      <FeatureSection />
      <Jogo />
      <VideosCNT />
      <Creditos />
      <Footer />
    </>
  )
}
