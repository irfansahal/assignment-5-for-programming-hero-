
import './App.css'
import HeroSection from './components/heroSection'
import MainContent from './components/mainSection'
import Footer from './footer/footer'
import Navigation from './nav/navigation'

function App() {
return(
  <>
    <div className='h-auto my-0 mx-auto'>
     <Navigation/>
     <HeroSection/>
     <MainContent/>
     <Footer/>
    </div>
  </>
)    
}

export default App
