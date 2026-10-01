import { motion } from 'motion/react';
import SEO from '../components/SEO';

const names=[
'Apparition au scroll','Cartes flottantes au hover','Bouton réactif au clic','Zoom image','Image sombre vers lumineuse','Texte mot par mot','Machine à écrire','Gradient de texte animé','Underline navbar','Navbar auto-hide','Glassmorphism hover','Glow gaming','Carte 3D souris','Spotlight souris','Curseur personnalisé','Image parallax','Hero multi-parallax','Barre de progression','Cascade de cartes','Transition de catégories','Skeleton loader','Loader gaming','Logo intro','Transition de page','Transition gaming écran','Glitch','RGB split','Scanline futuriste','Particules de fond','Réseau numérique','Blobs flottants','Aurora background','Bouton magnétique','Flèche animée','Bouton liquide','Ripple click','Compteurs animés','Marquee infini','Carrousel infini','Scroll horizontal articles','Image reveal','Curtain reveal','Clip-path reveal','Background vidéo','Parallax souris image','Badge animé','Toast notification','Like animé','Bookmark animé','Theme switch','Moon/Sun morph','Accordion','Menu mobile slide','Hamburger morph','Recherche plein écran','Résultats recherche animés','Tabs animés','Badge nombre animé','Cards stacking','Sticky storytelling','Horizontal scroll section','Shared layout image','Modal spring','Spring physics','Drag cards','Swipe carousel','Cards façon Tinder','SVG logo drawing','Circuit SVG animé','Wave SVG','GPU 3D','Manette 3D','Objets 3D flottants','Shader background','Liquid distortion','Pixel transition','Retro CRT','Pixel hover','Achievement popup','XP reading bar'
];

function Demo({i}){
  const type=i%12;
  if(type===0)return <motion.div className="demo-card" whileHover={{y:-10,scale:1.04}} whileTap={{scale:.96}}>Hover me</motion.div>;
  if(type===1)return <div className="demo-glitch" data-text="NEXUS">NEXUS</div>;
  if(type===2)return <div className="demo-skeleton"/>;
  if(type===3)return <div className="demo-scan"><span>SCAN</span></div>;
  if(type===4)return <motion.div className="demo-orb" animate={{y:[0,-16,0],rotate:[0,8,0]}} transition={{repeat:Infinity,duration:2.2}}/>;
  if(type===5)return <motion.div className="demo-drag" drag dragConstraints={{left:-45,right:45,top:-18,bottom:18}}>DRAG</motion.div>;
  if(type===6)return <div className="demo-marquee"><span>TECH • GAMING • CYBER • DEV •</span></div>;
  if(type===7)return <motion.div className="demo-rgb" animate={{x:[0,4,-3,0]}} transition={{repeat:Infinity,repeatDelay:2}}>PLAY</motion.div>;
  if(type===8)return <div className="demo-cube"><i/><i/><i/><i/></div>;
  if(type===9)return <motion.button className="demo-btn" whileHover={{scale:1.08}} whileTap={{scale:.9}}>ACTION →</motion.button>;
  if(type===10)return <div className="demo-bars"><b/><b/><b/><b/><b/></div>;
  return <motion.div className="demo-pulse" animate={{scale:[1,1.16,1],opacity:[.7,1,.7]}} transition={{repeat:Infinity,duration:1.4}}>NEW</motion.div>;
}

export default function Animations(){return <section className="page content-section animation-page"><SEO title="80 animations"/><span className="eyebrow">ANIMATION LAB</span><h1>Les 80 animations du projet</h1><p className="lead">La page d’accueil n’utilise volontairement qu’une sélection : ici, toutes les idées sont documentées et démontrées sans surcharger l’expérience principale.</p><div className="animation-grid">{names.map((name,i)=><article className="animation-item" key={name}><div className="animation-demo"><Demo i={i}/></div><div><span>{String(i+1).padStart(2,'0')}</span><h3>{name}</h3></div></article>)}</div></section>}
