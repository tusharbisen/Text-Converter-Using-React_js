
import './App.css';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';

 

function App() {
  return (
  
    <>
   <Navbar title="Text Converter" />
   <div className="container my-3 ">
   <TextForm heading="Enter Your Text"/>
   </div>
   
    
   
   </> 
       
  );
}

export default App;
