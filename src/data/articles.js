export const categories = ['Gaming','Tech','Hardware','Développement','Cybersécurité'];

const img = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const articles = [
  {id:'gaming-setup',title:'Le setup gaming 2026 : puissance, confort et sobriété',category:'Gaming',date:'12 sept. 2026',read:'7 min',image:img(1038916),excerpt:'Un guide concret pour composer un setup rapide, silencieux et cohérent sans tomber dans le RGB excessif.'},
  {id:'cyber-zero-trust',title:'Zero Trust : le modèle de sécurité à comprendre en 2026',category:'Cybersécurité',date:'11 sept. 2026',read:'8 min',image:img(5926393),excerpt:'Identité, moindre privilège, segmentation et observabilité : les bases expliquées sans jargon inutile.'},
  {id:'react-vite',title:'React + Vite : bâtir une interface rapide et maintenable',category:'Développement',date:'10 sept. 2026',read:'6 min',image:img(5483075),excerpt:'Architecture de composants, performance, accessibilité et bonnes pratiques pour un projet recruteur-ready.'},
  {id:'gaming-hardware',title:'GPU, écran, périphériques : où investir en priorité ?',category:'Hardware',date:'9 sept. 2026',read:'9 min',image:img(9072394),excerpt:'Un arbitrage pragmatique selon ton budget et ton usage : esport, AAA, création ou développement.'},
  {id:'ai-gaming',title:'IA et jeux vidéo : ce qui change vraiment pour les joueurs',category:'Tech',date:'8 sept. 2026',read:'5 min',image:img(28993064),excerpt:'PNJ, génération de contenu, upscaling et outils créatifs : les usages qui deviennent réellement utiles.'},
  {id:'secure-dev',title:'Développeur front : 10 réflexes cybersécurité à adopter',category:'Cybersécurité',date:'7 sept. 2026',read:'10 min',image:img(8720270),excerpt:'XSS, dépendances, secrets, CSP, formulaires et authentification : une checklist applicable à tes projets.'},
  {id:'code-dark',title:'Pourquoi les interfaces sombres restent fortes dans la tech',category:'Tech',date:'6 sept. 2026',read:'4 min',image:img(6424590),excerpt:'Contraste, hiérarchie, confort visuel et branding : comment utiliser un thème sombre avec discipline.'},
  {id:'portfolio-dev',title:'Ce qu’un recruteur regarde réellement dans un projet front',category:'Développement',date:'5 sept. 2026',read:'7 min',image:img(3861964),excerpt:'Structure, lisibilité du code, UX, performance, Git, documentation et qualité des décisions techniques.'}
];

export const featured = articles[0];
export const latest = articles.slice(1,5);

export const pexelsSources = [
  'https://www.pexels.com/photo/low-light-photography-of-computer-gaming-rig-set-1038916/',
  'https://www.pexels.com/photo/gaming-setup-for-competitive-esports-9072394/',
  'https://www.pexels.com/photo/crop-faceless-programmer-working-on-laptop-in-studio-5926393/',
  'https://www.pexels.com/photo/coding-on-a-laptop-5483075/'
];

export const pinterestInspiration = 'https://www.pinterest.com/search/pins/?q=dark%20gaming%20news%20website';
export const pexelsVideoSearch = 'https://www.pexels.com/search/videos/gaming/';
