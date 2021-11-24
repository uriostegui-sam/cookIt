import classes from '../Content/Titre.module.css'

export default function Titre({
  title="Cook It",
}) {
  return (
    <h1 className={classes.titre}>
      {title}</h1>
  )
}