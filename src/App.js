import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Routes from 'config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
