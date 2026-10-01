import { useState } from 'react';
import { motion } from 'motion/react';
export default function Newsletter(){const [done,setDone]=useState(false);return <section className="newsletter"><div><span className="eyebrow">NEWSLETTER</span><h2>Une veille utile, pas du bruit.</h2><p>Un résumé hebdomadaire Tech, Gaming, Dev et Cyber.</p></div><form onSubmit={e=>{e.preventDefault();setDone(true)}}><input type="email" required placeholder="ton@email.com" aria-label="Adresse e-mail"/><motion.button whileTap={{scale:.95}}>{done?'Inscrit ✓':'S’abonner'}</motion.button></form></section>}
