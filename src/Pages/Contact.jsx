const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>
        For inquiries, suggestions, or to submit your own wallpapers, reach out
        to us via email or phone:
      </p>
      <p style={styles.email}>Email: support@wallpaperwebsite.com</p>
      <p style={styles.phone}>Phone: 12345 67890</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    color: "#333",
    maxWidth: "600px",
    margin: "0 auto",
  },
  email: {
    fontSize: "1.5rem",
    color: "#0066cc",
    marginTop: "10px",
  },
  phone: {
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default Contact;
