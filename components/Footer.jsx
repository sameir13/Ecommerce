import Link from "next/link";

const Footer = () => {
  return (
    <section className="MainFooterSection MaxFooter">
      <div className="bannerMainProducts">
        <div className="bannerDiv">
          <img src="/images/banner`.svg" alt="Footer Banner Ecommerce" />
          <div className="bannerdivtext">
            <h5>PTA Approved</h5>
            <p>Mobile Phone</p>
          </div>
        </div>

        <div className="bannerDiv">
          <img src="/images/banner2.svg" alt="Footer Banner Ecommerce" />
          <div className="bannerdivtext">
            <h5>1 Year</h5>
            <p>Brand Warranty</p>
          </div>
        </div>

        <div className="bannerDiv">
          <img src="/images/banner3.svg" alt="Footer Banner Ecommerce" />
          <div className="bannerdivtext">
            <h5>48hr Delivery</h5>
            <p>Open Parcel</p>
          </div>
        </div>

        <div className="bannerDiv">
          <img src="/images/banner4.svg" alt="Footer Banner Ecommerce" />
          <div className="bannerdivtext">
            <h5>Free Delivery</h5>
            <p>All Over Pakistan</p>
          </div>
        </div>
      </div>

      <footer className="ProductLandingPageFooter">
        <div className="FooterDivCol1">
          <div className="footerMainLogo">
            <img src="/images/footerlogo.svg" alt="" />
          </div>

          <div className="footerMainCol1Links">
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Press & Blog</Link>
            <Link href={"/"}>Terms & Condition</Link>
          </div>
        </div>

        <div className="FooterDivCol1">
          <div className="footerMainLogo">
            <p>Customer Service</p>
          </div>

          <div className="footerMainCol1Links">
            <Link href={"/"}>Help Center</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Installments Plan</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>E-Warranty Activation</Link>
          </div>
        </div>

        <div className="FooterDivCol1">
          <div className="FooterPaymentDiv">
            <p>Secure Payments Methods</p>
            <img
              src="https://static.priceoye.pk/images/payment_method.svg"
              alt=""
            />
          </div>
        </div>
      </footer>

      <div className="FooterMainHelpIcons">
        <div className="helpMainDiv1">
          <p>PriceOye.pk</p>
        </div>
        <div className="helpMainDiv1">
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
        <div className="helpMainDiv1" style={{ visibility: "hidden" }}>
          <p>euhuhssssssssssssssss</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
