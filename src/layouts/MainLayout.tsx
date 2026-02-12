import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Box from "@mui/material/Box";

import DetailModal from "src/components/DetailModal";
import ItemPortalContainer from "src/components/ItemPortalContainer";
import DetailModalProvider from "src/providers/DetailModalProvider";
import PortalProvider from "src/providers/PortalProvider";
import { MAIN_PATH } from "src/constant";
import { Footer, MainHeader } from "src/components/layouts";
import MainLoadingScreen from "src/components/MainLoadingScreen";

export default function MainLayout() {
  const location = useLocation();
  const navigation = useNavigation();
  // Check if we're on the root path (select profile page)
  // The pathname will be just '/' when at the base route
  const isSelectProfilePage = location.pathname === '/';
  
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
        margin: 0, 
        padding: 0,
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      {!isSelectProfilePage && <MainHeader />}
      {navigation.state !== "idle" && <MainLoadingScreen />}
      <DetailModalProvider>
        <DetailModal />
        <PortalProvider>
          <Outlet />
          <ItemPortalContainer />
        </PortalProvider>
      </DetailModalProvider>
      {location.pathname !== `/${MAIN_PATH.detail}` && !isSelectProfilePage && <Footer />}
    </Box>
  );
}
