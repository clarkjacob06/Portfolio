import styles from './css/App.module.css';

function App() {
  return(
    <div className={styles.wrapper}>
      <nav>
        <div className={styles.navContainer}>
          <a href="#hero">Home</a>
          <a href="#project">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.heroSection} id='hero'>
        <h1>Hero Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis, commodi perferendis, obcaecati voluptates iste magnam minima a nihil, sapiente voluptate qui itaque! Aspernatur, soluta. Quia consectetur quos voluptate eveniet.</p>
      </section>

      <section className={styles.projectSection} id='project'>
        <h1>My Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad deserunt, expedita quia distinctio soluta obcaecati, natus commodi delectus dignissimos maxime aspernatur. Illo officia, magni exercitationem non quia recusandae hic?</p>
      </section>

      <section className={styles.aboutSection} id='about'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas maxime vitae illum impedit blanditiis dolore quo reprehenderit vero. Nihil voluptas atque fugit animi fugiat sequi mollitia excepturi, voluptatem quos.</p>
      </section>

      <footer id='contact'>
        <h1>Footer</h1>
        <p>Made with React</p>
      </footer>
    </div>
  )
}

export default App