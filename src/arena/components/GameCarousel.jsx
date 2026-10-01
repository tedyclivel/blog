import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import GameCard from './GameCard';
import styles from '../Arena.module.css';

export default function GameCarousel({ games }) {
  const [active, setActive] = useState(3);
  const visible = useMemo(() => [-3, -2, -1, 0, 1, 2, 3].map((offset) => ({ offset, game: games[(active + offset + games.length) % games.length] })), [active, games]);
  const move = (direction) => setActive((value) => (value + direction + games.length) % games.length);
  return <motion.section className={styles.carousel} id="games" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .55 }}><button className={styles.carouselControl} onClick={() => move(-1)} aria-label="Jeu précédent"><ChevronLeft/></button><motion.div className={styles.carouselTrack} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={.08} onDragEnd={(_, info) => { if (info.offset.x > 50) move(-1); if (info.offset.x < -50) move(1); }} whileTap={{ cursor: 'grabbing' }}>{visible.map(({ game, offset }) => <GameCard game={game} position={offset} onSelect={() => setActive(games.indexOf(game))} key={`${game.id}-${offset}`}/>)}</motion.div><button className={`${styles.carouselControl} ${styles.carouselNext}`} onClick={() => move(1)} aria-label="Jeu suivant"><ChevronRight/></button></motion.section>;
}
