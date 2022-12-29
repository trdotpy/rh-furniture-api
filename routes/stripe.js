const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const products = JSON.parse(req.body.products);

  const line_items = products.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.imageUrl],
        },
        unit_amount_decimal: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: "https://rh-furniture.onrender.com/order-confirmed",
    cancel_url: "https://rh-furniture.onrender.com/",
  });

  res.redirect(303, session.url);
});

module.exports = router;
