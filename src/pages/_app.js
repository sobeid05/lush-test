import { ApolloProvider } from "@apollo/client";
import { createClient } from "../lib/apollo-client";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import "../styles/globals.css";

const client = createClient();

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <TopNav />
    <div className="overflow-hidden">
      <Component {...pageProps} />
    </div>
    <Footer />
  </ApolloProvider>
);

export default App;
