import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { AppProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppProvider>
		<App />
	</AppProvider>
);
