import App from "./App";
import ContentIndex from "./contentPages/contentIndex";
import Cart from "./contentPages/cart";
import Inventory from "./contentPages/inventory";
import NotFound from "./contentPages/notfound";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Specific route for 'cart'
        path: "cart",
        element: <Cart />,
      },
      {
        // Specific route for 'inventory'
        path: "inventory",
        element: <Inventory />,
      },
      {
        // Specific route for 'contentIndex'
        path: "contentIndex",
        element: <ContentIndex />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
