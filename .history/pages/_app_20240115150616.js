// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import App from "@/app/title/page";
function MyApp({ Component, pageProps }) {
  return (
    <App>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </App>
  );
}

export default MyApp;
