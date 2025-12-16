# 🍔 Foodora

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

> A modern, responsive food ordering application built focusing on performance, scalability, and seamless user experience.

---

## 📚 Technical Documentation

For a deep dive into the code architecture, React concepts, and implementation details, please refer to our comprehensive **[Developer Documentation](./documentation.md)**.

---

## ✨ Key Features

- **🔍 Real-Time Search**: Instant restaurant filtering with high-performance list handling.
- **🛒 Dynamic Cart**: Full-featured shopping cart (Add/Remove items, Bill Calculation) powered by **Redux Toolkit**.
- **📱 Mobile-First Design**: Custom-built floating bottom navigation for mobile users, ensuring a native app-like feel.
- **⚡ Optimized Performance**: Implements **Shimmer UI** loading states and **Lazy Loading** for specific routes.
- **🎨 Modern UI/UX**: clean aesthetics using Tailwind CSS, featuring smooth transitions and responsive layouts.

## 🛠️ Tech Stack

- **Frontend Framework**: [React.js](https://reactjs.org/) (v18+)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router Data API](https://reactrouter.com/en/main) (v6.4+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/foodora.git
    cd foodora
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    # or
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:1234` (or the port shown in your terminal).

## 📂 Project Structure

A quick overview of the top-level directory structure:

```text
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components (Navbar, Cards, etc.)
├── constants/      # Redux Store & Config (appStore.js, slices)
├── hooks/          # Custom Hooks (useFetchMenu, useFetchResto)
├── pages/          # Page-level components (Home, Restaurant, Cart)
├── App.jsx         # Main Application Layout
└── main.jsx        # Entry Point
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 🔮 Future Improvements

While Foodora is functionally complete as a frontend application, there are several exciting avenues for future development:

-   **Backend Integration**: Replace the mock data/API calls with a full-fledged Node.js/Express backend and MongoDB database.
-   **Payment Gateway**: Integrate Stripe or Razorpay for real payment processing.
-   **User Profiles**: Add an Order History page and address management.
-   **Unit Testing**: Implement Jest and React Testing Library for robust code coverage.
-   **Dark Mode**: A system-wide theme toggle for better accessibility.
-   **Real-time Delivery Tracking**: Integrate Google Maps or Leaflet to track delivery riders in real-time.

---

<div align="center">
  <sub>Built with ❤️ by the Foodora Team</sub>
</div>
