import styles from './css/App.module.css';
import {useState, useEffect} from 'react';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Hero from './components/Hero.jsx';


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


  return(
    <div className={styles.wrapper}>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navigation isMobile={isMobile} setIsOpen={setIsOpen} isOpen={isOpen}/> 
      <Hero/>

      
      <section className={styles.aboutSection} id='about'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas maxime vitae illum impedit blanditiis dolore quo reprehenderit vero. Nihil voluptas atque fugit animi fugiat sequi mollitia excepturi, voluptatem quos.</p>
      </section>

      <section className={styles.projectSection} id='project'>
        <h1>My Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad deserunt, expedita quia distinctio soluta obcaecati, natus commodi delectus dignissimos maxime aspernatur. Illo officia, magni exercitationem non quia recusandae hic?</p>
      </section>

      <footer id='contact'>
        <h1>Footer</h1>
        <p>Made with React</p>
      </footer>
    </div>
  )
}

export default App