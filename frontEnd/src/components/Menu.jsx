import React from "react";
import { data } from "../restApi.json"; // Import restaurant data

const Menu = () => {
  return (
    <>
      <section className="menu" id="popular"> {/* ID for smooth scrolling */}
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              **Our Menu**  
              Discover a world of flavors at **Arihant Food**! Our menu is
              thoughtfully crafted to offer a perfect mix of classic favorites
              and unique creations, all made with fresh, quality ingredients.
              Whether you’re in the mood for a light snack or a hearty meal,
              we’ve got something to satisfy every craving.
            </p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
