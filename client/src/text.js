import ChromeLogo from "./img/chromeLogo.png";
import Browsers from "./img/browsers.png";

export default {
  es: {
    headers: {
      skillsh1: "Habilidades",
      skillsh2: "Lo que uso en mi código",
      gamesh1: `Juegos`,
      gamesh2: `¡Haz clic para despertar el fuego!`,
      contacth1: "Contact",
      contacth2: "¡Ponte en contacto conmigo!"
    },
    navigation: {
      start: "Inicio",
      skills: "Habilidades",
      games: "Juegos",
      contact: "Contact"
    },
    introduction: {
      text: `¡Hola, bienvenidos a mi página! Soy Igor Fenikowski, un estudiante
  recién graduado de la Universidad de Varsovia. Me dedico a creación de
  aplicaciones de web usando las tecnologías nuevas y frameworks
  populares. En esta página encontrarás informaciones sobre mi, mis
  habilidades y juegos, así mismo podrás ponerte en contacto conmigo y revisar
  mi código. Me alegra que decidste echar una vista aquí. `,
      technologies:
        "Uso tecnologías más recientes para crear aplicaciones web modernas",
      actualInfo:
        "Actualmente vivo en Valéncia adonde llegué hace dos años para acabar mis estudios y me decidí por quedar. Sigo buscando ofertas de trabajo, si estás interesado, escríbeme en sección "
    },
    skills: [
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
    ],
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
      skillsh1: "Skills",
      skillsh2: "what i use in my code",
      gamesh1: `Games`,
      gamesh2: `Click to awake the fire!`,
      contacth1: "Contact",
      contacth2: "Get in touch with me!"
    },
    navigation: {
      start: "Start",
      skills: "Skills",
      games: "Games",
      contact: "Contact"
    },
    introduction: {
      text: `Hey, welcome to my page! I'm Igor Fenikowski, a student, recently graduated from the Univeristy of Warsaw. I create web aplications using modern technologies and popular frameworks. On this site, you will find informations about me, my skills and games I made. Likewise you can contact me here and revise my code. I'm glad you decided to take a look here.`,
      technologies:
        "I use most recent technologies to create modern web aplicacions",
      actualInfo:
        "Currently I live in Valencia where I came two years ago to complete my studies and I decided to stay. I'm searching for job offers, if you're interested in cooperation, write me in section "
    },
    skills: [
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
    ],
    games: [
      {
        h3: `It's a game, a classic, all the world knows the stories of Mario, but does it know the battles for cookies of a brave potato?`,
        p: `I believe there's no better way to learn than practise and for this reason there cannot exist better to learn programmin than coding some games. So here's how surged the third game of the universe of the Potato, which throws it into a dangerous world of two dimensions, where it has to fight to fill its stomach with delicious cookies.`,
        description: {
          one: `The game is based on object programming in JavaScript
                    (ES6)`,
          two: `Current version works only in Chrome for desktops`,
          three: `This game is written by me (Igor Fenikowski), although it contains images and sounds of open source licence. The use may not be commercial, but free for any personal purposes.`,
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
