import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustomButton from './components/componentsButton'
import Facebook from './components/facebookcomponent'


function App() {
  return (
    <div className="App">
      <header className="">

       <div style={{backgroundColor: '#2f3640', height: '80px'}}>
         <br/>
         <p style={{color: 'white', fontSize: '30px'}}>REACT FACEBOOK APP</p>

       </div>

       <div style={{backgroundColor: '#c7c7c7', height: '800px'}}>

         <div style={{paddingLeft: '600px', paddingTop: '100px'}}>

        <div style={{backgroundColor: 'white', width: '300px', boxShadow: '0px 4px 4px 2px'}}>
          <Facebook text='Syed Hammad Ahmed' size = '100px' type= 'text' placeholder='write comment' class='form-control'/>


        </div>

        </div>

       </div>


     
      </header>


    </div>



  );
}

export default App;
