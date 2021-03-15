import { useState } from "react";
import cn from "classnames";

import bgImg from "./assets/card-back-side.jpg";

import style from "./style.module.css";

function PokemonCard({ name, img, id, type, values }) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={style.root} onClick={handleClick}>
      <div className={cn(style.pokemonCard, { [style.active]: isActive })}>
        <div className={cn(style.cardFront)}>
          <div className={cn(style.wrap, style.front)}>
            <div className={cn(style.pokemon, style[type])}>
              <div className={cn(style.values)}>
                <div className={cn(style.count, style.top)}>{values.top}</div>
                <div className={cn(style.count, style.right)}>
                  {values.right}
                </div>
                <div className={cn(style.count, style.bottom)}>
                  {values.bottom}
                </div>
                <div className={cn(style.count, style.left)}>{values.left}</div>
              </div>
              <div className={cn(style.imgContainer)}>
                <img src={img} alt={name} />
              </div>
              <div className={cn(style.info)}>
                <span className={cn(style.number)}>{id}</span>
                <h3 className={cn(style.name)}>{name}</h3>
                <small className={cn(style.type)}>
                  <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(style.cardBack)}>
          <div className={cn(style.wrap, style.back)}>
            <img src={bgImg} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
