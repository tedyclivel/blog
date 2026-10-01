import { Helmet } from 'react-helmet-async';

export default function SEO({title='NexusPlay', description='Blog Tech, Gaming, Hardware, Développement et Cybersécurité.', image}) {
  const full = `${title} | NexusPlay`;
  return <Helmet>
    <title>{full}</title>
    <meta name="description" content={description}/>
    <meta property="og:title" content={full}/>
    <meta property="og:description" content={description}/>
    <meta property="og:type" content="website"/>
    {image && <meta property="og:image" content={image}/>} 
    <meta name="twitter:card" content="summary_large_image"/>
  </Helmet>;
}
