import Header from './Header'; import Footer from './Footer'; import ScrollProgress from './ScrollProgress';
import { useLocation } from 'react-router-dom';
export default function Layout({children}){const { pathname }=useLocation();const isArena=pathname==='/arena';return <>{!isArena&&<ScrollProgress/>}{!isArena&&<Header/>}<main className={isArena?'arena-page-main':''}>{children}</main>{!isArena&&<Footer/>}</>}
