import Header from "../components/Header";
import Products from "../components/Products";
import BannerImage from "../components/BannerImage";
import MidProducts from "../components/MidProducts";

const index = () => {
  return (
    <div>
      <Header />
      <Products/>
      <MidProducts/>
      <Products/>
      <BannerImage/>

    </div>
  );
};

export default index;
