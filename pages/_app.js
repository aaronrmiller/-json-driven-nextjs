import '../styles/globals.css';
import FormState from '../components/formState';

function MyApp({ Component, pageProps }) {
    return (
        <FormState>
            <Component {...pageProps} />
        </FormState>
    );
}

export default MyApp;
