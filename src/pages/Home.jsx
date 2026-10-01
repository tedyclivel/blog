import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Shield, Cpu, Gamepad2, Code2, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';
import { articles, categories, featured, latest, pexelsVideoSearch } from '../data/articles';

const iconMap={Gaming:Gamepad2,Tech:Cpu,Hardware:Cpu,'Développement':Code2,'Cybersécurité':Shield};

export default function Home(){
  const [filter,setFilter]=useState('Tous');
  const filtered=useMemo(()=>filter==='Tous'?articles:articles.filter(a=>a.category===filter),[filter]);
  return <>
    <SEO title="Accueil" description="NexusPlay : magazine moderne Tech, Gaming, Hardware, Développement et Cybersécurité." image={featured.image}/>
    <section className="magazine-layout">
      <div className="magazine-main">
        <section className="hero-feature">
          <img src={featured.image} alt="Setup gaming sombre"/>
          <div className="hero-overlay"><span className="tag">{featured.category}</span><h1>GAMING<br/><small>WORLD CLASS <em>NEWS</em></small></h1><Link to={`/article/${featured.id}`}>{featured.title} <ArrowRight size={16}/></Link></div>
        </section>
        <section className="headline-strip"><span><Radio size={14}/> NEWS UPDATE</span><p>Les meilleurs sujets gaming, tech et cybersécurité, sélectionnés pour vous.</p><div>● ● ●</div></section>
        <section className="featured-row">{articles.slice(1,4).map(a=><ArticleCard key={a.id} article={a}/>)}</section>
        <section className="magazine-section trend-section"><div className="section-title"><h2>Trending news</h2><Link to="/search">Tout voir <ArrowRight size={15}/></Link></div><div className="trend-body"><ArticleCard article={articles[4]}/><div className="compact-list">{latest.slice(0,3).map(a=><ArticleCard key={a.id} article={a} compact/>)}</div></div></section>
        <section className="promo-banner"><strong>NEXUSPLAY</strong><span>Le magazine tech & gaming qui va droit au but.</span><Link to="/about">Découvrir</Link></section>
        <section className="magazine-section"><div className="section-title"><h2>World news</h2></div><div className="featured-row">{articles.slice(5,8).map(a=><ArticleCard key={a.id} article={a}/>)}</div></section>
      </div>
      <aside className="magazine-side">
        <section className="side-section"><div className="section-title"><h2>World news</h2></div><div className="side-feature"><ArticleCard article={articles[3]}/>{latest.slice(0,3).map(a=><ArticleCard key={a.id} article={a} compact/>)}</div></section>
        <section className="side-section live-box"><div className="section-title"><h2>Live streaming</h2></div><img src={articles[4].image} alt="Gaming et technologie"/><div><span className="tag">En direct</span><h2>La tech et le gaming ne s’arrêtent jamais.</h2><a href={pexelsVideoSearch} target="_blank" rel="noreferrer"><Play size={16}/> Voir les vidéos</a></div></section>
        <section className="side-section"><div className="section-title"><h2>Latest news</h2></div>{articles.slice(0,5).map(a=><ArticleCard key={a.id} article={a} compact/>)}</section>
      </aside>
    </section>
    <section className="content-section category-section"><div className="section-title"><h2>Explorer</h2><div className="filters">{['Tous',...categories].map(c=><button className={filter===c?'active':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></div><div className="category-grid">{categories.map(c=>{const Icon=iconMap[c];return <Link key={c} to={`/category/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} className="category-card"><Icon/><strong>{c}</strong><ArrowRight className="cat-arrow"/></Link>})}</div><motion.div layout className="articles-grid">{filtered.map(a=><ArticleCard key={a.id} article={a}/>)}</motion.div></section>
    <Newsletter/>
  </>;
}
