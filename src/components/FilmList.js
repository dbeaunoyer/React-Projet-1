import React from "react";
import FilmItem from "./FilmItem";

function FilmList(props) {
  return (
    <div>
      {props.menuItems.map((menuItem) => (
        <div>
          <FilmItem itemInfo={menuItem} key={menuItem.id} />
        </div>
      ))}
    </div>
  );
}

export default FilmList;
