import classes from '../BottomNav/BottomNav.module.css';


export default function BottomNav({
}) {
  return(
    <nav className={classes.nav}>
      <ul className={classes.menu}> 
      <li className={`${classes.item} ${classes.active}`}>
        <a href='#'>
          <i class='fas fa-home'></i>
          </a>
        </li>
        <li className={classes.item}>
        <a href='#'>
          <i class='fas fa-plus-square'></i>        
          </a>
        </li>
        <li className={classes.item}>
          <a href='#'>
            <img className={classes.logo} src='https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/logo.svg?alt=media&token=527ed63f-6436-48e4-bfe9-640d019023b4'></img>
          </a>
        </li>
        <li className={classes.item}>
          <a href='#'>
            <i class='fas fa-heart'></i>           
          </a>
        </li>
        <li className={classes.item}>
          <a href='#'>
            <i class='fas fa-user'></i>
          </a>
        </li>

       

         
      </ul>
    </nav>
  )
}