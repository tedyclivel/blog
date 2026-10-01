import { useParams } from 'react-router-dom';
import SEO from '../components/SEO'; import ArticleCard from '../components/ArticleCard'; import { articles } from '../data/articles';
const map={gaming:'Gaming',tech:'Tech',hardware:'Hardware',developpement:'Développement',cybersecurite:'Cybersécurité'};
export default function Category(){const {slug}=useParams(); const label=map[slug]||'Tech'; const items=articles.filter(a=>a.category===label); return <section className="page content-section"><SEO title={label}/><span className="eyebrow">CATÉGORIE</span><h1>{label}</h1><p className="lead">Sélection éditoriale NexusPlay autour de {label.toLowerCase()}.</p><div className="articles-grid">{(items.length?items:articles).map(a=><ArticleCard key={a.id} article={a}/>)}</div></section>}
