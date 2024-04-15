import './App.css'
import Main from './components/Main'
import bg_header from "./assets/img/bg.png"

function App() {

  return (
    <div className="App">
      <header>
        <img width="100%" src={bg_header} alt="" />
      </header>
      <Main />
    </div>
  )
}

export default App