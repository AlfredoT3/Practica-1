var fSesion = document.getElementById('formInicioSesion')
fSesion.addEventListener('submit',function(e){
   e.preventDefault()
   
   var datos = new FormData(fSesion)

   console.log(datos.get('usuario'))
   console.log(datos.get('contra'))
   var mensaje =document.getElementById('mensaje')

   mensaje.innerHTML = `
        <h4>Datos correctos </h4>
        <p>Usuario: ${datos.get('usuario')}</p>
        <p>Contraseña ${datos.get('contra')}</P>
        `

})
var Regis =document.getElementById('formRegistro')
Regis.addEventListener('submit',function(e){
        e.preventDefault()
        var dats =new FormData(Regis)

        var msj =document.getElementById('msj')

   msj.innerHTML = `
        <h4>Registro correcto </h4>
        <p>Usuario:     ${dats.get('usu')}</p>
        <p>Edad:        ${dats.get('ed')}</P>
        <p>Correo:      ${dats.get('mail')}</p>
        <p>Contraseña:  ${dats.get('cont')}</P>    
   
   `

})