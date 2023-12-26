'use client'
import Hero from './components/Hero'
import Jogo from './components/Jogo'
import Navbar from './components/NavBar'
import VideosCNT from './components/Videos'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <VideosCNT />
      <Jogo />
    </>
  )
}
