import Nav from './components/Nav';
import Location from './components/Location';
import data from './data.js';


function App() {

  const cards =  data.map((item)=>{

    return(
      <Location
        item = {item}
      
      
      />

    );
  })
  

  return (
    <>
      <Nav/>

      <div id="main">
        {cards}

      </div>
    

    </>
  );
}

export default App;
