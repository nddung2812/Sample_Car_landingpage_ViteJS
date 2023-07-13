/* eslint-disable react/prop-types */
import "../../styles/Button.css"

export const MediumButtons = ({ buttonURL, buttonText }) => {
  return (
    <div className="md-btn">
      <a href={buttonURL}>{buttonText}</a>
    </div>
  )
}
