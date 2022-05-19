import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import Container from "./components/Container/Container";
import SideBar from "./components/Sidebar/SideBar";
import Section from "./components/Section/Section";
import NearFooter from "./components/NearFooter/NearFooter";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className=" text-black font-semibold h-screen  py-2 overflow-x-hidden">
      <NavBar />
      <Slogan />
      <Container />
      <SideBar />
      <Section />
      <NearFooter />
      <Footer />
    </div>
  );
}

export default App;
