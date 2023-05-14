import "@/styles/globals.css";
// import "@/styles/About.module.css";
import { Fragment } from "react";
import Navigation from "./navigation";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <Component {...pageProps} />
    </Fragment>
  );
}
