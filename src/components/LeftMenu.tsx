import React, { useEffect, useState } from "react";
import { IsMobileWidth } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import "./LeftMenu.css";

// create our state object called categories that contains our list of
// categories. Before we can load Category data, we need some default text, Left
// Menu.
const LeftMenu = () => {
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );
  //   Then, we have useEffect, where we make a call to our
  // getCategories function and get our Categories. Then, we use the ES6 map
  // function to convert our objects into JSX.
  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Finally, in the returned JSX, we use the Categories state object in our UI.
  return IsMobileWidth() ? null : <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
