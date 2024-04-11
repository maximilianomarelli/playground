/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const fetch = require("node-fetch");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.functionDemo1 = onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    logger.info("Hello functionDemo1!", { structuredData: true });
    response.send({ text: 'Hello from firebase function!' });
});

exports.functionDemo2 = onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.text())
        .then(body => {
            logger.info("Hello functionDemo2!", { structuredData: true });
            response.send({ text: body });
        })
        .catch((error) => {
            logger.error("Error in functionDemo2!", { structuredData: true });
            response.send({ error });
        });
});
