import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LinearProgress } from "@mui/material";
import store from "./store";
import About from "./features/About/About";
import Home from "./features/Home/Home";
import { ErrorBoundary } from "./ErrorBoundary";
import { AuthCallback } from "./auth/AuthCallback";
import { StatefulAuthProvider } from "./auth/StatefulAuthProvider";
import { Profile } from "./features/Profile/Profile";
import { AuthenticatedGuard } from "./auth/AuthenticatedGuard";
import { Protected } from "./features/Protected/Protected";

const Movies = lazy(() => import("./features/Movies/Movies"));

function AppEntrypoint() {
  return (
    <StatefulAuthProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </StatefulAuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppEntrypoint />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies",
        element: (
          <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
            <Movies />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <AuthenticatedGuard component={Profile} />,
      },
      {
        path: "protected",
        element: <AuthenticatedGuard component={Protected} />,
      },
      {
        path: "callback",
        element: <AuthCallback />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
