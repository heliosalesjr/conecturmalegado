'use client'
import BgTest from './components/BgTest'
import Creditos from './components/Creditos'

import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'

import Jogo from './components/Jogo'
import NavNextUI from './components/NavNextUI'

import NewHero from './components/NewHero'
import VideosCNT from './components/Videos'

export default function Home() {
  return (
    <>
      <NavNextUI />
      <NewHero />
      <FeatureSection />
      <Jogo />
      <VideosCNT />
      <Creditos />
      <Footer />
    </>
  )
}
