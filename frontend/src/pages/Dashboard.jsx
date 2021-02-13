import Dashboard from '../components/Dashboard';
import NewTask from '../components/NewTask';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import Fondo from "../images/fondo.jpg";

export default function Home() {
    return (
        <section style={{ backgroundImage: `url(${Fondo})`, backgroundSize: '100vw 120vh' }}>
            <Header />
            <div className="d-flex ml-4 mr-4 justify-content-between">
                <NewTask />
            </div>
            <Dashboard />
            <Footer />
        </section>
    )
}