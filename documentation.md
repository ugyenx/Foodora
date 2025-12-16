# React Concepts Implementation Guide

## 0. What is React?

### 🔹 Concept Explanation
**What it is:** React is a JavaScript library developed by Facebook for building user interfaces (UI). It uses a **component-based** architecture, meaning the UI is broken down into small, reusable pieces (components).
**What problem it solves:** It solves the complexity of managing UI state and updates. Instead of manually manipulating the DOM (like `document.getElementById('...').innerText = ...`), React updates the UI efficiently (using a Virtual DOM) whenever the underlying data changes.

### 🔹 How It Is Implemented in This Project
**Usage:** The entire application is built using React. Every file ending in `.jsx` is a React component. The `index.js` (or `main.jsx`) file is the entry point where the React app attaches to the HTML DOM.

```jsx
// src/main.jsx
// React taking control of the 'root' div in standard HTML
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

---

## 1. JSX (JavaScript XML)

### 🔹 Concept Explanation
**What it is:** A syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript files.
**What problem it solves:** It makes writing UI structure intuitive and readable by keeping the markup and logic in the same file.

### 🔹 How It Is Implemented in This Project
**Files:** All components (e.g., `Navbar.jsx`, `MenuCard.jsx`, `Home.jsx`).
**Usage:** Used to define the structure of every component.

```jsx
// src/components/Navbar.jsx
return (
  <nav className="flex justify-between items-center py-4">
    <h1>FOODORA</h1> <span className="text-red-500">OO</span>
  </nav>
);
```

---

## 2. Functional Components

### 🔹 Concept Explanation
**What it is:** JavaScript functions that accept "props" as an argument and return React elements (JSX).
**What problem it solves:** They are simpler, easier to read, and easier to test than class-based components.

### 🔹 How It Is Implemented in This Project
**Files:** Every component in the project (e.g., `HeroSection.jsx`).
**Usage:** All UI building blocks are defined as arrow functions.

```jsx
// src/components/HeroSection.jsx
const HeroSection = () => {
  return <section>...</section>;
};
```

---

## 3. Props (Properties)

### 🔹 Concept Explanation
**What it is:** A way to pass data from a parent component down to a child component.
**What problem it solves:** It makes components reusable and dynamic by allowing them to receive different data.

### 🔹 How It Is Implemented in This Project
**Files:** `MenuCard.jsx`, `RestaurantCategories.jsx`, `CarousalCard.jsx`.
**Usage:** Passing restaurant details or menu items to reusable cards.

```jsx
// src/components/MenuCard.jsx
// 'items' prop is received from the parent (RestaurantCategories)
const MenuCard = ({ items, restaurantInfo }) => {
  return <p>{items.name}</p>;
};
```

---

## 4. State (useState)

### 🔹 Concept Explanation
**What it is:** Built-in Object that stores data or information about the component that may change over the lifetime of the component.
**What problem it solves:** Allows the UI to update automatically when data changes (reactivity).

### 🔹 How It Is Implemented in This Project
**Files:** `MobileNavbar.jsx`, `RestaurantCategories.jsx`, `Auth.jsx`.
**Usage:**
- `activeTab` in MobileNavbar.
- `showItem` (Accordion toggle) in RestaurantCategories.

```jsx
// src/components/MobileNavbar.jsx
const [activeTab, setActiveTab] = useState("home");
// When setActiveTab is called, the component re-renders to highlight the new tab.
```

---

## 5. Event Handling

### 🔹 Concept Explanation
**What it is:** Handling user interactions like clicks, form submissions, or input changes.
**What problem it solves:** Allows the application to respond to user actions.

### 🔹 How It Is Implemented in This Project
**Files:** `MenuCard.jsx`, `Navbar.jsx`, `Auth.jsx`.
**Usage:** `onClick`, `onSubmit`, `onChange`.

```jsx
// src/components/MenuCard.jsx
<button onClick={() => handleAdd(items)}>
  ADD
