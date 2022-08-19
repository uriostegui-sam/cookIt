import classes from '../Content/VignetteRecette.module.css'
import poulet from '../img/PouletSauceMoutarde.jpg'
import salade from '../img/saladeCaesar.jpeg'
import sushi from '../img/sushi.jpg'

export default function VignetteRecette2({
  /* const imgs = [poulet, salade, sushi] */
    title,
    liked,
    duration,
    stars,
    level,
    image,
  }) {
  return(
    <div className={classes.recipeThumb}>
      <div className={classes.backgroundImage}>
        <img src={image} />
      </div>
      <div className={classes.firstLine}>
        <p className={classes.title}>{title}</p>
        <p className={classes.liked}>
        {liked ? (
          <i class="fas fa-heart"></i>
        ):(
          <i class="far fa-heart"></i>
        )}
        </p>
      </div>
      <div className={classes.secondLine}>
        <p className={classes.duration}>{duration}</p>
      </div>
      <div className={classes.thirdLine}>
        <p className={
            classes.level +
            ' ' +
            (level === 'Facile'
              ? classes.easy
              : level === 'Moyen'
              ? classes.medium
              : classes.hard)
          }
        >
          {level}</p>
        <p className={classes.stars}>
          {Array(stars)
            .fill(null)
            .map((value, index) => (
              <i key={`star-${index}`} className='fas fa-star'></i>
          ))}
          </p>
      </div>
    </div>

  )
  }