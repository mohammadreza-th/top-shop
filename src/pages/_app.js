import { ChakraProvider , extendTheme} from "@chakra-ui/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../config/store";

const theme = extendTheme({
  fonts:{
    body:"SFProRounded"

  }
}  )

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
