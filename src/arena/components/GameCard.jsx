import { CircleDollarSign, Users } from 'lucide-react';
import { motion } from 'motion/react';
import styles from '../Arena.module.css';

export default function GameCard({ game, position, onSelect }) {
  const className = position === 0 ? styles.cardActive : position < 0 ? styles.cardLeft : styles.cardRight;
  return <motion.article layout className={`${styles.gameCard} ${className}`} onClick={onSelect} whileHover={{ y: position === 0 ? -18 : -8 }} transition={{ type: 'spring', stiffness: 220, damping: 22 }} tabIndex="0" role="button" onKeyDown={(event) => event.key === 'Enter' && onSelect()}><img src={game.image} alt={`Illustration ${game.title}`} loading="lazy"/><div className={styles.gameOverlay}/><div className={styles.gameInfo}><span className={styles.playing}>● Playing</span><time>{game.date}</time><h3>{game.title}</h3><p><span><Users size={11}/>{game.players}</span><span><CircleDollarSign size={11}/>{game.price}</span></p></div></motion.article>;
}
