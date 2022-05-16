
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
