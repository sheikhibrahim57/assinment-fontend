
import Banner from "./component/Banner/Banner"
import Client from "./component/Client/Client"
import Footer from "./component/Footer/Footer"
import Latest from "./component/Latest/Latest"
import Navbar from "./component/Navbar/Navbar"
import Process from "./component/Process/Process"
import Services from "./component/Services/Services"
import Who from "./component/Who/Who"
import Work from "./component/Work/Work"




function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Who/>
      <Work/>
      <Process/>
      <Client/>
      <Latest/>
      <Footer/>
    </>
  )
}

export default App