</button>
```

---

## 6. Conditional Rendering

### 🔹 Concept Explanation
**What it is:** Rendering different UI elements based on certain conditions (like `if-else` logic).
**What problem it solves:** Allows showing/hiding elements dynamically (e.g., "Login" vs "Logout" button).

### 🔹 How It Is Implemented in This Project
**Files:** `App.jsx`, `MenuCard.jsx`, `Navbar.jsx`.
**Usage:**
- Hiding Navbar on Login page.
- Showing "Add" vs "Quantity Controls" (+/-) in MenuCard.

```jsx
// src/components/MenuCard.jsx (Ternary Operator)
{quantity > 0 ? (
  <div className="counter">...</div> 
) : (
  <button>ADD</button>
)}
```

---

## 7. Lists & Keys

### 🔹 Concept Explanation
**What it is:** Rendering a list of components from an array of data using Javascript's `.map()`.
**What problem it solves:** efficiently renders dynamic lists of data without hardcoding.

### 🔹 How It Is Implemented in This Project
**Files:** `RestaurantMenu.jsx`, `RestaurantCarousal.jsx`.
**Usage:** Displaying lists of menu categories or restaurants.

```jsx
// src/components/RestaurantMenu.jsx
{categories.map((items) => (
  // 'key' prop is critical for React's performance
  <RestaurantCategories key={items.card.card.categoryId} data={items} />
))}
```

---

## 8. Forms (Controlled Components)

### 🔹 Concept Explanation
**What it is:** Form inputs whose value is controlled by React state.
**What problem it solves:** Gives React complete control over form data, making validation and submission handling easier.

### 🔹 How It Is Implemented in This Project
**Files:** `Auth.jsx`.
**Usage:** Managing Login/Signup inputs.

```jsx
// src/pages/Auth.jsx
<input 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>
```

---

## 9. useEffect Hook

### 🔹 Concept Explanation
**What it is:** A hook that handles "side effects" like fetching data, subscriptions, or DOM manipulation.
**What problem it solves:** Allows running code after the component renders (e.g., fetch API).

### 🔹 How It Is Implemented in This Project
**Files:** `useFetchMenu.js`, `MobileNavbar.jsx`.
**Usage:** API calls on page load.

```jsx
// src/hooks/useFetchMenu.js
useEffect(() => {
  // Logic to fetch menu runs once when component mounts
  FetchMenu();
}, []); 
```

---

## 10. Custom Hooks

### 🔹 Concept Explanation
**What it is:** JavaScript functions that start with "use" and call other hooks.
**What problem it solves:** logic reuse. Instead of copying data-fetching logic into every component, you extract it once.

### 🔹 How It Is Implemented in This Project
**Files:** `useFetchMenu.js`, `useFetchResto.js`.
**Usage:** Abstraction of API fetching logic.

```javascript
// src/hooks/useFetchMenu.js
const useFetchMenu = (resId) => {
  // Abstracted state and effect logic
  const [menuInfo, setmenuInfo] = useState(null);
  // ...fetching logic...
  return menuInfo;
};
```

---

## 11. Client-Side Routing (react-router-dom)

### 🔹 Concept Explanation
**What it is:** A library that handles navigation between different views without refreshing the page.
**What problem it solves:** Enables Single Page Applications (SPAs) where the experience feels like a native app.

### 🔹 How It Is Implemented in This Project
**Files:** `App.jsx`, `Navbar.jsx`.
**Usage:** `createBrowserRouter` for defining routes, `<Link>` for navigation.

```jsx
// src/App.jsx
const appRoute = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/restaurant/:resId", element: <RestaurantMenu /> },
]);
```

---

## 12. Context API / Redux (Global State)

### 🔹 Concept Explanation
**What it is:** A way to share data globally across the entire app without passing props manually at every level.
**What problem it solves:** Solves "Prop Drilling" (passing data through many layers of components).

### 🔹 How It Is Implemented in This Project
**Files:** `appStore.js` (Store), `Navbar.jsx`(Consumer).
**Usage:** We use **Redux Toolkit** (which uses Context internally via `<Provider>`) to manage the Cart and User Authentication.

```jsx
// src/App.jsx
<Provider store={appStore}>
  <App />
</Provider>

// src/components/Navbar.jsx

---

## 13. Carousel Functionality

### 🔹 Concept Explanation
**What it is:** A UI component that displays a rotating or scrolling list of items (like restaurant cards) horizontally.
**What problem it solves:** Allows displaying a large number of items in a limited space without cluttering the UI.

### 🔹 How It Is Implemented in This Project
**Files:** `RestaurantCarousal.jsx`, `CarousalCard.jsx`.
**Usage:**
-   **Responsive Logic:** Uses `useEffect` and `window.innerWidth` to decide how many items to show at once (4 on desktop, 1 on mobile).
-   **Navigation:** "Previous" and "Next" buttons update the `currentIndex` state to slice the `visibleItems` array.

```jsx
// src/components/RestaurantCarousal.jsx
const visibleItems = useMemo(() => {
  return restInfo.slice(currentIndex, currentIndex + itemsPerPage);
}, [restInfo, currentIndex, itemsPerPage]);

// Changing pages
const handleNext = () => setcurrentIndex(currentIndex + itemsPerPage);
```

---

## 14. Search Functionality

### 🔹 Concept Explanation
**What it is:** A feature that filters a list of data based on user input.
**What problem it solves:** Helps users quickly find specific items (restaurants) in a large list.

### 🔹 How It Is Implemented in This Project
**Files:** `Search.jsx`, `Restaurant.jsx`.
**Usage:**
-   **State Lifting:** The `searchText` state lives in the parent (`Restaurant.jsx`) but is updated by the child (`Search.jsx`).
-   **Filtering:** The list of restaurants is filtered in real-time using `.filter()` and `.includes()`.

```jsx
// src/pages/Restaurant.jsx
const restList = restaurants.filter((res) =>
  res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
// This 'restList' is then what gets rendered to the screen.
```

---

## 15. Cart Management (Detailed)

