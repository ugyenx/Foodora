src/
├── assets/ # images, icons, fonts
│ ├── images/
│ └── icons/
│
├── components/ # reusable UI components
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── HeroSection.jsx
│ ├── MenuCard.jsx
│ ├── CartItem.jsx
│ ├── ReviewCard.jsx
│ ├── Button.jsx
│ └── Loader.jsx
│
├── pages/ # main route pages
│ ├── Home.jsx
│ ├── Menu.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Cart.jsx
│ └── Checkout.jsx
│
├── context/ # global state management
│ ├── CartContext.jsx
│ └── AuthContext.jsx
│
├── data/ # static or mock data
│ ├── menuData.js
│ └── reviews.js
│
├── hooks/ # custom React hooks
│ └── useLocalStorage.js
│
├── utils/ # helper functions
│ ├── formatPrice.js
│ └── calculateTotal.js
│
├── App.jsx # root component
├── main.jsx # entry point (ReactDOM)
├── index.css # Tailwind imports
└── tailwind.config.js
