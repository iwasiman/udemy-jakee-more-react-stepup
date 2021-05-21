//import { jsx } from '@emotion/react';
//import { css } from "@emotion/css";

type Props = {};
const Emotion: React.FunctionComponent<Props> = () => {
  console.log('Emotion レンダリング!');
  // ■セクション4: 様々なCSSの当て方に触れる 29m
  // ●16. Emotion 7m

  // const containerStyle = css`
  //   border: solid 2px #392eff;
  //   border-radius: 20px;
  //   padding: 8px;
  //   margin: 8px;
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  // `;
  // TSだと属性cssのとこでエラーになる。
  // 型 '{ children: Element[]; css: SerializedStyles; }' を型 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>' に割り当てることはできません。
  //   プロパティ 'css' は型 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>' に存在しません。

  const containerStyle = {};
  return (
    <div css={containerStyle}>
      <p>Emotionだよ</p>
      <button>FIGHT!!</button>
    </div>
  );
};

export default Emotion;
