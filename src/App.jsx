import "./App.css";
import Homepage from './pages/homepage/Homepage.jsx';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/app-header/Navbar.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return <AppRouter />
}

export default App;
