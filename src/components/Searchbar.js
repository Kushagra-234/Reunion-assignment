import React from "react";
import "./searchbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Card from "./Card";
// import { data } from "../mockdata/Mockdata";

const Searchbar = ({ data }) => {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (e) => {
    const searchword = e.target.value;
    // console.log(searchword);
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchword.toLowerCase());
    });
    setFilterData(newfilter);
  };

  const callCard = ({ data }) => {
    const word = data.name;
    console.log(word);

    // if({data.name}=={value.name})

    return <></>;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ms-2 mt-5 searchheading">
            Search Properties to Rent
          </div>
          <div className="col ms-5  mt-5">
            <div className="search">
              <input
                className=" mt-2 searchitem"
                placeholder="Search with
                searchbar..."
                onChange={handleFilter}
              />

              <IoMdArrowDropdown className="icon2" />
            </div>

            {/* this logic states that filtering only works when there is a data and not when search field is empty */}

            {filterData.length != 0 && (
              <div className="dataresult">
                {filterData.map((value, key) => {
                  return (
                    <div className="dataitem" onClick={callCard}>
                      {value.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <Card />
    </>
  );
};

export default Searchbar;
