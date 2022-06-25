import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/graphql/index";
import store from "../src/redux/app/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container p-10 m-10">
      <CookiesProvider>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Toaster position="top-center" reverseOrder={false} />
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </CookiesProvider>
    </div>
  );
}

export default MyApp;
