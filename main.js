  
    $(document).ready( function() {

        $("#cambio").click(cambiar)
        var opciones = 0;
        function cambiar() {
            
            switch (opciones) {
                case 0:
                    $("img").fadeToggle(2000);
                    break;
                case 1:
                    $("img").slideToggle(3000);
                    break;
                case 2:
                    $("img").slideUp( 800 );
                    break;
                case 3:
                    $("img").slideDown( 800 );
                    break;
                case 4:
                    $("img").fadeOut( 1500 );
                    break;
                case 5:
                    $("img").fadeIn( 750 );
                    break;
                case 6:
                    $("img").toggle( 750 );                
                    break;
                case 7:
                    $("img").toggle( 10000 );
                    break;
                case 8:
                    $("img").filter(":animated").stop();
                    break;
                case 9:
                    location.reload();
                    break;
                default:

            }
            console.log(opciones);
            if (opciones < 7) {
                $("#cambio").val("Cambio " + (8 - opciones));
            }
            else if (opciones === 7) {
                $("#cambio").val("Pulsa para detener la animación");
            }
            else if (opciones === 8 ) {
                $("#cambio").val("Reiniciar página");
            }
            opciones++;
            if (opciones > 9) {opciones = 0}
        }               
        
    });


        
    