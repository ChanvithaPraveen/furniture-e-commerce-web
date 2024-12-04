![furniture-logo](https://github.com/user-attachments/assets/2be19fd7-8e18-4152-9d95-db7b4f8596d7)

# Furniture E-Commerce Web

A modern, responsive e-commerce web application for furniture shopping, built with React, Material UI, and Redux. This project is designed for a seamless user experience and efficient management of product data, user authentication, and shopping cart.

## Demo

Check out the live demo of the project hosted on Vercel:

[![Furniture E-Commerce Web Demo](https://vercel.com/button)](https://furniture-e-commerce-web.vercel.app/)

You can explore the features and functionality directly from the live site.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Product Catalog**: View and search for various furniture products.
- **Shopping Cart**: Add, remove, and manage products in the cart.
- **Responsive UI**: The UI is fully responsive, optimized for mobile, tablet, and desktop.
- **Framer Motion Animations**: Animated page transitions and interactions.

## Tech Stack

- **Frontend**: React, Vite, Material UI, Ant Design, Framer Motion
- **State Management**: Redux, Redux Thunk
- **Form Handling**: Formik, Yup for validation
- **Routing**: React Router DOM
- **Styling**: Material UI, Emotion, Styled Components
- **Toast Notifications**: React Toastify
- **Linting**: ESLint

## Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** (Package Manager)

### 1. Clone the Repository

Clone this repository to your local machine using Git.

```bash
git clone <https://github.com/ChanvithaPraveen/furniture-e-commerce-web.git>
cd furniture-e-commerce-web
```

### 2. Install Dependencies

Run the following command to install the project dependencies.

```bash
npm install
```

This will install all the necessary packages listed in `package.json`.

### 3. Start the Development Server

Run the following command to start the Vite development server:

```bash
npm run dev
```

This will launch the project in development mode, typically accessible at `http://localhost:3000`.

### 4. Build for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized build of your app in the `dist/` folder.

### 5. Preview Production Build

To preview the production build locally, use the following command:

```bash
npm run preview
```

This will serve the production build at `http://localhost:5000` (or the specified port).

## Scripts

- `npm run dev` – Starts the development server.
- `npm run build` – Builds the project for production.
- `npm run preview` – Previews the production build.
- `npm run lint` – Runs ESLint to check for code quality issues.

## Dependencies

- **@ant-design/icons**: Icons for Ant Design components.
- **@emotion/react & @emotion/styled**: Styling libraries.
- **@mui/material & @mui/icons-material**: Material UI components and icons.
- **formik**: For managing forms.
- **framer-motion**: For animations and transitions.
- **prop-types**: For runtime type checking of props.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: For handling routing and navigation.
- **react-toastify**: For displaying toast notifications.
- **redux**: State management library.
- **redux-thunk**: Middleware for Redux to handle async actions.
- **yup**: Schema validation for Formik.

## Development

### Linting

The project uses ESLint for linting. To run the linter, use:

```bash
npm run lint
```

## Default User Credentials

If your application requires login functionality, the default user credentials for testing are:

- **Email**: `user@gmail.com`
- **Password**: `password`

but you can create new user and login with that credentials as well.

Use these credentials to log in when testing the application.
