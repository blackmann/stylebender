import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import DownloadModal from './DownloadModal'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'
import clsx from 'clsx'
import currentModal from '../current-modal'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'preact/hooks';

function Navbar() {
  function toggleDownloadModal() {
    currentModal.value = currentModal.value !== 'download' ? 'download' : null
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 0;
      setIsSticky(shouldStick);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <a href="/">
        <Logo />
      </a>

      <div className="position-relative" style={{ zIndex: '100' }}>
        <ThemeSwitch />
        <Button className="plain" onClick={toggleDownloadModal}>
          <span className="material-symbols-outlined me-1">download</span>{' '}
          Download stylesheet
        </Button>

        <div className={clsx(styles.downloadModalContainer, 'me-5')}>
          <AnimatePresence>
            {currentModal.value === 'download' && (
              <motion.div
                animate={{ translateY: 10 }}
                exit={{
                  translateX: 80,
                  opacity: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <DownloadModal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Navbar
