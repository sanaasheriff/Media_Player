import './App.css'
import video from './assets/video.mp4'
import ReactPlayer from 'react-player'

function App() {
  return (
    <>
      <div>
        <h1>React Player</h1>
        <ReactPlayer 
        light={true} 
        controls={true} 
        url={video} 
        height="500px" 
        width="750px"/>
        {/* <video width="750" height="500" controls>
          <source src={video} type='video/mp4'/>
        </video> */}
       </div>
    </>
  )
}
 
export default App
