import React, { useState } from "react";
import classes from "./Store.module.scss";
import product_data from "../store-data/Products";
import Products from "../components/Products/Products";
import { useParams } from "react-router";

const Store = (props) => {
  const params = useParams();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedClubs, setSelectedClubs] = useState([]);
  const { category, subcategory } = params;

  let filterdProducts;

  const pushSelectedBrand = (brand) => {
    const brands = [...selectedBrands];
    const index = brands.findIndex((b) => b.brand === brand);
    setSelectedBrands((prevState) => {
      if (selectedBrands.includes(brand)) {
        brands.splice(index, 1);
        return brands;
      } else {
        brands.push(brand);
        return brands;
      }
    });
  };

  const pushSelectedClub = (club) => {
    const clubs = [...selectedClubs];
    const index = clubs.findIndex((c) => c.club === club);
    setSelectedClubs((prevState) => {
      if (clubs.includes(club)) {
        clubs.splice(index, 1);
        return clubs;
      } else {
        clubs.push(club);
        return clubs;
      }
    });
  };

  const clearAllFiltersHandler = () => {
    setSelectedClubs([]);
    setSelectedBrands([]);
  };

  if (!category && !subcategory) {
    filterdProducts = product_data;
    if (selectedBrands.length > 0) {
      filterdProducts = filterdProducts.filter((prod) =>
        selectedBrands.includes(prod.brand.toLowerCase())
      );
    }
    if (selectedClubs.length > 0) {
      filterdProducts = filterdProducts.filter((prod) =>
        selectedClubs.includes(prod.type.toLowerCase())
      );
    }
  }

  if (category && subcategory) {
    filterdProducts = product_data.filter((prod) => {
      return prod.category === category && prod.type === subcategory;
    });
  }

  if (category && subcategory === "shop-all") {
    filterdProducts = product_data.filter((prod) => {
      return prod.category === category;
    });
  }

  if (category === "sale") {
    filterdProducts = product_data.filter((prod) => {
      return prod.saleItem && prod.type === subcategory;
    });
  }

  if (category === "sale" && subcategory === "shop-all") {
    filterdProducts = product_data.filter((prod) => {
      return prod.saleItem;
    });
  }

  let brands = product_data.map((prod) => {
    return prod.brand;
  }, []);

  let clubs = product_data.map((prod) => {
    return prod.type;
  });

  clubs = [...new Set([...clubs])];
  brands = [...new Set([...brands])];

  return (
    <div className={classes.Store__Container}>
      {!category && !subcategory && (
        <div className={classes.Filters}>
          <div className={classes.Filter__List}>
            <h4>Brands</h4>
            {brands.map((brand) => (
              <div className={classes.Checkbox} key={brand}>
                <input
                  checked={selectedBrands.includes(brand.toLowerCase())}
                  onChange={() => {
                    pushSelectedBrand(brand.toLowerCase());
                  }}
                  type="checkbox"
                />
                <label>{brand}</label>
              </div>
            ))}
          </div>
          <div className={classes.Filter__List}>
            <h4>Clubs</h4>
            {clubs.map((club) => (
              <div className={classes.Checkbox} key={club}>
                <input
                  checked={selectedClubs.includes(club)}
                  onChange={() => {
                    pushSelectedClub(club.toLowerCase());
                  }}
                  type="checkbox"
                  id="clubs"
                />
                <label>{club.replaceAll("-", " ")}</label>
              </div>
            ))}
          </div>
          <button onClick={clearAllFiltersHandler}>Clear All Filters</button>
        </div>
      )}
      <Products products={filterdProducts} />
    </div>
  );
};

export default Store;
