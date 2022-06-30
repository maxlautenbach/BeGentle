const stripe = require('stripe')(
        'sk_test_51LGJMBBQUsVFpAoLBdynRLQI5vhnlrSczyyu72b334LKuT9csPH0sp3pIv7fln4nwVHHhsb24bbcHm1Kwhm14CeD00pLXPX5xO'
    )
    //const product = stripe.products.create({ name: 'Gold Special' });

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
export default async function handler(req, res) {
    const body = {
        cartid: req.query.cartid,
        userid: req.query.userid
    }
    console.log(body)
    var data = await prisma.shoppingCart.findFirst({
        where: {
            id: parseInt(body.cartid),
        },
        include: {
            rentals: true,
        },
    })
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'eur',
                product_data: {
                    name: 'Ihre Bestellung bei BeGentle!',
                },
                unit_amount: Math.round(data.totalPrice * 100),
            },
            quantity: 1,
        }, ],
        mode: 'payment',
        success_url: `http://localhost:3000/payment/redirect?status=successful`,
        cancel_url: 'http://localhost:3000/payment/redirect?status=canceled',
    })
    res.redirect(303, session.url);
}