import './styles/MainBody.css'
import { Header } from './components/Header'
import cardData from './Data/card'
import { CardHeader } from './components/Card/CardHeader'
import { CardBody } from './components/Card/CardBody'
import { MediumButtons } from './components/Button/MediumButtons'

function App() {
  return (
    <>
      <Header />
      <div className="main-body-ctn">
        {cardData?.map((card, index) => {
          const {heading, text1, text2, buttonURL, buttonText} = card;
          return (
            <div key={index} className='card-ctn'>
              <div className="top-card">
                <CardHeader />
                <CardBody 
                  heading={heading}
                  text1={text1}
                  text2={text2}
                  />
       
              </div>
              <MediumButtons 
                buttonURL={buttonURL}
                buttonText={buttonText}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
