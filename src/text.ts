import ChromeLogo from "./img/chromeLogo.png";
import Browsers from "./img/browsers.png";

const text = {
  es: {
    headers: {
      skillsh1: "Proyectos",
      skillsh2: "y lo que uso en mi código",
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
        "He estado viviendo en Valencia, España, durante los últimos 6 años. Estoy abierto a ofertas de trabajo de desarrollo de software completamente remoto. Si deseas ponerte en contacto conmigo, por favor visita la sección de contacto y escríbeme a través de cualquiera de los canales de comunicación proporcionados.",
      career: [
        `Durante mis dos años en la Universidad de Varsovia y un año en la Universidad de Valencia, adquirí un amplio conocimiento en gestión, economía, estadística, marketing, psicología y finanzas. Para culminar mis estudios, me enfoqué en el marketing móvil en la industria farmacéutica para mi tesis. Esta experiencia me ha ayudado a convertirme en un mejor líder, mejorar mis habilidades lingüísticas y comprender mejor cómo funciona el mundo de los negocios.`,
        `Impulsado por mi pasión temprana por la programación, me dediqué a la industria tecnológica. A través de una serie de cursos de programación, perfeccioné mis habilidades creando juegos y sitios web para proyectos personales y clientes. Esta experiencia práctica me permitió mejorar mi experiencia en HTML, CSS, JavaScript, Node.js y React.js, sentando una sólida base para mi carrera.`,
        `Mi primera oportunidad laboral surgió en Martico, una empresa de logística de tamaño mediano que necesitaba soluciones informáticas de manera urgente. A pesar de un breve período de capacitación, asumí el desafío de desarrollar de manera independiente el sistema ERP de la empresa, partiendo de una arquitectura de base de datos incompleta. A lo largo de este proceso, afiancé mis habilidades con entusiasmo en Vue.js, Node.js y MySQL. Trabajar en Valencia (España) me permitió seguir desarrollando mis habilidades lingüísticas.`,
        `Los éxitos iniciales de mi proyecto llamaron la atención y condujeron a la formación de un equipo dedicado de 4 a 5 personas. Muchos nuevos miembros del equipo eran desarrolladores juniors, lo que me presentó un nuevo desafío: enseñarles los principios de código limpio, las convenciones del proyecto, el pensamiento abstracto y enfatizar la importancia de un código claro y consistente para una mejor comprensión. Mi proyecto entró en fase de producción y se implementó en muchas delegaciones extranjeras fuera de España.`,
        `Buscando nuevas oportunidades de desarrollo personal y con el objetivo de mejorar mi formación formal en el campo de la informática, realicé y completé con éxito una Maestría en Inteligencia Artificial en la Universidad Internacional de Valencia. A lo largo del curso, me enfrenté a una variedad de asignaturas, que incluían matemáticas complejas, algoritmos, aprendizaje automático y redes neuronales, entre otros. Como culminación de mis estudios, desarrollé una red neuronal artificial que analizaba modelos tridimensionales de los pulmones de pacientes con fibrosis pulmonar y datos médicos para predecir la progresión de la enfermedad.`,
        `Después de más de 2 años en la empresa, aparte de liderar a un equipo de 9 personas en un período de alta demanda, me convertí en el líder técnico del proyecto, enfocándome principalmente en la planificación de desarrollos, la creación de la arquitectura del sistema, la tutoría y asistencia a los miembros de mi equipo, la optimización de la aplicación, la solución de errores críticos en producción y la supervisión y ajuste de la infraestructura del proyecto en Microsoft Azure. A fines de 2023, decidí renunciar y buscar nuevos desafíos.`,
        `After 4 years of working as a part of a bigger team in a logistics company I took upon a challenge to work for a smaller investor and create multiple software for an arcade games startup. Working alone I’ve created and deployed an ecosystem of 7 integrated applications.`  
      ]
    },
    skills: {
      experience: "Expiriencia: ",
      generalInfo: `¡Hola! ¡Bienvenid@ a mi página! Soy Igor, un programador con 6 años de experiencia en desarrollo de software. Poseo un título de Máster en Inteligencia Artificial de la Universidad Internacional de Valencia y una licenciatura en Gestión de la Universidad de Varsovia. Mi especialidad es crear aplicaciones utilizando frameworks modernos y populares. Disfruto explorando las últimas tecnologías y encontrando soluciones innovadoras para desafíos complejos. Me comprometo a aprender de forma continua y expandir mis habilidades como programador. En esta página puedes consultar mi currículum, revisar mi código y contactarme. Me alegra que hayas decidido echar un vistazo aquí.`,
      textTechInfo: [
        `JavaScript ha estado presente en mi carrera como programador desde casi el principio (empecé a programar a los 17 años en una variante del lenguaje C). Me comprometo por completo con los paradigmas de la programación funcional y sigo los principios de codificación limpia. Estoy actualizado con las últimas características de ES7.`,
        `Mis proyectos escritos en JavaScript los complemento con un moderno y actualizado framework de producción de Facebook: React. De la mano de React Native y Redux, me permiten desarrollar proyectos multiplataforma. Basándome en React (y React Router), surgió esta página, cuyo código está disponible para revisar en mi cuenta de GitHub.`,
        `Mi proyecto más grande hasta ahora, un ERP, lo creé utilizando Vue.js. Dado que su desarrollo duró 4 años, pude pasar por todas las fases de un proyecto: desde el prototipo inicial, el diseño de las vistas, la planificación, el desarrollo y lo más desafiante de todos, la optimización.`,
        `Encuentro satisfacción en el uso de CSS puro sin utilizar librerías de componentes (sé que puede sonar extraño, ya que la mayoría de los programadores no les gusta CSS). Creo que ofrece mucha flexibilidad una vez que se domina en profundidad y se puede utilizar de muchas formas creativas. Claramente, para ser eficiente en cuanto al tiempo, en algún momento uno debe aprender cómo aprovechar soluciones preelaboradas; yo utilizo Element UI y Tailwind CSS.`,
        `En el backend, mi única y preferida elección es Node.js. He desarrollado muchas APIs REST basadas en la estructura (Controlador => Modelo => Repositorio) con la adición de servicios, utilizando todo tipo de promesas y funciones de alto orden para la transformación de datos. Tengo experiencia con muchas bibliotecas de Node.js, incluyendo: aync-lock, axios, azure-storage, decimal.js, express, jsonwebtoken, moment.js y módulos nativos de Node.js.`,
        `Durante mis años de experiencia, he logrado alcanzar un nivel avanzado en el uso y comprensión de MySQL. Además de crear consultas complejas, tengo experiencia en su optimización y ajuste de la configuración de bases de datos InnoDB. He creado muchas arquitecturas de bases de datos que incluyen vistas de MySQL, índices compuestos, claves externas y tengo conocimiento sobre las ventajas y desventajas de todos los tipos de datos disponibles.`,
        `Aprendí Python durante mi año en la universidad, utilizándolo para manipular datos y crear modelos de inteligencia artificial. Solía combinarlo con TensorFlow, Scikit-Learn, Numpy, Keras, Pandas, Matplotlib.`,
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
          game: "https://proud-mud-042653303.3.azurestaticapps.net"
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
          game: "https://gentle-dune-0411d3903.3.azurestaticapps.net/"
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
          game: "https://gray-smoke-08ac91303.3.azurestaticapps.net/"
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
      cvEnglish: "descarga mi CV",
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
      skillsh2: "and what i use in my code",
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
      text: `Hi! Welcome to my page. I'm Igor, a programmer with 6 years of experience in software development. I hold a Master's degree in Artificial Intelligence from the International University of Valencia and a Bachelor's degree in Management from the University of Warsaw. I specialize in creating applications using modern and popular frameworks and enjoy exploring the latest technologies. On this page you can check out my resume, review my code and contact me. Here below you can check out my career path and education.`,
      technologies:
        "I use most recent technologies to create modern web aplications",
      actualInfo:
        "I have been living in Valencia, Spain, for the past 6 years. I am open to fully remote software development job offers. If you would like to get in touch with me, please visit the contact section and reach out to me through any of the communication channels provided.",
      career: [
        "During my two years at the University of Warsaw and one year at the University of Valencia, I gained a comprehensive understanding of management, economics, statistics, marketing, psychology, and finances. To culminate my studies, I focused on mobile marketing in the pharmaceutical industry for my thesis. This experience has helped me become a better leader, improve my language skills and understand better how the world of business works.",
        "Driven by my early passion for programming, I dedicated myself to the tech industry. Through a series of programming courses, I developed my skills by creating games and websites for personal and client projects. This hands-on experience allowed me to sharpen my expertise in HTML, CSS, JavaScript, Node.js, and React.js, laying a strong foundation for my career.",
        "I embraced the challenge of independently coding the company's ERP system, leaded by a project's architect. Throughout this process, I developed my skills in Vue.js, Node.js, and MySQL. Working in Valencia (Spain) allowed me to continue developing my language skills.",
        "The initial successes of my project garnered attention, leading to the formation of a dedicated team of 4-5 individuals. Many new team members were junior developers, presenting a fresh challenge for me - teaching clean code principles, project conventions, abstract thinking, and emphasizing the importance of clear and consistent code for better understanding. My project entered production phase and got implanted in Spain and many foreign delegations outside of Spain.",
        "Seeking new self-development opportunities and aiming to enhance my formal education in the IT field, I undertook and successfully completed a Master's degree in Artificial Intelligence at the International University of Valencia. Throughout the course, I got challenged with an abundance of subjects, including complex mathematics, algorithms, machine learning and neural networks, among others. As a culmination of my studies, I developed an artificial neural network that analyzed 3D models of pulmonary fibrosis patients' lungs and medical data to forecast the progression of the illness.",
        `After over 2 years at the company apart from leading a team of 9 individuals in a peak period, I've become the project's Tech Lead, focusing mostly on planning developments, creating system's architecture, mentoring and assisting my team members, optimizing the application, "hotfixing" critical errors in production, overseeing and fine-tuning project's infrastructure on Microsoft Azure, managing the project in Jira and recruiting new team members.`,
        `After 4 years of working as a part of a bigger team in a logistics company I took upon a challenge to work for a smaller investor and create multiple software for an arcade games startup. Working alone I’ve created and deployed an ecosystem of 7 integrated applications.`  
      ]
    },
    skills: {
      experience: "experience: ",
      generalInfo: `In my apps I use the hottest, modern technologies, which are currently taking over the programming world. React based front-end I complement with NodeJS on back-end side and MySQL database. What I cannot create in CSS, I get done in GIMP graphic editor. I'm a self-learning, passionate code lover. I continusly amplify my skillset and become more and more complete programist.`,
      textTechInfo: [
        `JavaScript has been with me in my programming career almost from the very beginning (I started programming at age of 17 in a variation of language C). I fully commit to functional programming paradigms and  follow clean coding principles. I'm up to date with the newest ES7 features.`,
        `My JavaScript written projects I complement with modern, up-to-date framework from Facebook's production - React. Hand to hand with React Native and Redux they let me code multiplatform projects. Basing on React (and React Router), surged this page, its code is avaiable to check out on my GitHub account `,
        `My biggest project ever, an ERP, I created in Vue.js. Since its development lasted 4 years, it let me go through all the phases of a project - first prototype, views' designs, planning, development and the hardest of all of them - optimization.`,
        `I find joy in using pure CSS without any component libraries (I know it might sound strange, since most of coders hate CSS). I believe it gives a lot of flexibility once learned deeply and can be used in many creative ways. Clearly, to be time-wise efficient at some point one should learn how to take advantage of pre-prepared solution - I use Element UI and Tailwind CSS.`,
        `In the backend, my only one and only is Node.js. I've developed many REST APIs based on (Controller => Model => Repository) structure with an addition of Services, using all type of promises and high order functions for data transformation. I've got experience with many Node.js libraries including: aync-lock, axios, azure-storage, decimal.js. express, jsonwebtoken, moment.js, and native Node.js modules.`,
        `During my years of experience I managed to reach and advanced level of usage and comprehension of MySQL. Apart from creating complex queries, I'm experienced in optimizing them and fine-tuning InnoDB databases configuration. I've created many databases' architectures, which included MySQL views, composite indexes, foreign keys and have a knowledge about advantages and disadvantages of all available datatypes.`,
        `I've learned Python during my year at university, using it to manipulate data and create artificial intelligence models. I used to combine it with TensorFlow, Scikit-Learn, Numpy, Keras, Pandas, Matplotlib.`
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
          game: "https://proud-mud-042653303.3.azurestaticapps.net"
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
          game: "https://gentle-dune-0411d3903.3.azurestaticapps.net/"
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
          game: "https://gray-smoke-08ac91303.3.azurestaticapps.net/"
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
      cvEnglish: "click here to download my CV",
      cvSpanish: "click here to download my CV in spanish"
    },
    error: {
      first: `Page doesn't exist`,
      second: "go back to the main site"
    }
  }
};

export default text;