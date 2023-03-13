import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Box,
  Button,
  Flex,
  FusionThemeProvider,
  IconAltusLogo,
  NavBar,
  Tab,
  Tabs,
} from "fusion";

const AppRemote = React.lazy(() => import("remoteApp/App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FusionThemeProvider>
      <NavBar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Flex>
          <Box
            sx={{
              ml: 2,
            }}
          >
            <IconAltusLogo size="large" />
          </Box>
          <Tabs value={2}>
            <Tab label="Amogus" value={0} />
            <Tab label="Chromatin" value={1} />
            <Tab label="Pachyderma" value={2} />
            <Tab disabled label="Disabled" value={3} />
          </Tabs>
        </Flex>
        <Flex>
          <Button variant="secondary">Button</Button>
        </Flex>
      </NavBar>
      <App />
      <hr />
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppRemote />
      </React.Suspense>
    </FusionThemeProvider>
  </React.StrictMode>
);
