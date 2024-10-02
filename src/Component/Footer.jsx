const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} WallpaperWebsite by Suyash. All rights reserved.
      </p>
      <div style={styles.socialLinks}>
        <a href="https://facebook.com" style={styles.link}>
          Facebook
        </a>
        <a href="https://twitter.com" style={styles.link}>
          Twitter
        </a>
        <a href="https://instagram.com" style={styles.link}>
          Instagram
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
  },
  text: {
    margin: 0,
  },
  socialLinks: {
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#ddd",
  },
};

export default Footer;
