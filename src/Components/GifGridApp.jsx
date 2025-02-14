
import { useEffect, useState } from "react";
import { getGifs } from "./Helpers/GetGifs";
// import { useFetchGifs } from "./Hooks/FetchImage";

export const GifGridApp = ({ category }) => {
  // const {images, loading } = useFetchGifs(category) 
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      console.log(`Buscando GIFs para la categoría: ${category}`);
      
      const newImages = await getGifs(category);
      console.log("Nuevos GIFs obtenidos:", newImages);

      // Comprobamos si los GIFs realmente cambiaron antes de actualizar el estado
      if (JSON.stringify(newImages) !== JSON.stringify(images)) {
        setImages(newImages);
      }
    };

    fetchImages();
  }, [category]); // Se ejecuta cuando cambia la categoría

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          images.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
