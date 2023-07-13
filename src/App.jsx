import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card/Card'

function App() {

  return (
    <>
      <Header />
      <div className="main-body-ctn">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
