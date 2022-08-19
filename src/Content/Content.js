import classes from '../Content/Content.module.css'
import ListeRecettes from './ListeRecette'

export default function Content ({ title, children}) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}