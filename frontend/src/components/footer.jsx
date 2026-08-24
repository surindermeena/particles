import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} React Tutorial. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
