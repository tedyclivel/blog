import { Bell, ChevronDown, Gamepad2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import styles from '../Arena.module.css';

const links = ['Tournois', 'Jeux', 'Équipes', 'Classement', 'FAQ'];

export default function ArenaHeader() {
  const [open, setOpen] = useState(false);
  return <header className={styles.header}>
    <a className={styles.logo} href="#top" aria-label="NexusPlay Arena"><span><Gamepad2 size={18}/></span>NEXUS<em>PLAY</em></a>
    <nav className={styles.desktopNav}>{links.map((link) => <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</nav>
    <div className={styles.headerActions}>
      <button className={styles.connectButton}>Connecter mon compte</button>
      <button className={styles.iconButton} aria-label="Notifications"><Bell size={16}/><i/></button>
      <button className={styles.profileButton} aria-label="Menu du profil"><span>AM</span><b>Alex Morgan</b><ChevronDown size={14}/></button>
      <button className={styles.mobileMenu} onClick={() => setOpen((value) => !value)} aria-label="Ouvrir le menu">{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className={styles.mobileNav} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>{links.map((link) => <a onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</motion.nav>}</AnimatePresence>
  </header>;
}
