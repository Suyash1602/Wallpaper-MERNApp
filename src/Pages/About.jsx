const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our wallpaper website! We offer a vast collection of
        high-quality wallpapers to enhance the look of your desktop or mobile
        device. Whether you're looking for nature, abstract, or tech-inspired
        wallpapers, we have something for everyone. Enjoy browsing and
        downloading our free collection of stunning images.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#e6f7ff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#004d99",
  },
  text: {
    fontSize: "1.2rem",
    color: "#333",
    maxWidth: "600px",
    margin: "0 auto",
  },
};

export default About;
