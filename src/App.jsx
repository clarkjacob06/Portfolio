import styles from './css/App.module.css';
import { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

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
      <Projects/>
      <About/>

      <footer id='socials'>
        <h1>Footer</h1>
        <p>Made with React</p>
      </footer>
    </div>
  )
}

export default App