import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRoutes } from "react-router-dom";

import { PublicRoute } from "@/routes";

function App() {
  // const { t, i18n } = useTranslation("common");
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      {useRoutes([...PublicRoute])}
      {/* <h2 className="text-[5rem]">{t("hello")}</h2> */}
    </div>
  );
}

export default App;
