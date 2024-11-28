import { HiOutlineCloudUpload } from 'react-icons/hi'

export default function Card({ title, text }) {
  return (
    <div className='card'>
      <div className='icon-box'>
        <HiOutlineCloudUpload />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
