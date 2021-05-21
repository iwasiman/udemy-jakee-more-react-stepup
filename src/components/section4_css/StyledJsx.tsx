
type Props = {

}
const StyledJsx: React.FunctionComponent<Props> = () => {
  console.log("CssModules レンダリング!");
  // ■セクション4: 様々なCSSの当て方に触れる 29m
  //●14. Styled JSX 5m

  // 以下のようにJSXの中に直接CSSを書く。変な感じ。hoverは書けない。Next.jsに最初から入っている。
  //TSでやるとコンパイルエラー。React、@types/reactのバージョン関係?
  // ひとまず使わないのでコメントアウト。
  return (
    <>
      <div className="containerClass">
        <p >StyledJsxだよ(TSではコンパイルエラー)</p>
        <button >FIGHT!!</button>
      </div>
{/*
      <style jsx="true">{`
.containerStyle {
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
      `}</style>
*/}
    </>
  )
};

export default StyledJsx;