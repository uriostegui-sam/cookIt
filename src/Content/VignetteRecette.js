import classes from '../Content/VignetteRecette.module.css'
import poulet from '../img/PouletSauceMoutarde.jpg'
import salade from '../img/saladeCaesar.jpeg'
import sushi from '../img/sushi.jpg'

export default function VignetteRecette({
  /* const imgs = [poulet, salade, sushi] */
  recette = {
    title: 'Poulet sauce moutarde',
    favorite: <i class="fas fa-heart"></i>,
    noFavorite: <i class="far fa-heart"></i>,
    prepTime: 20,
    note: <i class="fas fa-star"></i>,
    difficultyF: 'Facile',
    difficultyD: 'Difficile',
  }
  
}) {
  return(
    <div>
      <img className={classes.imgs} src={poulet} />
      <h1 className={`${classes.title} ${classes.all} ${classes.absolute} ${classes.top} ${classes.left}`}>{recette.title}</h1>
      <p className={`${classes.fav} ${classes.absolute} ${classes.top} ${classes.right}`}>{recette.favorite}</p>
      <p className={`${classes.prepTime} ${classes.all} ${classes.absolute} ${classes.right}`}>{recette.prepTime} min</p>
      <p className={`${classes.note}  ${classes.all} ${classes.absolute} ${classes.bottom} ${classes.right}`}>{recette.note}</p>
      <p className={`${classes.difficultyF}  ${classes.all} ${classes.absolute} ${classes.bottom} ${classes.left} ${classes.easy}`}>{recette.difficulty}</p>
    </div>
  )
  }