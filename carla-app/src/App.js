import './App.css';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Itemlistcontainer from './components/Itemlistcontainer';
import NavBar from './components/NavBar';
import Quienessomos from './components/Quienessomos';
import imagen from './components/images/fondo.png'

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
     <NavBar/>
     <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
      </div> 
     <Itemlistcontainer greeting="Bienvenidas" />
     <Contacto/>
     <Quienessomos/>
     <Footer/>

    </div>
  );
}

export default App;
