export const SITE_NAME = "100 proyectos de JavaScript"

export const SITE_DESCRIPTION =
  "Aprende JavaScript con 100 proyectos prácticos: juegos, clones de apps y herramientas con HTML, CSS y JavaScript. Código fuente y vídeo paso a paso, gratis."

export const REPO_URL = "https://github.com/midudev/javascript-100-proyectos"

export const AUTHOR = {
  "@type": "Person",
  name: "Miguel Ángel Durán",
  alternateName: "midudev",
  url: "https://midu.dev",
  sameAs: [
    "https://github.com/midudev",
    "https://x.com/midudev",
    "https://twitch.tv/midudev",
    "https://youtube.com/midulive",
  ],
}

export const PROJECTS = [
  {
    slug: "01-tinder-swipe",
    title: "Tinder Swipe",
    hidden: false,
    description:
      "Aprende a crear el efecto de swipe de Tinder con HTML, CSS y JavaScript.",
    learnings: [
      "DOM",
      "Animaciones con gestos",
      "Eventos de mouse y touch",
      "Transiciones CSS",
    ],
    youtube: 'https://www.youtube.com/watch?v=u01WD_YNENY'
  },
  {
    slug: "02-arkanoid-game",
    title: "Arkanoid Game",
    description:
      "Juego mítico y clásico de Arkanoid para controlar con teclado",
    learnings: [
      "Dibujar en Canvas",
      "Eventos de teclado",
      "RequestAnimationFrame",
      "Sprites"
    ],
    youtube: 'https://www.youtube.com/watch?v=b6du6MvQmuQ'
  },
  {
    slug: "03-midu-typing-game",
    title: "Reto de Mecanografía",
    description: "Pon a prueba tus habilidades de mecanografía con este reto",
    learnings: [
      "DOM",
      "Eventos de teclado",
      "Manejo de clases",
      "Optimización selectores"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=157qVlTelOg'
  },
  {
    slug: "04-chatgpt-local",
    title: "ChatGPT local",
    description: "Usa IA de forma local y gratis. 100% privacidad.",
    learnings: [
      "Web Workers",
      "IA",
      "ESModules"
    ],
    theme: {
      isDark: false
    },
    youtube: "https://www.youtube.com/watch?v=HvoiF1MCPGs"
  },
  {
    slug: "05-api-geo-ip",
    title: "Buscar info de IP",
    description: "Llama a una API para obtener información de cualquier IP y muestra la información en pantalla",
    learnings: [
      "Fetch API",
      "Formularios",
      "Asincronía"
    ],
    theme: {
      isDark: true
    },
    youtube: "https://www.youtube.com/watch?v=6AMKwVcpYTk"
  },
  {
    slug: "06-tetris-canvas",
    title: "Tetris en Canvas",
    description: "Resolvemos una prueba técnica que te propone crear el Tetris en 40 minutos",
    learnings: [
      "Canvas",
      "Eventos de teclado",
      "Lógica de programación"
    ],
    theme: {
      isDark: true
    },
    youtube: "https://www.youtube.com/watch?v=pNiyz0sl1no"
  },
  {
    slug: "07-tier-maker",
    title: "Tier Maker",
    description: "Arrastra y suelta las imágenes para crear tus propias listas de niveles",
    learnings: [
      "Drag & Drop",
      "Input de imágenes",
      "CSS Custom Properties"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=LPzG0PnOzgA'
  },
  {
    slug: "08-excel-js",
    title: "Hojas de cálculo",
    description: "Crea tu propio Excel sin dependencias y funcional",
    learnings: [
      "Tablas",
      "Eventos de Input: focus y blur",
      "Eval"
    ],
    theme: {
      isDark: false
    },
    youtube: 'https://www.youtube.com/watch?v=z5CRFM2SlUU'
  },
  {
    slug: "09-paint-win-95",
    title: "Paint con Canvas",
    description: "Crea un editor de imágenes clásico con <canvas>",
    learnings: [
      "Grid Area",
      "Canvas",
      "EyeDropper API"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=-0UYMmplimA'
  },
  {
    slug: "10-stack-game",
    title: "Stack Game",
    description: "Juego donde hay que apilar las piezas verticalmente",
    learnings: [
      "Canvas",
      "Lógica de programación",
      "Eventos de teclado"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=IEwL-TZBeqQ'
  },
  {
    slug: "11-js-perf-benchmark",
    title: "JS Perf Benchmark",
    description: "App para revisar el rendimiento de tu código JavaScript",
    learnings: [
      "Web Workers",
      "Eval",
      "Promises"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=VuOcLnzhbDw'
  },
  {
    slug: "12-moto-scroll",
    title: "Animación por Scroll",
    description: "Anima el fondo de una web a través del scroll",
    learnings: [
      "Scroll",
      "Animaciones",
      "Performance"
    ],
    theme: {
      isDark: true
    },
    youtube: 'https://www.youtube.com/watch?v=8EA-WNFMYwI'
  },
  {
    slug: "13-google-translate",
    title: "Google Translate",
    description: "Crea tu propio traductor de Google con HTML, CSS y JavaScript",
    learnings: [
      "IA local",
      "Reconocimiento de voz",
      "SpeechSynthesis"
    ],
    theme: {
      isDark: false
    },
    youtube: 'https://www.youtube.com/watch?v=n1LzTu2-rr0'
  },
  {
    slug: "14-snake-game",
    title: "Snake",
    description: "El clásico juego de la serpiente que crece al comer",
    learnings: [
      "Game loop",
      "Arrays como cola",
      "Eventos de teclado"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "15-memory-game",
    title: "Juego de memoria",
    description: "Encuentra todas las parejas de cartas con el menor número de movimientos",
    learnings: [
      "Transformaciones 3D en CSS",
      "Algoritmo Fisher-Yates",
      "Temporizadores"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "16-pomodoro-timer",
    title: "Temporizador Pomodoro",
    description: "Gestiona tu tiempo con la técnica Pomodoro y recibe notificaciones",
    learnings: [
      "setInterval y deriva del tiempo",
      "Notifications API",
      "document.title"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "17-password-generator",
    title: "Generador de contraseñas",
    description: "Genera contraseñas seguras de verdad y mide su fortaleza",
    learnings: [
      "crypto.getRandomValues",
      "Entropía",
      "Clipboard API"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "18-game-of-life",
    title: "Juego de la vida",
    description: "Autómata celular de Conway donde patrones simples crean vida compleja",
    learnings: [
      "Matrices 2D",
      "Autómatas celulares",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "19-weather-app",
    title: "App del tiempo",
    description: "Consulta el tiempo de tu ubicación o de cualquier ciudad",
    learnings: [
      "Geolocation API",
      "Fetch API",
      "async/await"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "20-drum-kit",
    title: "Batería virtual",
    description: "Toca la batería con el teclado. Sonidos sintetizados sin archivos de audio",
    learnings: [
      "Web Audio API",
      "Síntesis de sonido",
      "Eventos de teclado"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "21-tic-tac-toe-ai",
    title: "Tres en raya imbatible",
    description: "Juega contra una IA que nunca pierde gracias al algoritmo minimax",
    learnings: [
      "Algoritmo Minimax",
      "Recursión",
      "Árboles de decisión"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "22-markdown-editor",
    title: "Editor de Markdown",
    description: "Escribe Markdown y míralo convertido a HTML en tiempo real",
    learnings: [
      "Expresiones regulares",
      "Parsers",
      "localStorage"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "23-sorting-visualizer",
    title: "Visualizador de ordenación",
    description: "Observa paso a paso cómo funcionan los algoritmos de ordenación",
    learnings: [
      "Generadores (function*)",
      "Algoritmos de ordenación",
      "async/await"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "24-color-palette",
    title: "Generador de paletas",
    description: "Crea paletas de colores armoniosas pulsando la barra espaciadora",
    learnings: [
      "Modelo de color HSL",
      "Clipboard API",
      "URL como estado"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "25-whack-a-mole",
    title: "Machaca el topo",
    description: "Golpea a los topos antes de que se escondan",
    learnings: [
      "setTimeout",
      "Delegación de eventos",
      "Animaciones CSS"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "26-infinite-scroll",
    title: "Scroll infinito",
    description: "Carga contenido automáticamente al llegar al final de la página",
    learnings: [
      "IntersectionObserver",
      "Paginación de APIs",
      "Fetch API"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "27-2048-game",
    title: "2048",
    description: "Desliza y combina las fichas hasta llegar al 2048",
    learnings: [
      "Manipulación de matrices",
      "Gestos táctiles",
      "Transiciones CSS"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "28-pixel-art",
    title: "Editor de Pixel Art",
    description: "Dibuja pixel art y exporta tu creación como imagen PNG",
    learnings: [
      "Pointer Events",
      "CSS Grid",
      "Exportar Canvas a PNG"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "29-pokedex",
    title: "Pokédex",
    description: "Explora los Pokémon de la primera generación con la PokeAPI",
    learnings: [
      "Promise.all",
      "Elemento <template>",
      "Consumo de APIs"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "30-emoji-picker",
    title: "Selector de emojis",
    description: "Un selector de emojis nativo usando la Popover API",
    learnings: [
      "Popover API",
      "Delegación de eventos",
      "localStorage"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "31-minesweeper",
    title: "Buscaminas",
    description: "El mítico Buscaminas de Windows con sus tres niveles de dificultad",
    learnings: [
      "Recursión (flood fill)",
      "Evento contextmenu",
      "Matrices"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "32-text-diff",
    title: "Comparador de textos",
    description: "Encuentra las diferencias entre dos textos como hace Git",
    learnings: [
      "Programación dinámica",
      "Algoritmo LCS",
      "Manipulación del DOM"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "33-audio-visualizer",
    title: "Visualizador de audio",
    description: "Visualiza el sonido de tu micrófono o de un archivo de audio en tiempo real",
    learnings: [
      "AnalyserNode",
      "getUserMedia",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "34-flappy-bird",
    title: "Flappy Bird",
    description: "Esquiva las tuberías aleteando en este juego adictivo",
    learnings: [
      "Gravedad y velocidad",
      "Colisiones AABB",
      "Delta time"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "35-kanban-board",
    title: "Tablero Kanban",
    description: "Organiza tus tareas arrastrándolas entre columnas",
    learnings: [
      "Drag & Drop con Pointer Events",
      "localStorage",
      "Estado y renderizado"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "36-photo-booth",
    title: "Fotomatón",
    description: "Hazte fotos con la webcam y aplica filtros píxel a píxel",
    learnings: [
      "getUserMedia",
      "ImageData",
      "Filtros de píxeles"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "37-wordle",
    title: "Wordle",
    description: "Adivina la palabra oculta de cinco letras en seis intentos",
    learnings: [
      "Manipulación de strings",
      "Algoritmo de pistas",
      "Teclado virtual"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "38-web-components",
    title: "Web Components",
    description: "Crea tus propios elementos HTML reutilizables sin frameworks",
    learnings: [
      "Custom Elements",
      "Shadow DOM",
      "Slots"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "39-maze-generator",
    title: "Laberintos",
    description: "Genera laberintos aleatorios y encuentra la salida automáticamente",
    learnings: [
      "Backtracking (DFS)",
      "Búsqueda en anchura (BFS)",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "40-currency-converter",
    title: "Conversor de divisas",
    description: "Convierte entre monedas con tipos de cambio actualizados",
    learnings: [
      "Intl.NumberFormat",
      "Fetch API",
      "Caché de peticiones"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "41-simon-says",
    title: "Simón dice",
    description: "Memoriza y repite la secuencia de colores y sonidos",
    learnings: [
      "async/await",
      "Promesas y temporizadores",
      "Web Audio API"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "42-interactive-particles",
    title: "Partículas interactivas",
    description: "Un campo de partículas que reacciona al movimiento del ratón",
    learnings: [
      "Clases",
      "Vectores",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "43-js-quiz",
    title: "Quiz de JavaScript",
    description: "¿Cuánto sabes de JavaScript? Pon a prueba tus conocimientos",
    learnings: [
      "ES Modules",
      "Máquina de estados",
      "Barajar arrays"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "44-github-profile",
    title: "Perfil de GitHub",
    description: "Busca cualquier usuario de GitHub y descubre sus repositorios",
    learnings: [
      "Fetch API",
      "Errores HTTP",
      "Cabeceras de respuesta"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "45-pong",
    title: "Pong",
    description: "El primer videojuego de la historia para uno o dos jugadores",
    learnings: [
      "Varias teclas a la vez",
      "Colisiones",
      "IA sencilla"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "46-signature-pad",
    title: "Firma digital",
    description: "Firma con el ratón, el dedo o un lápiz y descarga tu firma",
    learnings: [
      "Pointer Events",
      "Curvas de Bézier",
      "devicePixelRatio"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "47-pathfinding",
    title: "Buscador de caminos A*",
    description: "Dibuja muros y mira cómo el algoritmo A* encuentra el camino más corto",
    learnings: [
      "Algoritmo A*",
      "Heurísticas",
      "Colas de prioridad"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "48-command-palette",
    title: "Paleta de comandos",
    description: "Una paleta de comandos al estilo VS Code que se abre con Cmd+K",
    learnings: [
      "Atajos de teclado",
      "Elemento <dialog>",
      "Búsqueda fuzzy"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "49-sudoku",
    title: "Sudoku",
    description: "Juega al Sudoku o deja que el algoritmo lo resuelva por ti",
    learnings: [
      "Backtracking",
      "Validación",
      "Generación de puzzles"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "50-piano-synth",
    title: "Piano sintetizador",
    description: "Toca el piano con el teclado del ordenador y moldea el sonido",
    learnings: [
      "OscillatorNode",
      "Envolvente ADSR",
      "Frecuencias musicales"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "51-image-compressor",
    title: "Compresor de imágenes",
    description: "Reduce el peso de tus imágenes sin subirlas a ningún servidor",
    learnings: [
      "File API",
      "canvas.toBlob",
      "Object URLs"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "52-hangman",
    title: "Ahorcado",
    description: "Adivina la palabra letra a letra antes de completar el dibujo",
    learnings: [
      "Manipulación de SVG",
      "Estructura Set",
      "Normalización de strings"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "53-spa-router",
    title: "Router SPA",
    description: "Construye tu propio enrutador para aplicaciones de una sola página",
    learnings: [
      "History API",
      "Evento popstate",
      "URLPattern"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "54-matrix-rain",
    title: "Lluvia de Matrix",
    description: "Recrea el icónico efecto de lluvia de código de Matrix",
    learnings: [
      "Canvas",
      "Efecto de rastro",
      "requestAnimationFrame"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "55-expense-tracker",
    title: "Control de gastos",
    description: "Registra tus ingresos y gastos y visualízalos en un gráfico",
    learnings: [
      "IndexedDB",
      "Gráficos SVG",
      "Intl.NumberFormat"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "56-text-effects",
    title: "Efectos de texto",
    description: "Efectos de máquina de escribir, scramble y más para tus textos",
    learnings: [
      "requestAnimationFrame",
      "Promesas",
      "Intl.Segmenter"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "57-connect-four",
    title: "Conecta 4",
    description: "Alinea cuatro fichas antes que tu rival",
    learnings: [
      "Matrices",
      "Detección de victoria",
      "Animaciones CSS"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "58-countries-explorer",
    title: "Explorador de países",
    description: "Busca, filtra y ordena todos los países del mundo",
    learnings: [
      "filter, sort y reduce",
      "Consumo de APIs",
      "Intl.DisplayNames"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "59-mandelbrot",
    title: "Fractal de Mandelbrot",
    description: "Haz zoom infinito en el famoso fractal de Mandelbrot",
    learnings: [
      "Números complejos",
      "Web Workers",
      "ImageData"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "60-svg-editor",
    title: "Editor con deshacer",
    description: "Un editor de formas SVG con deshacer y rehacer ilimitados",
    learnings: [
      "Patrón Command",
      "Pilas",
      "SVG"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "61-space-invaders",
    title: "Space Invaders",
    description: "Defiende la Tierra de la invasión alienígena",
    learnings: [
      "Clases y herencia",
      "Delta time",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "62-morse-code",
    title: "Código Morse",
    description: "Traduce texto a código Morse y escúchalo, o tecléalo tú mismo",
    learnings: [
      "Estructura Map",
      "Web Audio API",
      "Vibration API"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "63-proxy-reactivity",
    title: "Reactividad con Proxy",
    description: "Entiende cómo funcionan Vue y los signals creando tu propio sistema reactivo",
    learnings: [
      "Proxy y Reflect",
      "Signals y effects",
      "Data binding"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "64-world-clock",
    title: "Relojes del mundo",
    description: "Consulta la hora en cualquier ciudad del mundo con relojes analógicos",
    learnings: [
      "Zonas horarias con Intl",
      "Trigonometría",
      "Transformaciones CSS"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "65-sliding-puzzle",
    title: "Puzzle deslizante",
    description: "Ordena las piezas del clásico puzzle del 15",
    learnings: [
      "Inversiones y resolubilidad",
      "background-position",
      "Animación FLIP"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "66-metronome",
    title: "Metrónomo",
    description: "Un metrónomo preciso con el reloj del AudioContext",
    learnings: [
      "Programación de audio precisa",
      "AudioContext.currentTime",
      "Tap tempo"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "67-fireworks",
    title: "Fuegos artificiales",
    description: "Lanza fuegos artificiales con un click",
    learnings: [
      "Física de partículas",
      "globalCompositeOperation",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "68-offline-notes",
    title: "Notas offline (PWA)",
    description: "Una app de notas instalable que funciona sin conexión",
    learnings: [
      "Service Workers",
      "Cache API",
      "Web App Manifest"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "69-regex-tester",
    title: "Probador de RegExp",
    description: "Escribe expresiones regulares y mira las coincidencias al instante",
    learnings: [
      "Expresiones regulares",
      "matchAll",
      "Grupos con nombre"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "70-dino-runner",
    title: "Dino Runner",
    description: "El juego del dinosaurio de Chrome cuando no hay internet",
    learnings: [
      "Delta time",
      "Dificultad progresiva",
      "Sprites con código"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "71-virtual-list",
    title: "Lista virtual",
    description: "Renderiza 100.000 elementos sin que tu navegador se congele",
    learnings: [
      "Virtualización",
      "Rendimiento del DOM",
      "Eventos de scroll"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "72-carousel",
    title: "Carrusel",
    description: "Un carrusel moderno con scroll-snap, autoplay y accesible",
    learnings: [
      "CSS scroll-snap",
      "IntersectionObserver",
      "Page Visibility API"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "73-guitar-tuner",
    title: "Afinador de guitarra",
    description: "Afina tu guitarra usando el micrófono del navegador",
    learnings: [
      "Detección de tono",
      "Autocorrelación",
      "getUserMedia"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "74-asteroids",
    title: "Asteroids",
    description: "Destruye los asteroides con tu nave en el espacio infinito",
    learnings: [
      "Vectores",
      "Trigonometría",
      "Wrap-around"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "75-form-validation",
    title: "Validación de formularios",
    description: "Valida formularios con la API nativa del navegador y mensajes a medida",
    learnings: [
      "Constraint Validation API",
      "setCustomValidity",
      "Algoritmo de Luhn"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "76-tabs-chat",
    title: "Chat entre pestañas",
    description: "Comunica varias pestañas del navegador sin servidor",
    learnings: [
      "BroadcastChannel API",
      "Evento storage",
      "Page Visibility API"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "77-hacker-news",
    title: "Lector de Hacker News",
    description: "Lee las noticias más populares de Hacker News",
    learnings: [
      "Promise.allSettled",
      "Intl.RelativeTimeFormat",
      "Caché de datos"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "78-tower-of-hanoi",
    title: "Torres de Hanói",
    description: "Resuelve el clásico rompecabezas o mira cómo lo resuelve la recursión",
    learnings: [
      "Recursión",
      "Generadores",
      "Drag & Drop"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "79-gradient-generator",
    title: "Generador de degradados",
    description: "Crea degradados CSS preciosos y copia el código",
    learnings: [
      "CSS Custom Properties",
      "Inputs de color y rango",
      "Clipboard API"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "80-screen-recorder",
    title: "Grabador de pantalla",
    description: "Graba tu pantalla con audio y descarga el vídeo sin instalar nada",
    learnings: [
      "getDisplayMedia",
      "MediaRecorder",
      "Blobs"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "81-binary-search-tree",
    title: "Árbol binario de búsqueda",
    description: "Visualiza cómo se insertan, buscan y borran nodos en un árbol binario",
    learnings: [
      "Estructuras de datos",
      "Recursión",
      "SVG dinámico"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "82-meme-generator",
    title: "Generador de memes",
    description: "Crea memes con tus imágenes y descárgalos al instante",
    learnings: [
      "Texto en Canvas",
      "Arrastrar elementos",
      "Descarga de archivos"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "83-solar-system",
    title: "Sistema solar",
    description: "Un sistema solar animado con las órbitas de los planetas",
    learnings: [
      "Trigonometría",
      "Movimiento orbital",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "84-secret-messages",
    title: "Mensajes cifrados",
    description: "Cifra mensajes con contraseña usando criptografía real del navegador",
    learnings: [
      "Web Crypto API",
      "AES-GCM y PBKDF2",
      "TextEncoder y Base64"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "85-bouncing-balls",
    title: "Física de pelotas",
    description: "Lanza pelotas que rebotan y chocan entre sí con física real",
    learnings: [
      "Colisiones elásticas",
      "Gravedad",
      "Vectores"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "86-wikipedia-search",
    title: "Buscador de Wikipedia",
    description: "Busca en Wikipedia con autocompletado mientras escribes",
    learnings: [
      "Debounce",
      "AbortController",
      "Navegación con teclado"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "87-view-transitions",
    title: "Galería con View Transitions",
    description: "Transiciones animadas entre vistas con una sola línea de JavaScript",
    learnings: [
      "View Transitions API",
      "view-transition-name",
      "Animaciones"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "88-mouse-effects",
    title: "Efectos con el ratón",
    description: "Efectos interactivos de tarjetas y botones que siguen al cursor",
    learnings: [
      "getBoundingClientRect",
      "CSS Custom Properties",
      "Transformaciones 3D"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "89-video-player",
    title: "Reproductor de vídeo",
    description: "Un reproductor de vídeo con controles personalizados",
    learnings: [
      "HTMLMediaElement",
      "Fullscreen API",
      "Picture-in-Picture"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "90-gamepad-tester",
    title: "Tester de mandos",
    description: "Conecta tu mando y comprueba todos sus botones y joysticks",
    learnings: [
      "Gamepad API",
      "Polling con requestAnimationFrame",
      "Vibración del mando"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "91-calendar",
    title: "Calendario",
    description: "Un calendario mensual con eventos hecho solo con la API Date",
    learnings: [
      "Objeto Date",
      "Intl.DateTimeFormat",
      "CSS Grid"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "92-battleship",
    title: "Hundir la flota",
    description: "Hunde la flota enemiga antes de que la IA hunda la tuya",
    learnings: [
      "IA de búsqueda (hunt/target)",
      "Matrices",
      "Colocación aleatoria"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "93-calculator",
    title: "Calculadora sin eval",
    description: "Una calculadora científica que interpreta expresiones sin usar eval",
    learnings: [
      "Tokenizador",
      "Algoritmo Shunting-yard",
      "Notación polaca inversa"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "94-text-analyzer",
    title: "Analizador de texto",
    description: "Cuenta palabras, frases y calcula el tiempo de lectura de cualquier texto",
    learnings: [
      "Intl.Segmenter",
      "Estructura Map",
      "Expresiones regulares Unicode"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "95-infinite-whiteboard",
    title: "Pizarra infinita",
    description: "Dibuja en un lienzo infinito con zoom y desplazamiento",
    learnings: [
      "Transformaciones de coordenadas",
      "Evento wheel",
      "Pointer Events"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "96-toast-notifications",
    title: "Notificaciones toast",
    description: "Un sistema de notificaciones elegante, apilable y accesible",
    learnings: [
      "Web Animations API",
      "aria-live",
      "Colas y temporizadores"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "97-json-viewer",
    title: "Visor de JSON",
    description: "Formatea, valida y explora cualquier JSON como un árbol",
    learnings: [
      "JSON.parse y stringify",
      "Renderizado recursivo",
      "Elemento <details>"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "98-raycaster",
    title: "Motor 3D con raycasting",
    description: "Crea un laberinto en 3D como Wolfenstein 3D con raycasting",
    learnings: [
      "Raycasting",
      "Trigonometría",
      "Canvas"
    ],
    theme: {
      isDark: true
    }
  },
  {
    slug: "99-idle-clicker",
    title: "Juego incremental",
    description: "Haz click, compra mejoras y mira cómo crecen tus números",
    learnings: [
      "Game loop con tiempo real",
      "Guardado en localStorage",
      "Notación compacta con Intl"
    ],
    theme: {
      isDark: false
    }
  },
  {
    slug: "100-web-desktop",
    title: "Escritorio web",
    description: "Un escritorio con ventanas desde el que abrir todos los proyectos",
    learnings: [
      "Gestión de ventanas",
      "Pointer Events",
      "iframes"
    ],
    theme: {
      isDark: true
    }
  }
]
