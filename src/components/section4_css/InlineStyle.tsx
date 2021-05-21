
type Props = {

}
const InlineStyle: React.FunctionComponent<Props> = () => {
  console.log("InlineStyle レンダリング!");
  // ■セクション4: 様々なCSSの当て方に触れる 29m
  // ●12. Inline Styles 6m
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px", // 角に丸み
    padding: "8px",
    margin: "8px",
    display: "flex", // 横並び
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8",
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none", // ボタン周囲の線が消える
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
        <p style={titleStyle}>InlineStyleだよ</p>
        <button style={buttonStyle}>FIGHT!!</button>
    </div>
  )
};

export default InlineStyle;