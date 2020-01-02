import { ROUTES } from './App/Components/constantes'

const inicioData = {
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
    icon: 'ico_casa_on_2x.png',
    link: ROUTES.home
  },
  {
    name: 'Acerca de mí',
    icon: 'ico_usuario_on_2x.png',
    link: ROUTES.aboutMe
  },
  {
    name: 'Salud',
    icon: 'ico_salud1_on_2x.png',
    link: ROUTES.health
  },
  {
    name: 'Servicios',
    icon: 'ico_doc1_on_2x.png',
    link: ROUTES.services
  },
  {
    name: 'Bienes',
    icon: 'ico_moneda_on_2x.png',
    link: ROUTES.bienes
  },
  {
    name: 'Legales',
    icon: 'ico_doc2_on_2x.png',
    link: ROUTES.legal
  },
  {
    name: 'Fotografías',
    icon: 'ico_imagen1_on_2x.png',
    link: ROUTES.photo
  },
  {
    name: 'Cartas',
    icon: 'ico_mail1_on_2x.png',
    link: ROUTES.letters
  },
  {
    name: 'Destinatarios',
    icon: 'ico_compartir1_on_2x.png',
    link: ROUTES.destinatary
  }
]
const lettersData = [
  {
    title: 'Para mis hijos',
    letters: [
      {
        name: 'Gracias Maru de parte de parte de toda la familia',
        destinatary: 'María Rodríguez',
        date: new Date(2020, 5, 27)
      },
      {
        name: 'Feliz cumpleaños de parte de parte de toda la familia',
        destinatary: 'María Rodríguez',
        date: new Date(2025, 4, 7)
      },
      {
        name: 'Para tus hermanos de parte de parte de toda la familia',
        destinatary: 'Jorge Ocampo',
        date: new Date(2019, 5, 27)
      },
      {
        name: 'Martina querida',
        destinatary: 'Martina Rodríguez',
        date: 'Cuando ya no esté'
      }
    ]
  },
  {
    title: 'Para mis nietos',
    letters: [
      {
        name: 'Para Joaco',
        destinatary: 'Joaquin Rodríguez',
        date: new Date(2020, 5, 27)
      },
      {
        name: 'Feliz cumpleaños de parte de parte de toda la familia',
        destinatary: 'María Rodríguez',
        date: new Date(2023, 3, 15)
      },
      {
        name: 'Para Mati',
        destinatary: 'Matías Rodríguez',
        date: new Date(2023, 6, 23)
      },
      {
        name: 'Martina Cata',
        destinatary: 'Catalina Rodríguez',
        date: new Date(2025, 9, 25)
      }
    ]
  }
]

export {
  inicioData,
  menu
}
