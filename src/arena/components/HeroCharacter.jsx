import { motion } from 'motion/react';
import styles from '../Arena.module.css';

export default function HeroCharacter({ image }) {
  return <motion.div className={styles.character} initial={{ opacity: 0, scale: .9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .7, ease: 'easeOut' }}><div className={styles.characterHalo}/><img src={image} alt="Joueur dans un univers numérique"/><span className={styles.characterScan}/></motion.div>;
}
