import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '0.1.0',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'Ekin Abalıoğlu',
                url: 'https://ekinn.dev',
                email: 'me@ekinn.dev',
            },
        },
        servers: [
            {
                url:
                    process.env.NODE_ENV === 'development'
                        ? 'http://localhost:3000/'
                        : 'https://e-commerce-final-be-penwtklslq-ew.a.run.app/',
            },
        ],
    },
    apis: ['./src/routes/**/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;