### 🔹 Concept Explanation
**What it is:** The logic handling the accumulation of products, quantity adjustments, and price calculations before purchase.
**What problem it solves:** Allows users to build an order from multiple different items and review costs.

### 🔹 How It Is Implemented in This Project
**Files:** `CartPage.jsx`, `cartSlice.js`.
**Usage:**
-   **Redux Slice:** Handles the raw data (`items` array, `restaurant` info).
-   **Bill Calculation:** Computed locally in `CartPage.jsx` based on the Redux data. It calculates Item Total, GST, Platform Fee, and Delivery Fee efficiently.

```jsx
// src/pages/CartPage.jsx (Bill Calculation)
const itemTotal = data.reduce((acc, curr) => {
  return acc + (curr.price / 100 * (curr.quantity || 1));
}, 0);
const gst = itemTotal * 0.05; 
const toPay = itemTotal + deliveryFee + platformFee + gst;
```

---

## 16. React Fragments

### 🔹 Concept Explanation
**What it is:** A common pattern for a component to return multiple elements without adding an extra node (like `div`) to the DOM. usage `<>...</>` or `<React.Fragment>...</React.Fragment>`.
**What problem it solves:** Keeps the DOM cleaner and avoids breaking layouts (like Flexbox or Grid) that depend on parent-child relationships.

### 🔹 How It Is Implemented in This Project
**Files:** `Home.jsx`, `App.jsx`, `Auth.jsx`.
**Usage:** Wrapping sibling components (like HeroSection and Carousel) for the route return.

```jsx
// src/pages/Home.jsx
const Home = () => {
  return (
    <>
      <div className="">
        <HeroSection />
      </div>
      <RestaurantCarousal />
    </>
  );
};
```

---

## 17. Performance Hooks (useMemo)

### 🔹 Concept Explanation
**What it is:** A React Hook that caches the result of a calculation between re-renders.
**What problem it solves:** Prevents expense operations from running on every render. If the inputs haven't changed, it returns the stored result.

### 🔹 How It Is Implemented in This Project
**Files:** `RestaurantCarousal.jsx`.
**Usage:** Caching the list of currently visible carousel items so it's only recalculated when pagination changes, not on every resize or parent render.

```jsx
// src/components/RestaurantCarousal.jsx
const visibleItems = useMemo(() => {
  return restInfo.slice(currentIndex, currentIndex + itemsPerPage);
}, [restInfo, currentIndex, itemsPerPage]);
// Only recalculates 'visibleItems' if the index or page size changes.
```

---

## 18. JavaScript Array Methods (Map, Filter, Reduce)

### 🔹 Concept Explanation
**What they are:** Built-in JavaScript methods for transforming arrays, which are essential in React for data handling.
-   **Map**: Transforms every element in an array and returns a new array (used for lists).
-   **Filter**: Selects a subset of elements based on a condition (used for search/filtering).
-   **Reduce**: Accumulates all elements into a single value (used for totals).

**What problem it solves:** They allow for cleaner, "declarative" code compared to traditional `for` loops.

### 🔹 How It Is Implemented in This Project
**Files:** `RestaurantMenu.jsx`, `Restaurant.jsx`, `CartPage.jsx`.
**Usage:**
-   **Map:** Converting a list of data objects into a list of JSX components.
-   **Filter:** specific restaurants based on the search text.
-   **Reduce:** Calculating the Single "Total to Pay" number from the list of cart items.

```jsx
// 1. MAP (Rendering Lists) - src/components/RestaurantMenu.jsx
{categories.map((category) => (
  <RestaurantCategories key={category.title} data={category} />
))}

// 2. FILTER (Search Logic) - src/pages/Restaurant.jsx
const restList = restaurants.filter((res) =>
  res.info.name.toLowerCase().includes(searchText)
);

// 3. REDUCE (Cart Total) - src/pages/CartPage.jsx
const itemTotal = data.reduce((acc, curr) => {
  return acc + (curr.price / 100 * (curr.quantity || 1));
}, 0);
```

---

## 19. Asynchronous Operations (Async/Await)

### 🔹 Concept Explanation
**What it is:** A modern syntax for handling asynchronous code (operations that take time to complete, like API calls). It makes asynchronous code look and behave like synchronous code.
**What problem it solves:** It avoids "Callback Hell" and complex Promise chains `.then().catch()`, making code much easier to read and debug.

### 🔹 How It Is Implemented in This Project
**Files:** `useFetchMenu.js`, `useFetchResto.js`.
**Usage:** Used inside `useEffect` hooks to fetch data from the Swiggy API before rendering the page.

```javascript
// src/hooks/useFetchMenu.js
const FetchMenu = async () => {
  // 1. Pauses here until fetch is complete
  const data = await fetch(MENU_API + resId);
  
  // 2. Pauses here until JSON parsing is complete
  const json = await data.json();
  
  // 3. Updates state only after data is ready
  setmenuInfo(json.data);
};

useEffect(() => {
  FetchMenu();
}, []);
```
