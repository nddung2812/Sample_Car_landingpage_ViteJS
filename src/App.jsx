import { useLayoutEffect, useState } from "react"
import './styles/MainBody.css'
import { Header } from './components/Header'
import cardData from './Data/card'
import { CardHeader } from './components/Card/CardHeader'
import { CardBody } from './components/Card/CardBody'
import { MediumButtons } from './components/Button/MediumButtons'

function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);
  const handleClick = (event, index) => {
    setSelectedCardIndex(index);
  };

  useLayoutEffect(() => {
    const allCards = Array.from(document.querySelectorAll('.card-ctn'));
    allCards.forEach((card, index) => {
      if (index === selectedCardIndex) {
        card.classList.add('border');
      } else {
        card.classList.remove('border');
      }
    });
  }, [selectedCardIndex]);

  return (
    <>
      <Header />
      <div className="main-body-ctn">
        {cardData?.map((card, index) => {
          const { heading, text1, text2, buttonURL, buttonText } = card;
          const isSelected = index === selectedCardIndex;

          return (
            <div
              key={index}
              className={`card-ctn ${isSelected ? 'border' : ''}`}
              onClick={(event) => handleClick(event, index)}
            >
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
                onClick={() => console.log("test")}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;