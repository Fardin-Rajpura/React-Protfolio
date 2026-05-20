export const projects = [
    {
        id: 1,
        title: 'E-commerce Website',

        description:
            'A modern full stack ecommerce platform with authentication, cart system, and payment integration.',

        image: `${import.meta.env.BASE_URL}images/projects/project-1.jpg`,

        category: 'Full Stack',

        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],

        metrics: '40% increase in conversion',

        demoUrl: 'https://example.com/demo1',

        githubUrl: 'https://github.com/example/ecommerce-website',
    },

    {
        id: 2,

        title: 'Portfolio Website',

        description:
            'A modern animated developer portfolio built with React and Tailwind CSS.',

        image: `${import.meta.env.BASE_URL}images/projects/project-2.jpg`,

        category: 'Frontend',

        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],

        metrics: '95+ Lighthouse score',

        demoUrl: 'https://example.com/demo2',

        githubUrl: 'https://github.com/example/portfolio',
    },

    {
        id: 3,

        title: 'Task Management App',

        description:
            'A productivity app for managing daily tasks with authentication and CRUD operations.',

        image: `${import.meta.env.BASE_URL}images/projects/project-3.jpg`,

        category: 'Full Stack',

        technologies: ['Next.js', 'MongoDB', 'Node.js'],

        metrics: '30% productivity improvement',

        demoUrl: 'https://example.com/demo3',

        githubUrl: 'https://github.com/example/task-manager',
    },

    {
        id: 4,

        title: 'Weather Dashboard',

        description:
            'A weather application using external APIs and responsive UI design.',

        image: `${import.meta.env.BASE_URL}images/projects/project-4.jpg`,

        category: 'Frontend',

        technologies: ['React', 'API Integration', 'Tailwind CSS'],

        metrics: 'Real-time weather tracking',

        demoUrl: 'https://example.com/demo4',

        githubUrl: 'https://github.com/example/weather-dashboard',
    },

    {
        id: 5,

        title: 'REST API Backend',

        description:
            'A scalable backend REST API with JWT authentication and MongoDB database.',

        image: `${import.meta.env.BASE_URL}images/projects/project-5.jpg`,

        category: 'Backend',

        technologies: ['Node.js', 'Express.js', 'MongoDB'],

        metrics: 'Secure authentication system',

        demoUrl: 'https://example.com/demo5',

        githubUrl: 'https://github.com/example/rest-api',
    },

    {
        id: 6,

        title: 'AI Chat Application',

        description:
            'A real-time AI chat application with modern UI and API integration.',

        image: `${import.meta.env.BASE_URL}images/projects/project-6.jpg`,

        category: 'Full Stack',

        technologies: ['React', 'Node.js', 'Socket.io'],

        metrics: 'Real-time messaging experience',

        demoUrl: 'https://example.com/demo6',

        githubUrl: 'https://github.com/example/ai-chat-app',
    },
];

export const categories = [
    'All',
    'Full Stack',
    'Frontend',
    'Backend',
];