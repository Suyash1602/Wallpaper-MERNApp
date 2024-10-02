import React, { useState } from "react";

const Gallery = () => {
  const wallpapers = [
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3573359/pexels-photo-3573359.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414174/pexels-photo-414174.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/347136/pexels-photo-347136.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/374019/pexels-photo-374019.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1118857/pexels-photo-1118857.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414158/pexels-photo-414158.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/414174/pexels-photo-414174.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/724694/pexels-photo-724694.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const wallpapersPerPage = 4;

  // Calculate the index range for current wallpapers
  const indexOfLastWallpaper = currentPage * wallpapersPerPage;
  const indexOfFirstWallpaper = indexOfLastWallpaper - wallpapersPerPage;
  const currentWallpapers = wallpapers.slice(
    indexOfFirstWallpaper,
    indexOfLastWallpaper
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(wallpapers.length / wallpapersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Wallpaper Gallery</h1>
      <div style={styles.grid}>
        {currentWallpapers.map((src, index) => (
          <div key={index} style={styles.card}>
            <img
              src={src}
              alt={`Wallpaper ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>
      <div style={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={styles.pageButton}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    paddingBottom: "80px",
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
  pagination: {
    marginTop: "20px",
  },
  pageButton: {
    margin: "0 5px",
    padding: "10px 15px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Gallery;
