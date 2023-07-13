/* eslint-disable react/prop-types */
import "../../styles/Button.css"

export const MediumButtons = ({  buttonText, handleClick }) => {
  return (
    <div className="md-btn" onClick={handleClick}>
      <a>{buttonText}</a>
    </div>
  )
}
