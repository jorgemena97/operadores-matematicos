
    function multiplicacion  () {
        let numero1 = parseInt (document.getElementById ("numero1").value )
        let numero2 = parseInt (document.getElementById ("numero2").value )
        
        let multiplicacion  = numero1 * numero2 
        // mostar el resultado
        
        document.getElementById("resultado").textContent = "la multiplicacion es:  " + multiplicacion;
      }
        

