import style from "./style.module.css";

function LayoutBlock({ title, urlBg, colorBg, children }) {
  const styleLayout = {
    backgroundColor: colorBg || "none",
    backgroundImage: `url(${urlBg})`,
  };

  return (
    <section className={style.root} style={styleLayout}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={`${style.desc} ${style.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
}

export default LayoutBlock;
