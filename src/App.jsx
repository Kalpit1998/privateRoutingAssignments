import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import {Privateroute} from "./components/Privateroute";
import {Dashboardsetting} from "./components/DashboardSetting";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/dashboard"} element={<Privateroute><Dashboard/></Privateroute>}></Route>
        <Route path={"/dashboard/settings"} element={<Privateroute><Dashboardsetting /></Privateroute>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
