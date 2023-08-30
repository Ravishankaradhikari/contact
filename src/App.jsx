import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navigation from './Components/Navigation/Navigation'



function App() {

  return (
    <div>
      <Navigation/>
      <main className='maincontainer'>
      <ContactHeader/>
      <ContactForm/>
      
      </main>

    </div>
  )
}

export default App
