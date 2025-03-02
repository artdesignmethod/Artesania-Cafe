import Header from "../components/Header";
import About from "../components/About";
import BusinessHours from "../components/BusinessHours";
import Gallery from "../components/Gallery";
import Form from "../components/Form";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <BusinessHours />
      <Gallery />
      <Form />
    </div>
  );
};

export default HomePage;
