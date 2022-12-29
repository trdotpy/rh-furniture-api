const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", (req, res) => {
  if (!req.body.tokenId || !req.body.amount || req.body.amount <= 0) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        switch (stripeErr.type) {
          case "card_error":
            return res.status(400).json({ error: "Invalid card details" });
          default:
            return res.status(500).json({ error: "An error occurred" });
        }
      } else {
        return res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
