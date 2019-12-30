const welcomeData = {
  title: '¡Bienvenido!',
  subtitle: 'Aquí encontrarás una vista previa de la información que cargues a lo largo del tiempo',
  cards: [
    {
      title: 'Agregar destinatario',
      text: 'Para que tus seres queridos o tus asesores legales puedan acceder a la información que consideres importante asignarles.'
    },
    {
      title: 'Cargar información',
      text: 'Para que tus seres queridos o tus asesores legales puedan acceder a la información que consideres importante asignarles.'
    }
  ],
  titleSection1: 'Lo que aún no cargaste',
  cardsSection1: [
    {
      title: 'Fotografías',
      description: 'Estado de carga',
      status: 'Pendiente',
      icon: 'ico_imagen_on_2x.png'
    },
    {
      title: 'Cartas',
      description: 'Estado de carga',
      status: 'Pendiente',
      icon: 'ico_mail_on_2x.png'
    },
    {
      title: 'Salud',
      description: 'Estado de carga',
      status: 'Pendiente',
      icon: 'ico_salud_on_2x.png'
    },
    {
      title: 'Servicios',
      description: 'Estado de carga',
      status: 'Pendiente',
      icon: 'ico_doc_on_2x.png'
    }
  ],
  titleSection2: 'Lo que fuiste cargando',
  cardsSection2: [
    {
      title: 'Bienes',
      description: 'Último agregado',
      status: 'Escritura de la casa',
      icon: 'ico_dinero_on_2x.png'
    },
    {
      title: 'Legales',
      description: 'Último agregado',
      status: 'Testamento',
      icon: 'ico_.doc_on_2x.png'
    },
    {
      title: 'Destinatarios',
      description: 'Último agregado',
      status: 'Dr. Fernando Rocha Gonzales',
      icon: 'ico_compartir_on_2x.png'
    }
  ]
}
const menu = [
  {
    name: 'Inicio',
    icon: 'ico_casa_on_2x.png'
  },
  {
    name: 'Acerca de mí',
    icon: 'ico_usuario_on_2x.png'
  },
  {
    name: 'Salud',
    icon: 'ico_salud1_on_2x.png'
  },
  {
    name: 'Servicios',
    icon: 'ico_doc1_on_2x.png'
  },
  {
    name: 'Bienes',
    icon: 'ico_moneda_on_2x.png'
  },
  {
    name: 'Legales',
    icon: 'ico_doc2_on_2x.png'
  },
  {
    name: 'Fotografías',
    icon: 'ico_imagen1_on_2x.png'
  },
  {
    name: 'Cartas',
    icon: 'ico_mail1_on_2x.png'
  },
  {
    name: 'Destinatarios',
    icon: 'ico_compartir1_on_2x.png'
  }
]

export {
  welcomeData,
  menu
}
