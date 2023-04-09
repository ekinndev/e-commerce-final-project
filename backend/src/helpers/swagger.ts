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
                url: 'http://localhost:3000/',
            },
        ],
    },
    apis: ['./src/routes/**/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;
