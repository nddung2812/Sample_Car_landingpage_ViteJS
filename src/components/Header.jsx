import { LargeButton } from './Button/LargeButton';
import '../styles/Header.css';

export const Header = () => {
  return (
    <div className='header-ctn'>
      <h1>Welcome to G Automotive</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aperiam quibusdam earum recusandae repudiandae aut sit, quas facere, eum maxime quidem est soluta commodi harum facilis omnis dicta eius molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aperiam quibusdam earum recusandae repudiandae aut sit, quas facere, eum maxime quidem est soluta commodi harum facilis omnis dicta eius molestiae.</p>
      <LargeButton />
    </div>
  )
}
