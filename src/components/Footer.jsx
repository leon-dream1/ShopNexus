import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] ">
      <footer className="container mx-auto footer text-base-content p-[50px]">
        <aside className="  space-y-2">
          <Link to="/">
            <p className="text-[30px] font-playfair font-bold">
              Shop<span className="italic">N</span>exus.
            </p>
          </Link>
          <p className="text-xl"> Providing reliable Product since 2003</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <aside className="text-center py-3">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          ShopNexus
        </p>
      </aside>
    </div>
  );
};

export default Footer;
