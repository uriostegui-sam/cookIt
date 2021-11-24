import logo from './logo.svg';
import './App.css';
import BottomNav from './BottomNav/BottomNav';
import Titre from './Content/Titre';
import VignetteRecette from './Content/VignetteRecette';

function App() {
  return (
    <body>

    <div className="container">
      <Titre title='Nos dernières recettes'/>
      <VignetteRecette />
    </div>
    <div>
      <BottomNav />
    </div>
    </body>
  );
}

export default App;
