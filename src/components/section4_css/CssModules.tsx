
import classes from "./CssModules.module.scss"; // ここでは拡張子まで指定
type Props = {

}
const CssModules: React.FunctionComponent<Props> = () => {
  console.log("CssModules レンダリング!");
  // ■セクション4: 様々なCSSの当て方に触れる 29m
  // ●13. CSS Modules 7m

  // 変数classesにまとめて格納されているので、展開して使う。
  return (
    <div className={classes.containerStyle}>
        <p className={classes.titleStyle}>CssModulesだよ</p>
        <button className={classes.buttonStyle}>FIGHT!!</button>
    </div>
  )
};

export default CssModules;