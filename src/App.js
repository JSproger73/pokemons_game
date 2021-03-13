import Headerblock from "./components/HeaderBlock";
import FooterBlock from "./components/FooterBlock";
import LayoutBlock from "./components/LayoutBlock";
import layoutBg from "./assets/bg2.jpg";

function App() {
  return (
    <>
      <Headerblock
        title="This is check title header"
        descr="This is check description header"
      />
      <LayoutBlock
        title="This is title upper layout block"
        descr="This is description upper layout block"
        urlBg={layoutBg}
      />
      <LayoutBlock
        title="This is title middle layout block"
        descr="This is description middle layout block"
        colorBg="#e2e2e2"
      />
      <LayoutBlock
        title="This is title bottom layout block"
        descr="This is description bottom layout block"
        urlBg={layoutBg}
      />
      <FooterBlock />
    </>
  );
}

export default App;
