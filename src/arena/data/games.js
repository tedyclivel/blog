const image = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const games = [
  { id: 'neon-ops', title: 'Neon Ops', image: image(1038916), price: '49,97 €', players: 75, date: '18 OCT. · 20:00', type: 'Tournoi' },
  { id: 'cipher-run', title: 'Cipher Run', image: image(5926393), price: 'Entrée libre', players: 42, date: '24 OCT. · 18:30', type: 'CTF' },
  { id: 'build-night', title: 'Build Night', image: image(5483075), price: '6 talks', players: 86, date: '29 OCT. · 19:00', type: 'Tech' },
  { id: 'pixel-rivals', title: 'Pixel Rivals', image: image(9072394), price: '300 €', players: 64, date: '02 NOV. · 16:00', type: 'Tournoi' },
  { id: 'zero-day', title: 'Zero Day Sprint', image: image(8720270), price: '48 h', players: 30, date: '08 NOV. · 14:00', type: 'CTF' },
  { id: 'ai-lab', title: 'AI Product Lab', image: image(28993064), price: 'Ateliers', players: 100, date: '12 NOV. · 18:00', type: 'Tech' },
  { id: 'code-clash', title: 'Code Clash', image: image(6424590), price: '150 €', players: 48, date: '16 NOV. · 15:00', type: 'Tournoi' }
];
