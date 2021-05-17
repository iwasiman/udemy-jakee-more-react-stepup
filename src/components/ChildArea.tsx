import React, {memo} from 'react';

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",

};
interface ChildAreaProps {
  open: boolean,
  onClickClose: () => void,
}
const ChildArea: React.FunctionComponent<ChildAreaProps> = memo(({open, onClickClose}) => {
  console.log("ChildArea レンダリング!");
  // ■セクション3: 再レンダリングの仕組みを知りレンダリングを最適化する 24m
  // テキストボックス変更時などでもレンダリングされることがある。→変数全体をmemo()で囲う

  // ループを回してこのコンポーネントが重いことにする
  // 講座の[...Array(2000).keys()] はTSだとコンパイルエラーになる
  const data: number[] = Array.from(new Array(100)).map((v,i) => i);
  data.forEach(() => {
    console.log("...ながいよ");
  });
  return (
    <>
      {open ? (
        <div style={style}>
        <p>子コンポーネントだよ</p>
        <button onClick={onClickClose}>閉じるよ</button>
        </div>
      ) : "empty"}
    </>
  )
});

export default ChildArea;