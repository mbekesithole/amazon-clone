const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51HyuWzAdmfnlfY7bAMiShMVygV0KbixRCRunhORSXhp0Oq0GJdMXeAr31NFtjsFKDGoPGkqKwe7pwJCYPHVni2Kc00AkoV8VGh')

// API setup

// ~ App config
const app = express()

// ~ Middleware
app.use(cors({ origin: true }))
app.use(express.json())

// ~ API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('<<< Payment Request Received! >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    //Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// ~ Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-44166/us-central1/api