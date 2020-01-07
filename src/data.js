import { ROUTES } from './App/Components/constantes'

const menu = [
  {
    name: 'Inicio',
    icon: 'ico_casa_on_2x.png',
    link: ROUTES.start
  },
  {
    name: 'Salud',
    icon: 'ico_salud1_on_2x.png',
    link: ROUTES.health
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
    name: 'Acerca de mí',
    icon: 'ico_usuario_on_2x.png',
    link: ROUTES.aboutMe
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
    name: 'Destinatarios',
    icon: 'ico_compartir1_on_2x.png',
    link: ROUTES.destinatary
  }
]

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
      type: 'status',
      cards: [
        {
          title: 'Fotografías',
          icon: 'ico_imagen_on_2x.png',
          sectionTitle: ['Estado de carga'],
          sectionsText: ['Pendiente']
        },
        {
          title: 'Cartas',
          sectionsText: ['Pendiente'],
          sectionTitle: ['Estado de carga'],
          icon: 'ico_mail_on_2x.png'
        },
        {
          title: 'Salud',
          sectionsText: ['Pendiente'],
          sectionTitle: ['Estado de carga'],
          icon: 'ico_salud_on_2x.png'
        },
        {
          title: 'Servicios',
          sectionsText: ['Pendiente'],
          sectionTitle: ['Estado de carga'],
          icon: 'ico_doc_on_2x.png'
        }
      ]
    },
    {
      title: 'Lo que fuiste cargando',
      type: 'added',
      cards: [
        {
          title: 'Bienes',
          sectionsText: ['Escritura de la casa'],
          sectionTitle: ['Último agregado'],
          icon: 'ico_dinero_on_2x.png'
        },
        {
          title: 'Legales',
          sectionTitle: ['Último agregado'],
          sectionsText: ['Testamento'],
          icon: 'ico_.doc_on_2x.png'
        },
        {
          title: 'Destinatarios',
          sectionTitle: ['Último agregado'],
          sectionsText: ['Dr. Fernando Rocha Gonzales'],
          icon: 'ico_compartir_on_2x.png'
        }
      ]
    }
  ]
}
const lettersData = {
  title: 'Cartas',
  subtitle: 'En esta sección podrás dejar las cartas para tus destinatarios.',
  sectionCards: [
    {
      title: 'Para mis hijos',
      type: 'letter',
      cards: [
        {
          title: 'Gracias Maru de parte de parte de toda la familia',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['María Rodríguez', '27/05/2020']
        },
        {
          title: 'Feliz cumpleaños de parte de parte de toda la familia',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['María Rodríguez', '07/04/2025']
        },
        {
          title: 'Para tus hermanos de parte de parte de toda la familia',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['Jorge Ocampo', '27/05/2019']
        },
        {
          title: 'Martina querida',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['Martina Rodríguez', 'Cuando ya no esté']
        }
      ]
    },
    {
      title: 'Para mis nietos',
      type: 'letter',
      cards: [
        {
          title: 'Para Joaco',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['Joaquin Rodríguez', '27/05/2020']
        },
        {
          title: 'Feliz cumpleaños de parte de parte de toda la familia',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['María Rodríguez', '15/03/2023']
        },
        {
          title: 'Para Mati',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['Matías Rodríguez', '23/06/2023']
        },
        {
          title: 'Martina Cata',
          sectionTitle: ['Destinatario', 'Momento de apertura'],
          sectionsText: ['Catalina Rodríguez', '25/09/2025']
        }
      ]
    }
  ]
}

const photographyData = {
  title: 'Fotografías',
  subtitle: 'Aquí encontraras las fotografías más preciadas de tu vida.',
  sectionCards: [
    {
      title: 'Eventos familiares',
      type: 'photo',
      cards: [
        {
          title: 'Cumpleaños Mateo',
          sectionTitle: ['Marzo 2014']
        },
        {
          title: 'Graduación Sofía',
          sectionTitle: ['Febrero 2016']
        },
        {
          title: 'Casamiento José',
          sectionTitle: ['Enero 2016']
        }
      ]
    },
    {
      title: 'Viajes',
      type: 'photo',
      cards: [
        {
          title: 'Costa Oeste EEUU',
          sectionTitle: ['Julio 2015']
        },
        {
          title: 'Sudeste Asiático',
          sectionTitle: ['Marzo 2016']
        },
        {
          title: 'New York',
          sectionTitle: ['Noviembre 2017']
        }
      ]
    }
  ]
}

const healthData = {
  title: 'Salud',
  subtitle: 'Datos Importantes',
  mainInfo: [
    {
      name: 'Peso',
      value: '72Kg',
      icon: 'ico_balanza_on_2x.png'
    },
    {
      name: 'Estatura',
      value: '1.80cm',
      icon: 'ico_metro_on_2x.png'
    },
    {
      name: 'Grupo sanguíneo',
      value: 'O',
      icon: 'ico_sangre_on_2x.png'
    },
    {
      name: 'Factor sanguíneo',
      value: '+',
      icon: 'ico_sangre_on_2x.png'
    }
  ],
  cards: [
    {
      title: 'Enfermedades',
      subtitle: 'Que padeció o padece',
      icon: 'ico_mas_on_2x.png',
      info: ['Varicela', 'Sarampión', 'Hipercolesterolemia', 'Gastritis']
    },
    {
      title: 'Vacunas',
      subtitle: 'Aplicado a lo largo de la vida',
      icon: 'ico_mas_on_2x.png',
      info: ['Triple viral', 'Hepatitis B', 'Antirábica']
    },
    {
      title: 'Estudios',
      subtitle: 'Historial de estudios médicos realizados',
      icon: 'ico_adjuntar_on_2x.png',
      info: [
        {
          name: 'Ecografía',
          value: '27/11/2018'
        },
        {
          name: 'Radiografía',
          value: '14/05/2018'
        },
        {
          name: 'Resonancia magnética',
          value: '22/11/2018'
        },
        {
          name: 'Electrocardiograma',
          value: '13/09/2018'
        }
      ]
    },
    {
      title: 'Medicación',
      subtitle: 'Recetada para enfermedades crónicas',
      icon: 'ico_mas_on_2x.png',
      info: [
        {
          name: 'Rosuvastatina',
          value: '1000 mg',
          niw: true
        },
        {
          name: 'Aspirina',
          value: '1000 mg'
        }
      ]
    },
    {
      title: 'Seguro',
      subtitle: '',
      icon: 'ico_mas_on_2x.png',
      info: [{
        name: 'Osden',
        value: 'Plan, 210'
      }]
    },
    {
      title: 'Médicos',
      subtitle: '',
      icon: 'ico_mas_on_2x.png',
      info: [
        {
          name: 'Dr. Fernando Guerra',
          value: 'Gastroenterólogo'
        },
        {
          name: 'Dra. Agusta Diaz',
          value: 'Cardiólogo'
        },
        {
          name: 'Dr. Alejandro Mego',
          value: 'Nutricionista'
        }
      ]
    }
  ]
}

export {
  inicioData,
  menu,
  photographyData,
  lettersData,
  healthData
}
