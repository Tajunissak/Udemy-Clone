import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Saleimg from './Components/Saleimg';
import Recommendation from './Components/Recommendation';
import Topics from './Components/Selectionbar';
import Footer from './Components/Footer';
import Foots from './Components/Footering';
 



function App(){
  return(
    <div>
       <Navbar></Navbar>
       <Container></Container>
       <Saleimg></Saleimg>
       <Recommendation></Recommendation>
       <Topics></Topics>
       <Footer></Footer>
       <Foots></Foots>
    </div>
  )
}
export default App