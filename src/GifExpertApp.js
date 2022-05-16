import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "one Punch",
  ]);
  //   const handleAdd =  () =>{

  //     setCategories(["HunterxHunter", ...categories ])
  //   }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

        {categories.map((x) => {
          return <GifGrid category={x} key={x}/>;
        })}

    </>
  );
};

export default GifExpertApp;
