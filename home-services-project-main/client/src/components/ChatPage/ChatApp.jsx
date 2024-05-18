import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import "./ChatApp.css";
import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat";
import {
  AppContextProvider,
  useAppContext,
} from "../../../../server/apps/chat.jsx";

function ChatApp() {
  const { username, setUsername, routeHash } = useAppContext();

  //   if (routeHash) {
  //     if (routeHash.endsWith("&type=recovery")) {
  //       window.location.replace(`/login/${routeHash}`);
  //     }
  //     if (routeHash.startsWith("#error_code=404"))
  //       return (
  //         <div>
  //           <p>This link has expired</p>
  //           <a href="/" style={{ cursor: "pointer" }} variant="link">
  //             Back to app
  //           </a>
  //         </div>
  //       );
  //   }
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Box bg="gray.100">
          <Header />
          <Chat />
          <Footer />
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default ChatApp;
