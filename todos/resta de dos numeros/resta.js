function resta () {
    let numero1 = parseInt (document.getElementById ("numero1").value )
    let numero2 = parseInt (document.getElementById ("numero2").value )
    
    let resta  = numero1 - numero2 
    // mostar el resultado
    
    document.getElementById("resultado").textContent = "la resta  es:  " + resta;
  }
    
