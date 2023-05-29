import React from "react";
import { Outlet } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

import "./App.css";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/footer/Footer";

function App() {
  const locale = LOCALES.RUSSIAN;

  return (
    <Provider store={store}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.RUSSIAN}
      >
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </IntlProvider>
    </Provider>
  );
}

export default App;
