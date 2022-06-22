import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container p-10 m-10">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
