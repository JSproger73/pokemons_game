import cn from "classnames";

import style from "./style.module.css";

function LayoutBlock({ title, urlBg, colorBg, children }) {
  const styleLayout = {
    backgroundColor: colorBg || "none",
    backgroundImage: `url(${urlBg})`,
  };

  return (
    <section className={cn(style.root)} style={styleLayout}>
      <div className={cn(style.wrapper)}>
        <article>
          <div className={cn(style.title)}>
            <h3>{title}</h3>
            <span className={cn(style.separator)}></span>
          </div>
          <div className={cn(style.desc, style.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
}

export default LayoutBlock;
