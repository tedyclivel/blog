import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, MessageCircle } from 'lucide-react';

export default function ArticleCard({article,compact=false}){
  return <motion.article layout className={`article-card ${compact?'compact':''}`} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.45}} whileHover={{y:-7}}>
    <Link to={`/article/${article.id}`} className="card-media"><img src={article.image} alt="" loading="lazy"/><span className="tag">{article.category}</span></Link>
    <div className="card-body"><h3><Link to={`/article/${article.id}`}>{article.title}</Link></h3>{!compact&&<p>{article.excerpt}</p>}<div className="meta"><span><Clock size={14}/>{article.read}</span><span><MessageCircle size={14}/>12</span></div></div>
  </motion.article>
}
