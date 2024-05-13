import './App.css';
import logo from '../capital.png'
import Header from './Header'
import AppContent from './AppContent';

function App(){
  return(
    <div>
      <Header pageTitle="FinCap Services" logoSrc={logo}></Header>
      <div className='container-fluid'> 
        <div className='row'>
          <div className='col'>
            <AppContent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;