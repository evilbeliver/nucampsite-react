
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesList from './features/campsites/CampsitesList';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList campsite={CampsitesList[0]} />
            <Footer />
        </div>
    );
}

export default App;