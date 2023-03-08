import Particles from 'react-tsparticles'
import particleConfig from './Particles-config'

function ParticlesBackground() {
  return (
    <Particles style={{height:'100%' ,width:'100%', position:'absolute', top:'0' , left:'0', zIndex:'1'}} params={particleConfig} />
  )
}

export default ParticlesBackground