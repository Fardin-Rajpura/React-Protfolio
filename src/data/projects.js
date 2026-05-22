export const projects = [
    {
        id: 1,

        title: 'Full Stack E-Commerce Website',

        description:
            'A modern ecommerce web application with product listings, shopping cart, authentication, and responsive user interface.',

        image: `${import.meta.env.BASE_URL}images/projects/project-1.jpg`,

        category: 'Full Stack',

        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],

        metrics: 'Responsive full stack application',

        demoUrl: 'https://example.com/demo1',

        githubUrl: 'https://github.com/example/ecommerce-website',
    },

    {
        id: 2,

        title: 'Developer Portfolio Website',

        description:
            'A modern and animated personal portfolio website built using React.js and Tailwind CSS.',

        image: `${import.meta.env.BASE_URL}images/projects/project-2.jpg`,

        category: 'Frontend',

        technologies: ['React', 'Tailwind CSS', 'JavaScript'],

        metrics: 'Modern responsive UI design',

        demoUrl: 'https://example.com/demo2',

        githubUrl: 'https://github.com/example/portfolio',
    },

    {
        id: 3,

        title: 'Task Management App',

        description:
            'A task management web application with authentication, CRUD operations, and clean dashboard interface.',

        image: `${import.meta.env.BASE_URL}images/projects/project-3.jpg`,

        category: 'Full Stack',

        technologies: ['React', 'Node.js', 'MongoDB'],

        metrics: 'Task and productivity management',

        demoUrl: 'https://example.com/demo3',

        githubUrl: 'https://github.com/example/task-manager',
    },

    {
        id: 4,

        title: 'Weather App Dashboard',

        description:
            'A responsive weather dashboard using external APIs to display real-time weather information.',

        image: `${import.meta.env.BASE_URL}images/projects/project-4.jpg`,

        category: 'Frontend',

        technologies: ['React', 'API Integration', 'Tailwind CSS'],

        metrics: 'Real-time weather updates',

        demoUrl: 'https://example.com/demo4',

        githubUrl: 'https://github.com/example/weather-dashboard',
    },

    {
        id: 5,

        title: 'REST API Backend',

        description:
            'A secure backend REST API with JWT authentication, database integration, and scalable server architecture.',

        image: `${import.meta.env.BASE_URL}images/projects/project-5.jpg`,

        category: 'Backend',

        technologies: ['Node.js', 'Express.js', 'MongoDB'],

        metrics: 'Authentication and API system',

        demoUrl: 'https://example.com/demo5',

        githubUrl: 'https://github.com/example/rest-api',
    },

    {
        id: 6,

        title: 'Chat Application',

        description:
            'A modern real-time chat application with responsive UI and smooth messaging experience.',

        image: `${import.meta.env.BASE_URL}images/projects/project-6.jpg`,

        category: 'Full Stack',

        technologies: ['React', 'Node.js', 'Socket.io'],

        metrics: 'Real-time communication system',

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