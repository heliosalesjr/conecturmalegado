'use client'
import BgTest from './components/BgTest'
import Hero from './components/Hero'
import Jogo from './components/Jogo'
import NavNextUI from './components/NavNextUI'
import Navbar from './components/Navbar'
import VideosCNT from './components/Videos'

export default function Home() {
  return (
    <>
      <NavNextUI />
      
      <Hero />
      <VideosCNT />
      <Jogo />
    </>
  )
}
