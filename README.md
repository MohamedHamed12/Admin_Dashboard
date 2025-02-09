## Admin Dashboard

This project is a work in progress.

``` 
admin-panel/
│── public/                     # Static assets (favicon, images, etc.)
│── src/
│   ├── assets/                  # Static assets (images, styles, etc.)
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── Button.js
│   │   ├── Table.js
│   ├── features/                # Redux slices (state management)
│   │   ├── usersSlice.js
│   │   ├── productsSlice.js
│   │   ├── authSlice.js
│   ├── hooks/                   # Custom hooks
│   │   ├── useAuth.js
│   ├── layouts/                 # Layout components (e.g., Sidebar + Navbar)
│   │   ├── AdminLayout.js
│   ├── pages/                   # Page components
│   │   ├── Dashboard.js
│   │   ├── Users.js
│   │   ├── Products.js
│   │   ├── Login.js
│   ├── routes/                   # Route definitions
│   │   ├── AppRoutes.js
│   ├── services/                 # API calls
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── userService.js
│   ├── store/                    # Redux store configuration
│   │   ├── store.js
│   ├── styles/                   # Global styles
│   │   ├── global.css
│   ├── App.js                    # Main app component
│   ├── main.js                    # Entry point (for Vite)
│   ├── reportWebVitals.js         # Performance monitoring (optional)
│   ├── index.css                  # Global CSS
│── .eslintrc.js                   # ESLint configuration
│── .prettierrc                     # Prettier configuration
│── package.json
│── vite.config.js                  # Vite configuration
│── README.md
```