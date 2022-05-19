import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,Route
} from 'react-router-dom'

import Header from './components/header';
import Main from './views/main';
import Content from './views/contenido'
import Staff from './views/staff';
import Instalaciones from './views/instalaciones';
import Notas from './views/notas';
import Colabora from './views/colabora';




function App() {
  return (
    <Router>
      <Header></Header>

      <Route path="/" exact component={Main} />
      <Route path="/contenido"  component={Content} />
      <Route path="/staff"  component={Staff} />
      <Route path="/instalaciones"  component={Instalaciones} />
      <Route path="/colabora"  component={Colabora} />
      <Route path="/notas"  component={Notas} />


    </Router>
  )
}

export default App;
