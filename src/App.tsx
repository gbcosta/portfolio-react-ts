import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import { Navbar } from "@components/navbar";
import { Index } from "./pages";
import { About } from "@pages/about";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Projects } from "@pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
