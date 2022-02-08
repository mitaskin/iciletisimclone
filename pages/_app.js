import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Newnavigation from '../components/nav/nav';
import Kart from "/components/PostCard";


function MyApp({ Component, pageProps }) {
  return <>
  <Newnavigation/>


  <Component {...pageProps} />
  </>
}

export default MyApp
