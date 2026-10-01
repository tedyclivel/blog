import { Menu, Search, X, Gamepad2 } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links=[['/','Accueil'],['/arena','Arena'],['/category/gaming','Gaming'],['/category/tech','Tech'],['/category/hardware','Hardware'],['/category/developpement','Dev'],['/category/cybersecurite','Cyber']];
export default function Header(){
  const [open,setOpen]=useState(false); const [visible,setVisible]=useState(true); const [last,setLast]=useState(0);
  useEffect(()=>{ const on=()=>{const y=window.scrollY;setVisible(y<last||y<90);setLast(y)};addEventListener('scroll',on,{passive:true});return()=>removeEventListener('scroll',on)},[last]);
  return <motion.header className="site-header" animate={{y:visible?0:-90}} transition={{duration:.25}}>
    <div className="header-inner">
      <Link to="/" className="brand"><span className="brand-mark"><Gamepad2 size={21}/></span><span>NEXUS<span>PLAY</span></span></Link>
      <nav className="desktop-nav">{links.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav>
      <div className="header-actions"><Link to="/search" aria-label="Rechercher"><Search size={20}/></Link><button className="menu-btn" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
    </div>
    <AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>{links.map(([to,label])=><Link key={to} to={to} onClick={()=>setOpen(false)}>{label}</Link>)}</motion.nav>}</AnimatePresence>
  </motion.header>
}
