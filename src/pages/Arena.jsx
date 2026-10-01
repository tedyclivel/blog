import SEO from '../components/SEO';
import { ArenaHeader, ActivePlayers, GameCarousel, HeroCharacter, HeroContent, WinnersPanel } from '../arena';
import { games } from '../arena/data/games';
import { activePlayers, winners } from '../arena/data/players';
import { useMouseParallax } from '../arena/hooks/useMouseParallax';
import styles from '../arena/Arena.module.css';

export default function Arena() {
  const parallaxRef = useMouseParallax(12);
  return <><SEO title="Nexus Arena" description="Une arène premium pour jouer, concourir et découvrir." image={games[0].image}/><section className={styles.page} ref={parallaxRef} id="top"><div className={styles.shell}><ArenaHeader/><main className={styles.hero}><div className={styles.grid}/><div className={styles.orangeBeam}/><HeroContent/><HeroCharacter image={games[3].image}/><WinnersPanel winners={winners}/><ActivePlayers players={activePlayers}/><span className={styles.star} aria-hidden="true"/><span className={styles.medal} aria-hidden="true">★</span></main><GameCarousel games={games}/></div></section></>;
}
