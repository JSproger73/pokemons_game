import cn from "classnames";
import { useState, useEffect } from "react";

import PokemonCard from "../../components/PokemonCard";

import database from "../../service/firebase";

import style from "../Game/style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const handleClickButton = () => {};

  const clickPokemonCard = (id) => {
    console.log("###ID :", id);
    setPokemons((prevState) => {
      return Array.from(prevState, (item) => {
        if (item.id === id) {
          item.active = true;
        }
        return item;
      });
    });
  };

  return (
    <div>
      <div className={cn(style.container)}>
        <button onClick={handleClickButton} className={cn(style.buttonHome)}>
          Add pokemon
        </button>
      </div>
      <div className={style.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={key}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              isActive={active}
              clickPokemonCard={clickPokemonCard}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
