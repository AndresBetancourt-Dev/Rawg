import type { NextPage } from 'next'
import SEO from '../components/seo/SEO'
import { generateNeoncolor } from '../utilities/functions/colors'

const Home: NextPage = () => {
  console.log(generateNeoncolor());
  return (
    <div>
      <SEO title='Home' />
      <p>{'P'}</p>
    </div>
  )
}

export default Home
