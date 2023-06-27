import ChromeLogo from "./img/chromeLogo.png";
import Browsers from "./img/browsers.png";

const text = {
  es: {
    headers: {
      skillsh1: "Proyectos",
      skillsh2: "Lo que uso en mi código",
      gamesh1: `Juegos`,
      gamesh2: `¡Haz clic para despertar el fuego!`,
      contacth1: "Contact",
      contacth2: "¡Ponte en contacto conmigo!"
    },
    navigation: {
      start: "Inicio",
      skills: "Proyectos",
      games: "Juegos",
      contact: "Contact"
    },
    introduction: {
      text: `¡Hola, bienvenido a mi página! Soy Igor Fenikowski, un estudiante
  recién graduado de la Universidad de Varsovia. Me dedico a creación de
  aplicaciones de web usando las tecnologías nuevas y frameworks
  populares. En esta página encontrarás informaciones sobre mi, mis
  habilidades y juegos, así mismo podrás ponerte en contacto conmigo y revisar
  mi código. Me alegra que decidiste echar una vista aquí. `,
      technologies:
        "Uso tecnologías más recientes para crear aplicaciones web modernas",
      actualInfo:
        "Actualmente vivo en Valéncia adonde llegué hace dos años para acabar mis estudios y me decidí por quedar. Sigo buscando ofertas de trabajo, si estás interesado, escríbeme en sección ",
      career: [
        `Durante mis dos años en la Universidad de Varsovia y un año en la Universidad de Valencia, adquirí un amplio conocimiento en gestión, economía, estadística, marketing, psicología y finanzas. Para culminar mis estudios, me enfoqué en el marketing móvil en la industria farmacéutica para mi tesis. Esta experiencia me ha ayudado a convertirme en un mejor líder, mejorar mis habilidades lingüísticas y comprender mejor cómo funciona el mundo de los negocios.`,
        `Impulsado por mi pasión temprana por la programación, me dediqué a la industria tecnológica. A través de una serie de cursos de programación, perfeccioné mis habilidades creando juegos y sitios web para proyectos personales y clientes. Esta experiencia práctica me permitió mejorar mi experiencia en HTML, CSS, JavaScript, Node.js y React.js, sentando una sólida base para mi carrera.`,
        `Mi primera oportunidad laboral surgió en Martico, una empresa de logística de tamaño mediano que necesitaba soluciones informáticas de manera urgente. A pesar de un breve período de capacitación, asumí el desafío de desarrollar de manera independiente el sistema ERP de la empresa, partiendo de una arquitectura de base de datos incompleta. A lo largo de este proceso, afiancé mis habilidades con entusiasmo en Vue.js, Node.js y MySQL. Trabajar en Valencia (España) me permitió seguir desarrollando mis habilidades lingüísticas.`,
        `Los éxitos iniciales de mi proyecto llamaron la atención y condujeron a la formación de un equipo dedicado de 4 a 5 personas. Muchos nuevos miembros del equipo eran desarrolladores juniors, lo que me presentó un nuevo desafío: enseñarles los principios de código limpio, las convenciones del proyecto, el pensamiento abstracto y enfatizar la importancia de un código claro y consistente para una mejor comprensión. Mi proyecto entró en fase de producción y se implementó en muchas delegaciones extranjeras fuera de España.`,
        `Buscando nuevas oportunidades de desarrollo personal y con el objetivo de mejorar mi formación formal en el campo de la informática, realicé y completé con éxito una Maestría en Inteligencia Artificial en la Universidad Internacional de Valencia. A lo largo del curso, me enfrenté a una variedad de asignaturas, que incluían matemáticas complejas, algoritmos, aprendizaje automático y redes neuronales, entre otros. Como culminación de mis estudios, desarrollé una red neuronal artificial que analizaba modelos tridimensionales de los pulmones de pacientes con fibrosis pulmonar y datos médicos para predecir la progresión de la enfermedad.`,
        `Después de más de 2 años en la empresa, aparte de liderar a un equipo de 9 personas en un período de alta demanda, me convertí en el líder técnico del proyecto, enfocándome principalmente en la planificación de desarrollos, la creación de la arquitectura del sistema, la tutoría y asistencia a los miembros de mi equipo, la optimización de la aplicación, la solución de errores críticos en producción y la supervisión y ajuste de la infraestructura del proyecto en Microsoft Azure. A fines de 2023, decidí renunciar y buscar nuevos desafíos.`
      ]
    },
    skills: {
      experience: "Expiriencia: ",
      info: `¡Hola! ¡Bienvenid@ a mi página! Soy Igor, un programador con 5 años de experiencia en desarrollo de software. Poseo un título de Máster en Inteligencia Artificial de la Universidad Internacional de Valencia y una licenciatura en Gestión de la Universidad de Varsovia. Mi especialidad es crear aplicaciones utilizando frameworks modernos y populares. Disfruto explorando las últimas tecnologías y encontrando soluciones innovadoras para desafíos complejos. Me comprometo a aprender de forma continua y expandir mis habilidades como programador. En esta página puedes consultar mi currículum, revisar mi código y contactarme. Me alegra que hayas decidido echar un vistazo aquí.`,
      skillsComponent: [
        {
          description: `JavaScript es un lenguaje bastante fresco, pero va creciendo, despertando mucha esperanza para el futuro. Yo lo uso creando tanto front-end de aplicaciónes como el back-end. Utilizandolo y su objetividad escribí unos juegos que encontrarás en otra sección de esta página.`
        },
        {
          description: `Gimp es mi herramienta de edición gráfica preferida. La uso para enfrentar los obstaculos sencillos en trabajo de cada front-end developer, dicho, editar imagenes y crear animaciones de sitios web y juegos.`
        },
        {
          description: `Mi trabajo en JavaScript complemento con el framework muy al tanto de producción de Facebook - React. Compaginandolo con React Native y Redux creo proyectos para varios dispositivos. Gracias a él (y React Router), surgió esta página, su codigo puedes revisar en mi cuenta de GitHub o pulsando `,
          linkName: "aquí"
        },
        {
          description: `En mi trabajo utilizo Git, el sístema de control de versión más popular del mundo. Todo el codigo que cometos, de esta página así mismo como los juegos y proyectos encontrarás en mi cuenta de GitHub, pulsando `,
          linkName: "aquí"
        },
        {
          description: `En el lado de server de mis aplicaciones, aprovecho de las tecnologias más ardientes en el mercado, o sea, versión back-end del JavaScript - Node JS. Juntos con Express y mongoDB database, resultan ser una combinación muy poderosa.`
        }
      ]
    },
    projects: {
      title: "Titúlo: ",
      state: "Estado: ",
      link: "Enlace: ",
      date: "Fecha: ",
      code: "Código: ",
      design: "Diseño: ",
      description: "Descripción: ",
      language: "Lengua: "
    },
    games: [
      {
        h3: `Es un clásico, todo el mundo conoce las historias de
                Mario, ¿pero si conoce de la misma manera las batallas por
                galletas, de una patata valiente?`,
        p: `No hay mejor manera de aprender que praticar y por tanto
                no existe una manera mejor de aprender programación que
                escribir juegos. Así surgió el tercer juego del universo de la
                Patata, que la mete en el mundo de dos dimensiones, donde
                tiene que luchar para llenar su estómago de galletas deliciosas.
                ¿Le ayudas?`,
        description: {
          one: `El juego se basa en programación de objetos en puro JavaScript
                    (ES6)`,
          two: `Versión actual funciona unicamente en Chrome para desktops.`,
          three: `El juego está escrito por mi (Igor Fenikowski), sin embargo
                    contiene imagenes y sonidos de licencia 'open source'. El uso no
                    es comercial, pero se admite gratuito para cualquier uso
                    personal.`,
          four: `El código disponible en`,
          image: ChromeLogo
        },
        links: {
          github: "https://github.com/fenikowski/SuperPotatoBros",
          game: "http://fenikowski.site/SuperPotatoBros/stage1.html"
        }
      },
      {
        h3: `Siguiente clásico, un recurdo de infancia y horas pasadas jugandolo en la famosa Nokia 6310i.`,
        p: `Es el segundo juego del mundo de la Patata. ¿Su objetivo? Devorar aun más
                galletas, ¡la Patata se transforma en una serpente! Fue un paso
                adelante en mi desarrollo y las primeras horas de frustración y
                impotencia, que despúes se volvieron en horas de afán y al acabar,
                la satisfacción infinita. ¡Prúebalo!`,
        description: {
          one: `El juego está escrito en puro JavaScript (ES6)`,
          two: `Versión actual funciona en todos navegadores populares y
                    moviles.`,
          three: `El juego está escrito por mi (Igor Fenikowski), sin embargo
                    contiene imagenes y sonidos de licencia 'open source'. El uso no
                    es comercial, pero se admite gratuito para cualquier uso
                    personal.`,
          four: `El código disponible en`,
          image: Browsers
        },
        links: {
          github: "https://github.com/fenikowski/snake",
          game: "http://fenikowski.site/Snake/Snake.html"
        }
      },
      {
        h3: `Mi primera obra del arte de programación.`,
        p: `Aunque no parezca nada que cabería destacar, a mi me conmueve y
                evoca emociones positivas, que me acompañaron tras escribirlo y
                haber ententido, que la programación es el rumbo correcto para mi.
                Así mismo fue fundado el principio de las adventuras de la Patata y evidencia
                de mi desarrollo como programador.`,
        description: {
          one: `El juego está escrito en puro JavaScript (ES6)`,
          two: `Versión actual funciona en todos navegadores populares (sin
                    moviles).`,
          three: `El juego está escrito por mi (Igor Fenikowski), sin embargo
                    contiene imagenes y sonidos de licencia 'open source'. El uso no
                    es comercial, pero se admite gratuito para cualquier uso
                    personal.`,
          four: `El código disponible en`,
          image: Browsers
        },
        links: {
          github: "https://github.com/fenikowski/TicTacToe",
          game: "http://fenikowski.site/TicTacToe/TicTacToe.html"
        }
      }
    ],
    footer: {
      author: "creado en React por ",
      design: "diseñado por",
      code: "revisa el código",
      link: "aquí",
      localization: "estás en ",
      up: "volver hacia arriba ",
      main: "inicio"
    },
    contact: {
      name: "tu nombre",
      email: "tu correo eléctronico",
      message: "contenido del mensaje",
      button: "envía mensaje",
      clipboard: "copiar a portapapeles",
      copied: "¡copiado!",
      cvEnglish: "descarga mi CV en inglés",
      cvSpanish: "descarga mi CV en español"
    },
    error: {
      first: `Página no existe`,
      second: "volver al inicio"
    }
  },
  en: {
    headers: {
      skillsh1: "Projects",
      skillsh2: "what i use in my code",
      gamesh1: `Games`,
      gamesh2: `Click to awake the fire!`,
      contacth1: "Contact",
      contacth2: "Get in touch with me!"
    },
    navigation: {
      start: "Start",
      skills: "Projects",
      games: "Games",
      contact: "Contact"
    },
    introduction: {
      text: `Hi! Welcome to my page. I'm Igor, a programmer with 5 years of experience in software development. I hold a Master's degree in Artificial Intelligence from the International University of Valencia and a Bachelor's degree in Management from the University of Warsaw. I specialize in creating applications using modern and popular frameworks and enjoy exploring the latest technologies. On this page you can check out my resume, review my code and contact me.`,
      technologies:
        "I use most recent technologies to create modern web aplications",
      actualInfo:
        "Currently I live in Valencia where I came two years ago to complete my studies and I decided to stay. I'm searching for job offers, if you're interested in cooperation, write me in section ",
      career: [
        "During my two years at the University of Warsaw and one year at the University of Valencia, I gained a comprehensive understanding of management, economics, statistics, marketing, psychology, and finances. To culminate my studies, I focused on mobile marketing in the pharmaceutical industry for my thesis. This experience has helped me become a better leader, improve my language skills and understand better how the world of business works.",
        "Driven by my early passion for programming, I dedicated myself to the tech industry. Through a series of programming courses, I honed my skills by creating games and websites for personal and client projects. This hands-on experience allowed me to sharpen my expertise in HTML, CSS, JavaScript, Node.js, and React.js, laying a strong foundation for my career.",
        "My initial employment opportunity arose with Martico, a mid-sized logistics company in urgent need of IT solutions. Despite a brief training period, I embraced the challenge of independently developing the company's ERP system, starting from an incomplete database architecture. Throughout this process, I enthusiastically honed my skills in Vue.js, Node.js, and MySQL. Working in Valencia (Spain) allowed me to continue developing my language skills.",
        "The initial successes of my project garnered attention, leading to the formation of a dedicated team of 4-5 individuals. Many new team members were junior developers, presenting a fresh challenge for me - teaching them clean code principles, project conventions, abstract thinking, and emphasizing the importance of clear and consistent code for better understanding. My project entered production phase and got implanted in many foreign delegations outside of Spain.",
        "Seeking new self-development opportunities and aiming to enhance my formal education in the IT field, I undertook and successfully completed a Master's degree in Artificial Intelligence at the International University of Valencia. Throughout the course, I got challenged with an abundance of subjects, including complex mathematics, algorithms, machine learning, and neural networks, among others. As a culmination of my studies, I developed an artificial neural network that analyzed 3D models of pulmonary fibrosis patients' lungs and medical data to forecast the progression of the illness.",
        `After over 2 years at the company apart from leading a team of 9 individuals in a peak period, I've become the project's Tech Lead, focusing mostly on planning developments, creating system's architecture, mentoring and assisting my team members, optimizing the application, "hotfixing" critical errors in production, overseeing and fine-tuning project's infrastructure on Microsoft Azure. In the late 2023 I decided to quit and pursue new challenges.`,
      ]
    },
    skills: {
      experience: "experience: ",
      info: `In my apps I use the hottest, modern technologies, which are currently taking over the programming world. React based front-end I complement with NodeJS on back-end side and MySQL database. What I cannot create in CSS, I get done in GIMP graphic editor. I'm a self-learning, passionate code lover. I continusly amplify my skillset and become more and more complete programist.`,
      skillsComponent: [
        {
          description: `JavaScript is a fresh and exciting language, which is growing providing more and more tools and posibilities for development of modern aplications. I use it creating front-end as well as back-end of my aplications. Taking advantage of it and it's object oriented programming I wrote few games which you'll find in other section.`
        },
        {
          description: `Gimp is my prefered graphic editor, which helps my embrace simple tasks confronting every Front-end developer. I use to create images and animations for my websites and games alike.`
        },
        {
          description: `My JavaScript written projects I complement with modern, up-to-date framework from Facebook's production - React. Hand to hand with React Native and Redux they let me code multiplatform projects. Basing on React (and React Router), surged this page, its code is avaiable to check out on my GitHub account `,
          linkName: "here"
        },
        {
          description: `In my work I use Git, the most popular verison control system. All the code I commit, of this page as well as the games and projects, you'll find on my GitHub account, clicking `,
          linkName: "here"
        },
        {
          description: `On the server side of my aplication I take advantage of the hottest technologies currently on the market, back-end version of JavaScript - Node JS. Together with Express and mongoDB database they result to be a powerfull combo.`
        }
      ]
    },
    projects: {
      title: "Title: ",
      state: "State: ",
      link: "Link: ",
      date: "Date: ",
      code: "Code: ",
      design: "Design: ",
      description: "Description: ",
      language: "Language: "
    },
    games: [
      {
        h3: `It's a game, a classic, all the world knows the stories of Mario, but does it know the battles for cookies of a brave potato?`,
        p: `I believe there's no better way to learn than practise and for this reason there cannot exist better to learn programmin than coding some games. So here's how surged the third game of the universe of the Potato, which throws it into a dangerous world of two dimensions, where it has to fight to fill its stomach with delicious cookies.`,
        description: {
          one: `The game is based on object programming in JavaScript
                    (ES6)`,
          two: `Current version works only in Chrome for desktops`,
          three: `This game is written by me (Igor Fenikowski), although it contains images and sounds of open source licence. The use may not be commercial, but free for any personal purposes.`,
          four: `Code available on`,
          image: ChromeLogo
        },
        links: {
          github: "https://github.com/fenikowski/SuperPotatoBros",
          game: "http://fenikowski.site/SuperPotatoBros/stage1.html"
        }
      },
      {
        h3: `Another classic, a memory of childhood and hours spent playing it on famous Nokia 6310i`,
        p: `The second game of the Potato world, will make you eat even more cookies, the Potato transforms into a snake! This was one step forward in my development and first hours of deep frustration and impotence, which later became hours of triumph and unlimited satisfaction.`,
        description: {
          one: `The game was written in pure JavaScript (ES6)`,
          two: ` Current version works in all the popular browsers and mobiles.`,
          three: `This game is written by me (Igor Fenikowski), although it contains images and sounds of open source licence. The use may not be commercial, but free for any personal purposes.`,
          four: `Code available on`,
          image: Browsers
        },
        links: {
          github: "https://github.com/fenikowski/snake",
          game: "http://fenikowski.site/Snake/Snake.html"
        }
      },
      {
        h3: `My first work of the art of programming`,
        p: `Although it doesn't seems like anything worth highlighting, it touches me and evokes positive emotions, which acompanied me right after coding it and understanding that code development is correct direction for me. Likewise the adventures of the Potato were founded and an evidence of my development as a programmer.`,
        description: {
          one: `The game was written in pure JavaScript (ES6)`,
          two: `Current version works in all the popular browsers (without mobiles).`,
          three: `This game is written by me (Igor Fenikowski), although it contains images and sounds of open source licence. The use may not be commercial, but free for any personal purposes.`,
          four: `Code available on`,
          image: Browsers
        },
        links: {
          github: "https://github.com/fenikowski/TicTacToe",
          game: "http://fenikowski.site/TicTacToe/TicTacToe.html"
        }
      }
    ],
    footer: {
      author: "created in React by ",
      design: "designed by",
      code: "check out the code",
      link: "here",
      localization: "you're in ",
      up: "go back to the top",
      main: "start"
    },
    contact: {
      name: "your name",
      email: "your email",
      message: "message content",
      button: "send message",
      clipboard: "copy to clipboard",
      copied: "copied!",
      cvEnglish: "download my CV in english",
      cvSpanish: "download my CV in spanish"
    },
    error: {
      first: `Page doesn't exist`,
      second: "go back to the main site"
    }
  }
};

export default text;