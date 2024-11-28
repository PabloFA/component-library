import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export default function Testimonial({ src, text, name, profession }) {
  return (
    <div className='testimonial-card'>
      <img className='user-img' src={src} />
      <div className='testimonial-content'>
        <BiSolidQuoteAltLeft />
        <p className='testimonial'>{text}</p>
        <div className='user-info'>
          <p className='name'>{name}</p>
          <p className='profession'>{profession}</p>
        </div>
      </div>
    </div>
  )
}
