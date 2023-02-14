import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/ThemeProvider"

import App from "./App";
import store from "./store/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </Provider>
    </BrowserRouter>
);
