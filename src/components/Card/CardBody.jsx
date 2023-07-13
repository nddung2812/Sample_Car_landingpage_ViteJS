/* eslint-disable react/prop-types */
import '../../styles/Card.css';

export const CardBody = ({
  heading,
  text1,
  text2,
}) => {
  return (
    <div className='card-body'>
      <h2>{heading}</h2>
      <p>{text1}</p>
      {!!text2 && <p>{text2}</p>}
    </div>
  )
}
