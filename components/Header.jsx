import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Header = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const main = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="MainSectionOneHeader">
      <div className="navbarMainHeadline">
        <marquee direction="left">
          Deliveries in Islamabad and Lahore might get delayed due to weather
          conditions.
        </marquee>
      </div>
      <nav className="MainNavBarDiv">
        <div className="secOne">
          <div className="HamMenu">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
          <div className="logo">
            <h2>Amazon</h2>
          </div>
        </div>

        <div className="secTwo">
          <input type="search" placeholder="Search Here" />
        </div>
        <div className="secThree">
          <button className="loginBtn">Login</button>
          <button className="RegisterBtn">Register</button>
        </div>
      </nav>

      <div className="parentSlickMain">
        <div className="SlickDisplayDiv">
          <Slider {...settings}>
            <div>
              <div className="slickSubChild">
                <Image
                  src={
                    "https://static.priceoye.pk/images/home/bluetooth-speakers.svg"
                  }
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/tablets.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/laptops.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/power-banks.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/power-banks.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/mobiles.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={
                    "https://static.priceoye.pk/images/home/bluetooth-speakers.svg"
                  }
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={
                    "https://static.priceoye.pk/images/home/bluetooth-speakers.svg"
                  }
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
            <div>
              <div className="slickSubChild">
                <Image
                  src={"https://static.priceoye.pk/images/home/mobiles.svg"}
                  width={50}
                  height={50}
                ></Image>
                <div className="Slicktext">Mobiles</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="MainHeroSlider" style={{backgroundColor:"#f1f3f6"}}>
        <Slider  {...main}>
      
            <div className="MainDivSectionOneFit">
              <img src="/images/hero1.jpg" alt="" className="MainSlickImage" />
            </div>
       
      
            <div className="MainDivSectionOneFit">
              <img src="/images/hero2.jpg" alt="" className="MainSlickImage" />
            </div>
         
    
            <div className="MainDivSectionOneFit">
              <img src="/images/hero3.jpg" alt="" className="MainSlickImage" />
            </div>
       
            <div className="MainDivSectionOneFit">
              <img src="/images/hero4.jpg" alt="" className="MainSlickImage" />
            </div>
   
        </Slider>
      </div>
    </section>
  );
};

export default Header;
