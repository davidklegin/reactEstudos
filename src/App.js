import Logo from './componentes/logo'
import './App.css';
import iconesHeader from './componentes/iconesHeader';
import OpcoesHeader from './componentes/OpcoesHeader';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>

        <Logo></Logo>

        <OpcoesHeader></OpcoesHeader>
          <iconesHeader></iconesHeader>
      </header>
    </div>
  );
}

export default App;
