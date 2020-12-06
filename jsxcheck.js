import logo from './logo.svg';

function App() {
  return (
    <div>
         <div style={{'border':'solid 1px black','max-width':'100vw'}}> 
         <h1 className="title red">
           Your name here
         </h1>  
         <img src={'./imageInSrc.jpg'}/>
         <img src={'./imageInPublic.jpg'} />  
         </div>  
         <video width="320" height="240" controls>  
 
        <source src={'./myVideo.mp4'} type="video/mp4" /> 
    </video> 
    </div>
  );
}

export default App;
