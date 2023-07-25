function irma(){
      Swal.fire({
        title: '<strong>IRMA CRISTINA SÁNCHEZ LÓPEZ</strong>',
        //icon: 'info',
        /* imageUrl: 'img/cristina.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image', */
        html:
          `<img src="img/cristina.png" width="30%" style="border-radius: 10px; box-shadow: 10px 10px 5px 0px rgba(184,171,184,1); margin-left: 10px; margin-bottom: 10px; float: left;">
          <b>Área de conocimiento: </b>, Ciencias de la Educación, Administración de Empresas, Talento Humano y afines<br>
          <p><b>Titulos:</b></p>
          <ul>
          <li>2012 Titulo Curso Especial En Comercialización Y Mercadeo Para Unidades Productivas Rurales - SENA</li>
          <li>2012 Titulo Curso Especial En Emprendedor En Logística Mercadeo Y Servicio Al Cliente En
          Eventos- SENA</li>
          <li>2018 Titulo Tecnóloga En Gestión Del Talento Humano – SENA</li>
          <li>2020 Titulo Administradora de Empresas – CIAF</li>
          <li>Candidata a Magíster en Dirección y Gestión de Recursos Humanos</li>
          </ul>
          `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'Cerrar',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}