import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  

  const [Categories, setCategories] = useState(
    ["boku no hero"]
  );



  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      

      <ol>
        {
            Categories.map(category => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        }
      </ol>
    </Fragment>
  );
};
