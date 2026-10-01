import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import styles from '../Arena.module.css';

export default function HeroContent() {
  return <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12 } } }}><motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>PLAY <b>•</b> COMPETE <b>•</b> DISCOVER</motion.p><motion.h1 variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }}>ENTER THE<br/><em>NEXT LEVEL</em><br/>OF PLAY</motion.h1><motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} href="#games" className={styles.playButton}>Explorer l’arène <ArrowRight size={15}/></motion.a></motion.div>;
}
