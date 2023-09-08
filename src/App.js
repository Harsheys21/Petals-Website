import ImageSlider from './Home';
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "./Navbar"
import Footer from './Footer';
import Testimonials from './Testimonials';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from './About';
import Contact from './Contact';
import Birthdays from './Birthdays';
import Weddings from './Weddings';
import Cultural from './Cultural';
import Special from './Special';
import Services from './Services';
import Portfolio from './Portfolio';



const theme = createTheme({
  typography: {
    fontFamily: "Roboto Condensed",
    h2: {
      fontFamily: "Roboto",
      letterSpacing: "4px",
    },
  },
  palette: {
    primary: {
      main: '#ffd8e9',
    },
    secondary: {
      main: '#ffd8fc',
    },
    info: {
      main: "#ffdbd8",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<ImageSlider />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/birthdays" element={<Birthdays/>}/>
          <Route exact path="/weddings" element={<Weddings />} />
          <Route exact path="/cultural_events" element={<Cultural />} />
          <Route exact path="/special_events" element={<Special />} />
          {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;