import s from './Navbar.module.css'
import { Link, Outlet  } from 'react-router-dom';




function Navbar () {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <Link to='/'>Основная информация</Link>
        </div>
        <div className={s.item}>
          <Link to='/history'>История</Link>
        </div>
        <div className={s.item}>
          <Link to='/projectAnimation'>Квиз</Link>
        </div>
        <div className={s.item}>
          <Link to='/psychology'>Психология</Link>
        </div>
        
        <Outlet/>
      </nav>
    )
};


export default Navbar;