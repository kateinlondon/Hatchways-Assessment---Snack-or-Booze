### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

Ans- React Router is a library used in React applications to handle navigation and routing. It enables Single Page Applications (SPAs) to have multiple views without requiring a full page reload. React Router manages URL changes and renders different components accordingly, allowing for a seamless user experience.

- What is a single page application?

Ans- A Single Page Application (SPA) is a web application that dynamically updates content on the same page instead of reloading the entire page for each navigation action. SPAs use JavaScript to fetch and render content dynamically, resulting in faster performance and a more interactive experience.

- What are some differences between client side and server side routing?

Ans- Client-side and server-side routing are two different approaches to handling navigation in web applications.

Server-side routing occurs when a user requests a new page from the server, and the server responds by sending the entire HTML document for that page. This approach is traditional and works well for SEO because each page is fully rendered and indexed by search engines. However, it leads to slower navigation, as every page change requires a new request to the server, resulting in longer load times and potential flickering when the page refreshes.

Client-side routing, on the other hand, is managed by JavaScript within the browser. Instead of making full-page reloads, the application dynamically updates the view by modifying the URL and rendering new content without requesting a full new page from the server. This approach makes navigation much faster and provides a smoother user experience, as only the necessary components of the page are updated. However, client-side routing requires additional configurations for SEO optimization, as search engines primarily index server-rendered pages.

Overall, server-side routing is beneficial for static, content-heavy websites where SEO is crucial, while client-side routing is ideal for dynamic applications that prioritize speed and interactivity, such as Single Page Applications (SPAs).


- What are two ways of handling redirects with React Router? When would you use each?

Ans- 
1- Using <Navigate> (React Router v6)
Used when you want to redirect a user programmatically.

Example:

import { Navigate } from "react-router-dom";
function Home() {
    return <Navigate to="/dashboard" />;
}

2- Use Case: Redirecting users after a login action.
Using useNavigate() hook
Allows redirection inside event handlers.

Example:
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/dashboard");
    };
    return <button onClick={handleLogin}>Login</button>;
}


- What are two different ways to handle page-not-found user experiences using React Router? 
Ans-
1- Using a <Route> with path="*"

Matches any undefined routes and displays a custom 404 page.
Example:
import { Route, Routes } from "react-router-dom";

function NotFound() {
    return <h2>404 - Page Not Found</h2>;
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

2-Redirecting to a specific page

Automatically sends users to a default page instead of showing a 404 message.
Example:
<Route path="*" element={<Navigate to="/" />} />


- How do you grab URL parameters from within a component using React Router?

Ans- You can use the useParams() hook from React Router to access URL parameters.

Example:
import { useParams } from "react-router-dom";

function UserProfile() {
    let { username } = useParams();
    return <h2>Welcome, {username}!</h2>;
}

If the route is /profile/johndoe, username will be "johndoe".


- What is context in React? When would you use it?
Ans- Context in React is a way to pass data through the component tree without manually passing props at every level. It is useful for managing global state, such as themes, authentication, or user preferences.

Example:
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <div className={theme}>Current Theme: {theme}</div>;
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}

Use Case: When multiple components need access to the same data without prop drilling.



- Describe some differences between class-based components and function
  components in React.

Ans- Class-based components and function components are two different ways of defining React components. Class-based components use ES6 class syntax and rely on this.state and lifecycle methods like componentDidMount and componentDidUpdate to manage state and side effects. These components can become complex and harder to maintain, especially when dealing with large-scale applications.

On the other hand, function components are simpler and use hooks to manage state and lifecycle behavior. Hooks like useState allow function components to maintain local state, while useEffect replaces lifecycle methods. Function components are more lightweight, improve readability, and promote code reuse through custom hooks. Since React 16.8, function components have become the preferred way to write React applications due to their efficiency and flexibility.

- What are some of the problems that hooks were designed to solve?

Ans- Hooks were introduced in React 16.8 to address the following problems:

1- Reducing Complexity in Class Components

Before hooks, class components required complex lifecycle methods (componentDidMount, componentDidUpdate) to manage state and side effects.
Hooks like useState() and useEffect() make state and effects easier to manage.

2- Avoiding Prop Drilling

Context API combined with useContext() eliminates the need to pass props down multiple levels.

3- Code Reusability with Custom Hooks

Hooks allow logic to be reused across multiple components.
Example: Creating a custom hook for fetching data.