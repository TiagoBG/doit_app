import Login from '../components/LogIn';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import Fondo from "../images/fondo.jpg";

export default function Home(){
    return(
        <section style={{backgroundImage: `url(${Fondo})`, backgroundSize: '100vw 120vh'}}>
            <Header/>
            <Login/>
            <Footer/>
        </section>
    )
}