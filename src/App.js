import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Routes, Route, Navigate} from "react-router-dom";
import {NavBar} from "./component/layout/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import {Home} from "./component/main/Home";
import {Login} from "./component/main/Login";
import {Registration} from "./component/main/Registration";
import {Forgot} from "./component/main/Forgot";
import {Reset} from "./component/main/Reset";

function App() {
  const theme = createTheme();
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login/>} />
          <Route path="registration" element={<Registration/>} />
          <Route path="forgot" element={<Forgot/>} />
          <Route path="reset" element={<Reset/>} />
          {/*<Route path="success" element={!isAuth ? <Navigate to='/' /> :<SuccessPage/>} />*/}
        </Routes>
      </ThemeProvider>
  );
}

export default App;
