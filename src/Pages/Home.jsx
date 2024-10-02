const Home = () => {
  const wallpapers = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&q=80",
      alt: "Nature Wallpaper 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1727409492354-dc440e11eb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Temple Wallpaper",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1726831282644-dee648144fad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Rainbow Wallpaper",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1725941421510-82f1b0e14696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Women Wallpaper",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Featured Wallpapers</h1>
      <div style={styles.grid}>
        {wallpapers.map((wallpaper) => (
          <div key={wallpaper.id} style={styles.card}>
            <img src={wallpaper.src} alt={wallpaper.alt} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingBottom: "100px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
};

export default Home;
