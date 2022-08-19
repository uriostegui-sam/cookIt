import classes from '../Nav/BottomNav.module.css';
import { Link } from 'react-router-dom'


export default function BottomNav({ active = 'home' }) {
  return(
    <nav className={classes.nav}>
      <ul className={classes.menu}> 
        <li className={`${classes.item} ${active === 'home' ? classes.active : null}`}>
          <Link to='/'>
            <i class='fas fa-home'></i>
          </Link>
        </li>

        <li className={`${classes.item} ${active === 'plus' ? classes.active : null}`}>
          <Link to='/ajouter-une-recette'>
            <i class='fas fa-plus-square'></i>        
          </Link>
        </li>

        <li className={classes.item}>
          <a href='#'>
            <img className={classes.logo} src='https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/logo.svg?alt=media&token=527ed63f-6436-48e4-bfe9-640d019023b4'></img>
          </a>
        </li>

        <li className={`${classes.item} ${active === 'heart' ? classes.active : null}`}>
          <a href='#'>
            <i class='fas fa-heart'></i>           
          </a>
        </li>

        <li
          className={`${classes.item} ${active === 'user' ? classes.active : null}`}>
          <a href='#'>
            <i class='fas fa-user'></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}