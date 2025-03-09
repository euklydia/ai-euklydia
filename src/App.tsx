import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";
import "animate.css";

import "./assets/styles/animate.css";
import "./assets/styles/font-awesome.css";
import "./assets/styles/flaticon-set.css";

import "./assets/styles/helper.css";
import "./assets/styles/unit-test.css";
import "./assets/styles/validnavs.css";
import "./assets/styles/style.css";

import { useEffect, useState } from "react";
import { Routers } from "./routers/Routers";
import { Preloader } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return isLoading ? <Preloader /> : <Routers />;
}

export default App;
