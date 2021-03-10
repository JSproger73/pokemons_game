import style from "./style.module.css";

function LayoutBlock({ title, descr, urlBg, colorBg }) {
  //const styleLayout = colorBg ? { backgroundColor: "#e2e2e2" } : {};
  const styleLayout = {
    backgroundColor: `${colorBg}`,
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
          <div className={style.desc + style.full}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default LayoutBlock;
