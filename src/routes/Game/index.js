import cn from "classnames";
import { useState, useEffect } from "react";

import PokemonCard from "../../components/PokemonCard";

import database from "../../service/firebase";

import style from "../Game/style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const addPokemon = () => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set({
      name: "NewPokemon",
      id: Date.now(),
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      values: {
        top: 6,
        right: "A",
        bottom: 2,
        left: 8,
      },
      active: true,
      type: "poison",
    });
  };

  const clickPokemonCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = true;
        }

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  return (
    <div>
      <div className={cn(style.container)}>
        <button onClick={addPokemon} className={cn(style.buttonHome)}>
          ADD NEW POKEMON
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
