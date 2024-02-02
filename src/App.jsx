import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "boxicons";
import "./css/indexStyles.css";
import AppRouter from "./routes/AppRouter";
import { db } from "./backend/db";
import { useEffect } from "react";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import "./css/HomePageStyles.css";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
