import './App.css'
import Badge from './components/Badges/Badge'
import Banner from './components/Banners/Banner'
import Card from './components/Cards/Card'
import Testimonial from './components/Testimonials/Testimonial'

function App() {
  return (
    <>
      <Badge color='red' shape='square'>
        Badge
      </Badge>
      <br />
      <Badge color='red' shape='square'>
        Badge
      </Badge>
      <br />
      <Banner
        className='banner'
        status='success'
        line='multi'
        title='Congratulations!'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
      ></Banner>
      <br />
      <Banner
        className='banner'
        status='warning'
        line='multi'
        title='Attention'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
      ></Banner>
      <br />
      <Banner
        className='banner'
        status='error'
        line='single'
        title='There is a problem with your application'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
      ></Banner>
      <br />
      <Banner
        className='banner'
        status='neutral'
        line='single'
        title='Congratulations!'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
      ></Banner>
      <br />
      <br />
      <Card
        title='Easy Deployment'
        text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial
        src='src\images\Image.png'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.'
        name='May Andersons'
        profession='Workcation, CTO'
      />
    </>
  )
}

export default App
