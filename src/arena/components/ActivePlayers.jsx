import styles from '../Arena.module.css';

export default function ActivePlayers({ players }) {
  return <div className={styles.activePlayers}><div className={styles.avatarStack}>{players.map((player) => <span className={`${styles.avatar} ${styles[player.tone]}`} key={player.id}>{player.initials}</span>)}<span className={styles.moreAvatar}>99+</span></div><p><i/> Joueurs actifs</p></div>;
}
