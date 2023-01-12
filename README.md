# R+H Furniture - Ecommerce Store

<img src="./screenshots/desktop-home.png">
<img src="./screenshots/desktop-hero.png">

## [LIVE](https://rh-furniture.onrender.com/) | [Server](https://github.com/trdotpy/rh-furniture-api)

# Overview

Real Home Furniture is a full stack web application built using the MERN (MongoDB, Express, React, and Node.js) stack. The front end of the application is built using React and Redux, and makes use of Axios for API calls and Tailwind CSS for styling. The back end of the application is built using Express, and makes use of Bcrypt for password hashing, Body-Parser for parsing incoming request bodies, Cors for enabling cross-origin resource sharing, Helmet for adding security headers to the application, Jsonwebtoken for generating and verifying JSON web tokens, and Mongoose for interacting with the MongoDB database.

This application is fully responsive and provides a seamless user experience on both desktop and mobile devices. It also offers a range of CRUD endpoints for managing products, categories, and user accounts. In addition, the application includes a Stripe integration for handling payments and creating checkout sessions.

# Screenshots

### Product Page

<img src="./screenshots/desktop-product-page.png">

### Product Details

<img src="./screenshots/desktop-product-detail.png">

### Checkout

<img src="./screenshots/desktop-checkout.png">

# Technology

### Frontend:

- React
- Redux
- Axios
- Tailwind CSS

### Backend:

- Express.js
- Bcrypt
- Body-Parser
- Cors
- Jsonwebtoken
- Mongoose

# API Routes

The following routes are available in the application:

- /users: routes for user registration and login
- /products: routes for adding, updating, and deleting products
- /categories: routes for managing product categories
- /checkout: route for handling Stripe payment intent
- /create-checkout-session: route for creating a Stripe checkout session

# Installation

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/trdotpy/rh-furniture

# Go into the repository
$ cd rh-furniture

# Create .env file in server directory
$ touch .env

# Set environment variables
DATABASE_URL=
PORT=
SECRET=
REACT_APP_API_URL=

# Install dependencies, run server
$ cd server && npm install
$ npm run dev

# Install dependencies, run client
$ cd client && npm install
$ npm start

```

## Contact

[<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'>](https://github.com/trdotpy/)
[<img src='https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white'>](mailto:tanvi.rahman@outlook.com)
