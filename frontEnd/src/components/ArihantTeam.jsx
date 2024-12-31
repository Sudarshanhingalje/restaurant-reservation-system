import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">ARIHANT FOOD,OUR TEAM</h1>
          <p>
          <h2>Our Team</h2>
          The team at Arihant Food is passionate about creating exceptional dining experiences. From skilled chefs who craft every dish with care to our friendly staff ensuring warm hospitality, we work together to bring you the best. At Arihant Food, dedication and teamwork are at the heart of everything we do!
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
