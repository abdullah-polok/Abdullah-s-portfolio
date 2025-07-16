import { RouterProvider } from "react-router";
import "./App.css";
import router from "./RouterProvider/RouterProvider";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
