import Lottie from 'lottie-react'
import Planet from '../../public/animations/planet.json'




export function PlanetAnimated() {
  return (

      <Lottie className='w-72 h-72' animationData={Planet} loop={true} />
   
  )
}
