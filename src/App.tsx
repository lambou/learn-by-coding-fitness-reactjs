import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="main-container flex items-center justify-center w-screen min-h-screen bg-slate-100">
      <div className='card-container flex flex-col p-8 rounded-lg bg-white shadow-lg w-full max-w-4xl'>
          <HeaderComponent className='header-container'/>
          <div className='hero-container min-h-[300px] bg-orange-500'></div>
          <div className='footer-container min-h-[220px] bg-red-500'></div>
      </div>
    </div>
  );
}

export default App;
