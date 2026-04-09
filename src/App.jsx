import styles from './css/App.module.css';
import { useState, useEffect, useRef } from 'react';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Scroll from './components/Scroll.jsx';
import { useGSAP } from '@gsap/react';

function App() {

  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 ? setIsMobile(false) : setIsMobile(true)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => removeEventListener('resize', handleResize)
  }, [])


  return (
    <div className={styles.wrapper}>

      {isOpen && <Drawer setIsOpen={setIsOpen} />}
      <Navigation isMobile={isMobile} setIsOpen={setIsOpen} isOpen={isOpen} />
      <Hero />
      <Scroll/>
      <Projects/>
      <Scroll/>
      <About/>

      <footer id='socials'>
        <h1>Clark.</h1>
        <div className={styles.framework}>
          <p>Made with</p>
          <img src="/svg/react.svg" alt="" />
          <p>2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App