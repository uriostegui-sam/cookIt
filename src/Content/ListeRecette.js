import classes from '../Content/ListeRecette.module.css'
import VignetteRecette from './VignetteRecette'



export default function ListeRecettes() {
  return (
    <div className={classes.recipeList}>
      <VignetteRecette
        title= 'Poulet sauce moutarde'
        liked= {true}
        duration= '20 min'
        stars= {5}
        image='https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/PouletSauceMoutarde.jpg?alt=media&token=d179cdf9-3ea0-4798-8314-96afa54968bb'
        level='Facile'
      />
      <VignetteRecette
        title= 'Sushis et Makis'
        liked= {false}
        duration= '1h30 min'
        stars= {4}
        image='https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/Suhis.jpg?alt=media&token=07109fee-00af-4d9a-a816-a35d6736e306'
        level='Difficile'
      />
      <VignetteRecette
        title= 'Salade Caesar'
        liked= {true}
        duration= '15 min'
        stars= {4}
        image='https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/salade-caesar.jpeg?alt=media&token=e9b83d09-63a1-49d9-92ea-7c9e9c61b20c'
        level='Facile'      
      />

    </div>
  )
}