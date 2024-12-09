import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '@pancakeswap/uikit';
import AOS from 'aos';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css';
import IndexPage from './pages';

function App() {
    const [loginState, setLoginState] = useState(localStorage.getItem('loginstate'));

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    useEffect(() => {
        setLoginState(localStorage.getItem('loginstate'));
    }, [localStorage.getItem('loginstate')]);

    const theme = light;

    return (
        <ThemeProvider theme={theme}>
            <IndexPage />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
