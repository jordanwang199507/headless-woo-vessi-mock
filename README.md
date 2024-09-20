# 👟 VessiMock

### This is a headless e-commerce application built with Next.js, leveraging WordPress and WooCommerce as the backend. Using Stripe as pyament system

[![made-with-Next](https://img.shields.io/badge/Made%20with-Next.js%20-success)](https://nextjs.org/)
[![made-with-WordPress](https://img.shields.io/badge/Made%20with-WordPress%20-blue)](https://wordpress.com/)
[![made-with-WooCommerce](https://img.shields.io/badge/Made%20with-WooCommerce%20-yellow)](https://woocommerce.com/)
[![made-with-Stripe](https://img.shields.io/badge/Made%20with-Stripe%20-orange)](https://stripe.com/)
[![deployed-on-HostingerWordPress](https://img.shields.io/badge/Deployed%20on-Hostinger%20-orange)](https://www.hostinger.com/)
[![deployed-on-Vercel](https://img.shields.io/badge/Deployed%20on-Vercel%20-orange)](https://vercel.com/)

[🚙 Live Version](https://headless-woo-vessi-mock.vercel.app/)

## 📑 Table of Content
- [👟 VessiMock](#-vessimock)
  - [📑 Table of Content](#-table-of-content)
  - [🌟 Features](#-features)
  - [🧱 Dependencies](#-dependencies)
  - [🚀 Getting Started](#-getting-started)
  - [📘 Acknowledgements](#-acknowledgements)
  - [🔨 Created By](#-created-by)
    
## 📷 Thumbnails
### Landing Page
<img src="https://github.com/user-attachments/assets/92f1282c-ee9b-4787-89a4-e7d25981aef0" alt="Thumbnail 8" width="200" height="120">
<img src="https://github.com/user-attachments/assets/2c6d648c-6471-4cb9-99b1-28ebfffb2ce9" alt="Thumbnail 7" width="200" height="120">

### Blogs Page
<img src="https://github.com/user-attachments/assets/c1cc5a66-7969-4117-a944-bacb83139357" alt="Thumbnail 6" width="200" height="120">
<img src="https://github.com/user-attachments/assets/a3923463-a5cf-42a6-9472-e855504dc938" alt="Thumbnail 5" width="200" height="120">


### Shop Page
<img src="https://github.com/user-attachments/assets/940fb334-5679-4357-aa19-b4fe280a124b" alt="Thumbnail 4" width="200" height="120">

### Product Page
<img src="https://github.com/user-attachments/assets/f31a2dda-89ab-4356-a9fe-c401b0665941" alt="Thumbnail 3" width="200" height="120">

### Cart Page
<img src="https://github.com/user-attachments/assets/a1f0fb67-1d39-44cd-97b5-41e750105be8" alt="Thumbnail 2" width="200" height="120">

### Checkout Page
<img src="https://github.com/user-attachments/assets/b77c030b-ec94-4bdb-9972-c01931c6c53e" alt="Thumbnail 1" width="200" height="120">



## 🌟 Features

- **Headless CMS**: Utilizes WordPress and WooCommerce as a backend to manage content and products.
- **Next.js Framework**: Provides server-side rendering and static site generation.
- **Stripe Integration**: Secure payment processing through Stripe.
- **WordPress + WooCommerce CMS Integration**: Manage products and blogs content.
- **GraphQL API**: Efficient data fetching with Apollo Client.
- **Newsletter Subscribe**: User can subscribe to newsletter
- **Ecommerce**: Shop -> Product Page -> Cart -> Checkout -> Payment

## 🧱 Dependencies

### Core

- `next`: ^14.2.5
- `react`: ^18
- `react-dom`: ^18

### State Management and Data Fetching

- `@apollo/client`: ^3.11.4
- `@apollo/experimental-nextjs-app-support`: ^0.11.2
- `graphql`: ^15.9.0
- `react-query`: ^3.39.3

### Payment Integration

- `@stripe/react-stripe-js`: ^2.8.0
- `@stripe/stripe-js`: ^4.4.0
- `stripe`: ^16.10.0

### Styling

- `tailwindcss`: ^3.4.1

### Utilities

- `axios`: ^1.7.4
- `@svgr/webpack`: ^8.1.0

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. Install all the depndencies <br>
   `npm install`
3. Create local.env
   ```
    CONSUMER_KEY=
    CONSUMER_SECRET=
    NEXT_PUBLIC_WORDPRESS_API_URL=
    NEXT_PUBLIC_NEWSLETTER_KEY=
    NEXT_PUBLIC_NEWSLETTER_SECRET=
    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    STRIPE_WEBHOOK_SECRET=
   ```
4. NEXT_PUBLIC_WORDPRESS_API_URL is the wordpress url, for example. 'https://navajowhite-yak-294103.hostingersite.com'
5. Navigate to WordPress WooCommerce -> Settings -> Advanced -> REST API -> Add Key
6. Once key generated update the CONSUMER_KEY and CONSUMER_SECRET
7. Setup Stripe testing account
8. Stripe Dashboard -> Overview; will have the STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
9. On Stripe Dashboard -> Webhooks; will have Signing Secret, use that to update STRIPE_WEBHOOK_SECRET
10. On WordPress Admin Dashboard -> Install Plugin Newsletter -> Newsletter install Addons Manager -> Install Newsletter API
11. Newsletter -> API -> Create New Key -> Permission Read / Write -> will generate NEWSLETTER_KEY and NEWSLETTER_SECRET  
12. Run the server
   ```sh
   npm run dev
   ```

## 📘 Acknowledgements
- Next.js
- WordPress
- WooCommerce
- Stripe
- Tailwind CSS
- Apollo Client
- React Query

## 🔨 Created By
- Jordan Wang @jordanwang199507
## ALL CONTENT AND ASSET FROM VESSI, PURELY FOR LEARNING PURPOSE
