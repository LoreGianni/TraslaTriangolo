  <script>
    var ctx=CNV.getContext("2d");<!--creo la variabile ctx-->
    window.onload=disegna;
    
    function disegna(){<!--creazione del mio triangolo 
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,100);
    ctx.lineTo(100,100);
     ctx.lineTo(0,0);
     ctx.fillStyle="darkseagreen";
     ctx.fill();
   }
   TRASLAXD.addEventListener("click",function(){<!--funzione per traslare il triangolo a destra -->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.translate(20,0);
    disegna();
    });
    TRASLAXS.addEventListener("click",function(){<!--funzione per traslare il triangolo a sinistra-->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.translate(-20,0);
    disegna();
    });
    
    TRASLAYU.addEventListener("click",function(){<!-- funzione per traslare il triangolo in alto-->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.translate(0,-20);
    disegna();
    });
    TRASLAYD.addEventListener("click",function(){<!-- funzione per traslare il triangolo in basso-->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.translate(0,20);
    disegna();
    });
    
     SCALA.addEventListener("click",function(){<!--funzione per ingradire il triangolo-->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.scale(2,2);
    disegna();
    });
    
    
       ROUTA.addEventListener("click",function(){<!--Funzione per ruotare il triangolo-->
    ctx.clearRect(0,0,CNV.width,CNV.height);
    ctx.rotate(Math.PI/6);
    disegna();
    });
    </script>
