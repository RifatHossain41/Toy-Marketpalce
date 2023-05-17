import img from '../../assets/image/img-10.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-200 text-base-content">
        <div>
          <img className="w-60" src={img} alt="" />
          <h3><span>Copyright@By</span> Jhon</h3>
        </div>
        <div>
          <span className="footer-title">Media Links</span>
          <a className="link link-hover">FaceBook</a>
          <a className="link link-hover">Youtube</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Phone</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Current Address</a>
          <a className="link link-hover">Permanent Address</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
