import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; import Category from './pages/Category'; import Article from './pages/Article'; import Search from './pages/Search'; import About from './pages/About'; import Contact from './pages/Contact'; import Animations from './pages/Animations'; import Arena from './pages/Arena';

export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/arena" element={<Arena/>}/><Route path="/category/:slug" element={<Category/>}/><Route path="/article/:id" element={<Article/>}/><Route path="/search" element={<Search/>}/><Route path="/animations" element={<Animations/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></Layout>}
