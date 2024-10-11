
function recomendar(genero){

    let edad= document.getElementById('edadCliente').value;
    let imagen = document.getElementById('img'); 
    let aviso = document.getElementById('aviso');

    switch( genero){
        case 'comedia':
            if(edad < 13){
                imagen.src = "comedia16.jpg";
            }else {
                imagen.ser="";
                aviso.textContent = "no tiene edad";
            }
            break;
        case 'drama':
                if(edad < 13){
                    imagen.src = "drama.jpg";
                }else {
                    imagen.ser="";
                    aviso.textContent = "no tiene edad";
                }
                break;
    }

  
}
