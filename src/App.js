import { useRef , useState} from 'react';
import './App.css';
import ContactModal from './components/contactModal';
import Footer from './components/footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const toggleClose = (visibleModal) => {
    setVisibleModal(!!visibleModal);
    console.log(visibleModal);
  }

  return (
    <div className="App">
    {visibleModal && <ContactModal  id="contactModal"  toggleClose={toggleClose} />}
    <Header  toggleClose={toggleClose} />
    <Hero />
    <Footer/>
    </div>
  );
}

export default App;
