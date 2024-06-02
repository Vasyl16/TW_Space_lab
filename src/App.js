import { Header } from './components/Header/Header.jsx';
import { Colections } from './components/Colections/Colections.jsx';
import { NewStuff } from './components/NewStuff/NewStuff.jsx';

import './App.scss';
import { UsefulInfo } from './components/UsefulInfo/UsefulInfo.jsx';
import { Partners } from './components/Partners/Partners.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { MainBlock } from './components/MainBlock/MainBlock.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainBlock />
      <Colections />
      <NewStuff />
      <UsefulInfo />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
