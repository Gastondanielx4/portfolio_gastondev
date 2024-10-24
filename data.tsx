import { BookText, Briefcase, Brush, Home, Inbox, Linkedin, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Equipo",
        icon: <UsersRound />,
        description: "Colaboración efectiva en equipos de desarrollo, aportando soluciones innovadoras y optimizando procesos.",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "Experiencia en proyectos para sectores como educación, sistema de gestión de almacenes y logística.",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
        description:"Inicio"
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
        description:"Acerca de mi"
    },
    {
        id: 3,
        title: "Skills",
        icon: <Briefcase size={20} />,
        link: "#skills",
        description:"Skills"
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
        description:"Servicios"
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
        description:"Contacto"
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "CSS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "React.js",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Next.js",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermedio",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Básico",
                value: 40,
            },
            {
                name: "PHP",
                subtitle: "Básico",
                value: 40,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 20,
            },
            {
                name: "MySQL",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "MongoDb",
                subtitle: "Básico",
                value: 20,
            },
            {
                name: "Django",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
    {
        id: 3,
        title: "Other Skills",
        experience: [
            {
                name: "Git",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "Jira",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "AWS3",
                subtitle: "Intermedio",
                value: 40,
            },
            {
                name: "Docker",
                subtitle: "Intermedio",
                value: 50,
            },
        ],
    },
    {
        id: 4,
        title: "Soft Skills",
        experience: [
            {
                name: "Trabajo en equipo",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "Resolución de problemas",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Adaptabilidad",
                subtitle: "Intermedio",
                value: 90,
            },
            {
                name: "Proactividad",
                subtitle: "Intermedio",
                value: 95,
            },
        ],
    },
];

export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Creación de interfaces dinámicas con React y Next.js",
            },
            {
                name: "Uso de buenas prácticas de programación",
            },
            {
                name: "Optimización de rendimiento",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },

    {
        id: 2,
        title: "UX/UI & Otros",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Pruebas, review y control de codigo de equipo",
            },
            {
                name: "Integraciones con la estructura Backend",
            },

        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 632 03 38 02",
        link: "https://wa.link/7b2jhn",
        icon: <Phone />,
        action:"Enviar Whatsapp"
    },
    {
        id: 2,
        title: "LinkedIn",
        subtitle: "/gaston-daniel-quattrocchi-dev",
        link: "https://www.linkedin.com/in/gaston-daniel-quattrocchi-dev",
        icon: <Linkedin />,
        action:"Ver Perfil LinkedIn"
    },
    {
        id: 3,
        title: "Email",
        subtitle: "gastondanielx4@gmail.com",
        link: "mailto:gastondanielx4@gmail.com",
        icon: <Inbox />,
        action:"Enviar Correo"
    },
];
