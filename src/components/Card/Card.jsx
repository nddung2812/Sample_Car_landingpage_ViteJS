import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { MediumButtons } from '../Button/MediumButtons'

export const Card = () => {
  return (
    <div className='card-ctn'>
      <CardHeader />
      <CardBody />
      <MediumButtons />
    </div>
  )
}
