const express = require("express");
const app = express();
const port = 3000;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Swagger Test App",
            description: "This is a sample server for a pet store.",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "API Support",
                url: "http://www.example.com/support",
                email: "support@example.com",
            },
            license: {
                name: "Apache 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0.html",
            },
            version: "1.0.1",
        },
    },
    apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/", (req, res) => res.send("Hello World!"));

/**
 * @swagger
 * /status:
 *    get:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        type: string
 *        format: string
 *    responses:
 *      '200':
 *        description: Successfully created user
 */
app.get("/status", (req, res) => res.status(200).json({ status: true }));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
