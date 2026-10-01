import { Trophy } from 'lucide-react';
import styles from '../Arena.module.css';

export default function WinnersPanel({ winners }) {
  return <aside className={styles.winnersPanel}><div className={styles.winnersTitle}><span><i/> Last winners</span><Trophy size={15}/></div>{winners.map((winner) => <div className={styles.winner} key={winner.id}><span className={`${styles.winnerAvatar} ${styles[winner.tone]}`}>{winner.name.charAt(0)}</span><p><strong>{winner.name}</strong><small>{winner.event}</small></p><em>{winner.gain}</em></div>)}</aside>;
}
