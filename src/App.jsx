import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Success from "./pages/Success.jsx";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "/success", element: <ProtectedRoute element={Success} /> },
	{ path: "*", element: <h1>404 : Page not found</h1> },
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
