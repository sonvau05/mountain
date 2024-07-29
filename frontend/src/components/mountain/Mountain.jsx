import React from "react";
import { useState } from "react";

const mountains = [
  {
    id: 1,
    name: "Everest",
    country: "Nepal",
    
    description:
      "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China Nepal border runs across its summit point.",
  },
  {
    id: 2,
    name: "K2",
    country: "Pakistan",
  
    description:
      "K2, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres (29,032 ft).",
  },
  {
    id: 3,
    name: "Kangchenjunga",
    country: "India",
  
    description:
      "Kangchenjunga, also spelled Kanchenjunga, Kanchanjanghā and Khangchendzonga, is the third-highest mountain in the world. Its summit lies at 8,586 m (28,169 ft) in a section of the Himalayas.",
  },
  {
    id: 4,
    name: "Makalu",
    country: "Nepal",

    description:
      "Lhotse is the fourth-highest mountain on Earth, after Mount Everest, K2, and Kangchenjunga.",
  },
  {
    id: 5,
    name: "Cho Oyu",
    country: "China",

    description:
      'Cho Oyu is the sixth-highest mountain in the world at 8,188 metres (26,864 ft) above sea level. Cho Oyu means "Turquoise Goddess" in Tibetan.',
  },
  {
    id: 6,
    name: "Dhaulagiri",
    country: "Nepal",

    description:
      "Dhaulagiri, located in Nepal, is the seventh highest mountain in the world at 8,167 metres (26,795 ft) above sea level, and the highest mountain within the borders of a single country. It was first climbed on 13 May 1960 by a Swiss-Austrian-Nepali expedition.",
  },
];

const Mountain=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredMountains = mountains.filter((mountain) => {
    return (
      (mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === "") &&
      (selectedCountry === "" || mountain.country.includes(selectedCountry))
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="inf-sort col-2 mt-5">
          <div className="form-group">
            <label htmlFor="countrySelect">Select a Country:</label>
            <div className="position-relative">
            <select className="form-control custom-select form-select" id="countrySelect" onChange={handleCountryChange}>
              <option value="">All Countries</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Pakistan">Pakistan</option>
              <div className="select-arrow"></div>
            </select>
            </div>
          </div>
        </div>

        <div className="mountain-inf col-9">

         {/* thanh search */}
         <form className="d-flex mb-2" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
              className="form-control me-2"
              type="search"
              placeholder="Search.."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            </form>
          <div className="row gy-5">
            {filteredMountains.map((mountain) => (
              <div className="mountain-inf-container col-4" key={mountain.id}>
                <div className="mountain-item p-3 mb-1">
                  <img src={mountain.img} className="img-fluid" alt={mountain.name} />
                  <p className="description">{mountain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
