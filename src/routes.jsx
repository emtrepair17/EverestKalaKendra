// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";


export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/product",
    element: <About/>,
  },
  {
    name: "Payment",
    path: "/payment",
    element: <Services/>,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact/>,
  },
  {
    name: "Payment Success",
    path: "/payment-success",
    element: <PaymentSuccess />,
    hideInNavbar: true,
  },
  {
    name: "Payment Failure",
    path: "/payment-failure",
    element: <PaymentFailure />,
    hideInNavbar: true,
  }
];

export default routes;
