function BoxColor(props) {

    
    
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  
  const styleRed = {
    backgroundColor: `rgb(${r}, ${0}, ${0})`,
  };

  const styleGreen = {
    backgroundColor: `rgb(${0}, ${g}, ${0})`,
  };

  const styleBlue = {
    backgroundColor: `rgb(${0}, ${0}, ${b})`,
  };


  return (

    <div>
    <div style={styleRed}>

        <h1>rgb({r}, {0}, {0})</h1>
     
    </div>

    <div style={styleGreen}>

        <h1>rgb({0}, {g}, {0})</h1>
      
     
    </div>

    <div style={styleBlue}>

        <h1>rgb({0}, {0}, {b})</h1>
        
      
    </div>
   

</div>
  );

}

export default BoxColor