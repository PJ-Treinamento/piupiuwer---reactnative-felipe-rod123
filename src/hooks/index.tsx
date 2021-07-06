// import React from "react";

// import { AuthProvider } from "./auth";

// const AppProvider: React.FC = ({children}) => {
//    return(
//       <AuthProvider>
//          {children}
//       </AuthProvider>
//    );
// }

// export default AppProvider;

import React from "react";

import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";

const Routes: React.FC = () => {
   return <AuthRoutes/>;
}

export default Routes;