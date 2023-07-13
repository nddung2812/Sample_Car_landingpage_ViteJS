import './styles/MainBody.css'
import { Header } from './components/Header'
import { Card } from './components/Card/Card'
import { CardHeader } from './components/Card/CardHeader'

function App() {

  return (
    <>
      <Header />
      <div className="main-body-ctn">
        <Card />
        <Card />
        <Card> 
          <CardHeader/>
          {/* <CardBody>
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus vitae dolorum facere laboriosam, inventore quam, commodi pariatur soluta possimus maxime accusamus. Vel quidem provident possimus doloremque odio dolores dignissimos?</p>
          </CardBody> */}
        </Card>
      </div>
    </>
  )
}

export default App
