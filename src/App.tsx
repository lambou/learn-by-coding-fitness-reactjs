import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="main-container flex items-center justify-center w-screen min-h-screen">
      <div className='card-container flex flex-col p-8 rounded-2xl bg-white shadow-lg w-full max-w-4xl'>
        <HeaderComponent className='header-container' />
        <HeroComponent className='hero-container' />
        <FooterComponent className='footer-container mt-3'/>
      </div>
    </div>
  );
}

export default App;
