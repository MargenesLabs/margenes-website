import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      es: {
        translation: {
            //Subtitle
            "subtitle-1": "CREANDO EL",
            "subtitle-2": "METAVERSO",
            "subtitle-3": "A TRAVÉS DE",
            "subtitle-4": "EXPERIENCIAS,",
            "subtitle-5": "COMUNIDADES,",
            "subtitle-6": "IMAGINACIÓN.",
            //About
            "about-1": "Creemos en el poder de la comunidad.",
            "about-2": "En el Metaverso las posibilidades son ilimitadas para todos.",
            "about-3": "La creatividad es la única regla y la imaginación el único límite.",
            "about-4": "Todos somos dueños y creadores.",
            "about-5": "Artistas y admiradores, clientes y emprendedores; aquí todos juegan en el mismo equipo.",
            "about-6": "En",
            "Márgenes Labs":"Márgenes Labs",
            "about-7":"acercamos al mundo a un espacio que le pertenece a todos.",
            //Services
            "services-1-title": "COLECCIONES NFT",
            "services-1-description": "CREA COLECCIONES NFT QUE TE ACERQUEN A TU AUDIENCIA Y TE PERMITAN ESTABLECER UNA RELACIÓN MÁS DIRECTA CON ELLA LOGRÁNDOLA MONETIZAR Y FIDELIZAR EFECTIVAMENTE. NOS ENCARGAMOS DE DESARROLLAR TODO EL PROCESO DE LANZAMIENTO DE TU COLECCIÓN: LA ELECCIÓN DEL TIPO DE NFT QUE MEJOR SE AJUSTA A TUS OBJETIVOS, EL DESARROLLO GRÁFICO DE LA PIEZA, EL DESARROLLO WEB3 Y LA ESTRATEGIA DE DISTRIBUCIÓN DEL NFT.",
            "services-2-title": "BILLETERAS DIGITALES",
            "services-2-description": "DESARROLLAMOS TU PÁGINA WEB 3.0 PARA QUE TU AUDIENCIA SE CONECTE CON SUS BILLETERAS DIGITALES E INTERACTÚE SOCIAL Y COMERCIALMENTE CON TU EMPRESA A TRAVÉS DEL BLOCKCHAIN.",
            "services-3-title": "CONTRATOS INTELIGENTES",
            "services-3-description": "NOS ENCARGAMOS DEL DESARROLLO DE LA TECNOLOGÍA DETRÁS DE LOS NFTS: LOS CONTRATOS INTELIGENTES. ESTAS PIEZAS DE INFORMACIÓN VIVEN EN EL BLOCKCHAIN DE TU ELECCIÓN Y NOSOTROS LAS DESARROLLAMOS POR TI PARA QUE TE ENCARGUES DE LO QUE MEJOR SABE HACER TU EMPRESA.",
            "services-4-title": "PROPIEDAD VIRTUAL",
            "services-4-description": "POSEER VIRTUALMENTE SE HACE CADA VEZ MÁS NECESARIO EN UN MUNDO QUE SE DIGITALIZA RÁPIDAMENTE. ACOMPAÑAMOS A TU EMPRESA A ELEGIR ACTIVOS DIGITALES COMO: PROPIEDAD RAÍZ DIGITAL, PROPIEDAD DE VALOR HISTÓRICO, PROPIEDAD DE VALOR UTILITARIO Y DEMÁS BIENES DIGITALES.",
            "services-5-title": "PROPIEDAD INTELECTUAL",
            "services-5-description": "FINALMENTE ES POSIBLE MONETIZAR DE MANERA EFECTIVA Y SEGURA LA PROPIEDAD INTELECTUAL. ACOMPAÑAMOS A TU EMPRESA A MATERIALIZAR, ALMACENAR, ORGANIZAR Y COMERCIALIZAR LA PROPIEDAD INTELECTUAL DE TU EMPRESA TOKENIZÁNDOLA A TRAVÉS DE NFTS.",
            "services-6-title": "GAMIFICACION",
            "services-6-description": "PARA TODAS LAS EMPRESAS, OFRECER DINÁMICAS INTERACTIVAS CON SU CONTENIDO A TRAVÉS DE SUS CANALES DIGITALES ES FUNDAMENTAL. DESARROLLAMOS ESTRATEGIAS Y PLATAFORMAS INTERACTIVAS GAMING PARA LA FIDELIZACIÓN Y MAXIMIZACIÓN DE CONSUMO DE TUS CLIENTES.",
            "services-7-title": "METAVERSOS",
            "services-7-description": "DESDE LA ADQUISICIÓN DE PROPIEDAD RAÍZ DIGITAL, HASTA EL DESARROLLO DE ARTÍCULOS Y AVATARES VIRTUALES, ACOMPAÑAMOS A TU EMPRESA A POSICIONARSE EN EL METAVERSO MÁS CONVENIENTE SEGÚN SUS OBJETIVOS. INCLUSIVE, CON EL PROYECTO CORRECTO, ACOMPAÑAMOS A TU EMPRESA A DESARROLLAR SU PROPIO METAVERSO.",
            "services-8-title": "MARKETPLACE",
            "services-8-description": "DESARROLLAMOS TU PROPIO MARKETPLACE PARA QUE CAPITALICES CADA UNA DE LAS COMPRAS DE MANERA MÁS EFECTIVA. ADEMÁS,POSICIONAMOS TUS COLECCIONES Y PRODUCTOS DIGITALES NFT EN LOS MERCADOS SECUNDARIOS MÁS IMPORTANTES.",
            "services-9-title": "MANEJO DE RIESGOS",
            "services-9-description": "CON MÁS DE 15 AÑOS DE EXPERIENCIA, NUESTRA EMPRESA ORIGEN MÁRGENES S.A.S SE ESPECIALIZA EN EL MANEJO DE RIESGO PARA LAS EMPRESAS QUE QUIERAN ADENTRARSE EN EL MUNDO DE LOS ACTIVOS DIGITALES SIN EL CONOCIMIENTO NECESARIO PARA HACERLO.",
            "services-10-title": "TOKENIZACION",
            "services-10-description": "DESDE LA CONCEPTUALIZACIÓN HASTA LA EMISIÓN DE TU PROPIO TOKEN, NUESTRO CONOCIMIENTO EN FINANZAS NOS PERMITE DESARROLLAR LA ESTRATEGIA DE ECONOMÍA DE TOKENS MÁS EFECTIVA PARA TU EMPRESA.",
            "services-11-title": "DAO'S",
            "services-11-description": "TE BRINDAMOS Y TE ADENTRAMOS EN LAS HERRAMIENTAS NECESARIAS PARA HACER DE TU COMUNIDAD DE CONSUMO UNA ORGANIZACIÓN AUTÓNOMA DESCENTRALIZADA QUE POTENCIE LAS RELACIONES CON TUS CLIENTES INCLUYÉNDOLOS EN LA TOMA DE DECISIONES.",
            "services-12-title": "ESTRATEGIAS DE PORTAFOLIO",
            "services-12-description": "CON LA APARICIÓN DE NUEVOS MERCADOS Y LA FALTA DE SEGURIDAD Y CONOCIMIENTO, NUESTRO EQUIPO EXPERTO EN FINANZAS ACOMPAÑA A TU EMPRESA A DIVERSIFICAR SUS INVERSIONES DIGITALES Y TOMAR LAS MEJORES DECISIONES DE CARA AL FUTURO DIGITAL.",
            //Contact
            "contact-button-1": "ESCRÍBENOS",
            "contact-button-2": "ÚNETE",
            "contact-proyect": "PROYECTOS",
            "contact-more": "MÁS DE NOSOTROS",
            "contact-follow": "SEGUINOS",
        }
      },
    },
    lng: document.querySelector('html').lang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });