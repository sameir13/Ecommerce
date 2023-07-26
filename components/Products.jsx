import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        backgroundColor: "#f1f3f6",
      }}
    >
      <div className="ProductPageaParent MaxPad ">
        <div className="DashboardProd">
          <h3>Latest Wireless Earbuds</h3>
        </div>

        <div className="ProductsGridMain ">
          <Slider {...settings}>
            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>


            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>


            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>

                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>


            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>


            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>

              <div className="ProductGridCard">
                <div className="CardImage">
                  <img src="/images/prod2.webp" alt="" />
                </div>
                <div className="gridCardText">
                  <p>
                    Soundpeats GoFree Open Ear Extreme Comfort Sport Earbuds{" "}
                  </p>
                  <h2>Rs 4,449</h2>
                  <p>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs 9,999
                    </span>{" "}
                    (50% off){" "}
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
