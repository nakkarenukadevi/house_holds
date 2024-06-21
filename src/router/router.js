
import { createBrowserRouter } from "react-router-dom";


import Home from "../Home/Home";
import App from "../App";
import Tools from "../Tools/Tools";
import SingleProduct from "../SingleProduct/SingleProduct";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'tools',
                element: <Tools />
            },
            {
                path: "/singleproduct/:id",
                element: <SingleProduct />
            }
        ]
    }

]);
export default router;