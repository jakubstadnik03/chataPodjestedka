import React from "react";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";

export const ImageGallery = () => {
  const photos = [];

  for (let i = 1; i < 64; i++) {
    photos.push({
      fullsize: `img/rozstani-small${i}.jpeg`, // Append number for unique thumbnail paths
      thumbnail: `img/rozstani-large${i}.jpeg`, // Append number for unique fullsize paths
    });
  }

  return (
    <>
      <NavbarComponent />
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>
        Fotogalerie chalupy Podještědka
      </h1>
      <PhotoGallery photos={photos} />

      <Footer />
    </>
  );
};
