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
  sectionCards: [
    {
      title: 'Lo que aún no cargaste',
      sections: ['Estado de carga'],
      type: 'status',
      cards: [
        {
          title: 'Fotografías',
          icon: 'ico_imagen_on_2x.png',
          sectionsText: ['Pendiente']
        },
        {
          title: 'Cartas',
          sectionsText: ['Pendiente'],
          icon: 'ico_mail_on_2x.png'
        },
        {
          title: 'Salud',
          sectionsText: ['Pendiente'],
          icon: 'ico_salud_on_2x.png'
        },
        {
          title: 'Servicios',
          sectionsText: ['Pendiente'],
          icon: 'ico_doc_on_2x.png'
        }
      ]
    },
    {
      title: 'Lo que fuiste cargando',
      sections: ['Último agregado'],
      type: 'added',
      cards: [
        {
          title: 'Bienes',
          sectionsText: ['Escritura de la casa'],
          icon: 'ico_dinero_on_2x.png'
        },
        {
          title: 'Legales',
          sectionsText: ['Testamento'],
          icon: 'ico_.doc_on_2x.png'
        },
        {
          title: 'Destinatarios',
          sectionsText: ['Dr. Fernando Rocha Gonzales'],
          icon: 'ico_compartir_on_2x.png'
        }
      ]
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
const lettersData = {
  title: 'Cartas',
  subtitle: 'En esta sección podrás dejar las cartas para tus destinatarios.',
  sectionCards: [
    {
      title: 'Para mis hijos',
      sections: ['Destinatario', 'Momento de apertura'],
      type: 'letter',
      cards: [
        {
          title: 'Gracias Maru de parte de parte de toda la familia',
          sectionsText: ['María Rodríguez', '27/05/2020']
        },
        {
          title: 'Feliz cumpleaños de parte de parte de toda la familia',
          sectionsText: ['María Rodríguez', '07/04/2025']
        },
        {
          title: 'Para tus hermanos de parte de parte de toda la familia',
          sectionsText: ['Jorge Ocampo', '27/05/2019']
        },
        {
          title: 'Martina querida',
          sectionsText: ['Martina Rodríguez', 'Cuando ya no esté']
        }
      ]
    },
    {
      title: 'Para mis nietos',
      sections: ['Destinatario', 'Momento de apertura'],
      type: 'letter',
      cards: [
        {
          title: 'Para Joaco',
          sectionsText: ['Joaquin Rodríguez', '27/05/2020']
        },
        {
          title: 'Feliz cumpleaños de parte de parte de toda la familia',
          sectionsText: ['María Rodríguez', '15/03/2023']
        },
        {
          title: 'Para Mati',
          sectionsText: ['Matías Rodríguez', '23/06/2023']
        },
        {
          title: 'Martina Cata',
          sectionsText: ['Catalina Rodríguez', '25/09/2025']
        }
      ]
    }
  ]
}

export {
  inicioData,
  menu,
  lettersData
}
