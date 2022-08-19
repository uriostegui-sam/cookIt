import './App.css';
import BottomNav from './Nav/BottomNav';
import Content from './Content/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListeRecettes from './Content/ListeRecette';

function App() {
    return (
      <BrowserRouter>
        <div>
          <BottomNav active='home' />
          <Routes>
            <Route
              path='/'
              element={
                <Content title='Nos dernières recettes'>
                  <ListeRecettes />
                </Content>
              }
            />
            <Route
              path='/ajouter-une-recette'
              element={
                <Content title='Ajouter une recette'>
                  <p>coucou</p>
                </Content>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
