import { Outlet } from "react-router-dom";

import MainHeader from "./MainHeader";

function RootLayout () {
   return (
      <>
         <MainHeader />
         <Outlet />
      </>
   );
}

export default RootLayout;
