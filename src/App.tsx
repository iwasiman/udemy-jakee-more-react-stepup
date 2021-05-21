import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import ChildArea from './components/ChildArea';
import CssModules from './components/section4_css/CssModules';
import InlineStyle from './components/section4_css/InlineStyle';
import StyledComponents from './components/section4_css/StyledComponents';
import StyledJsx from './components/section4_css/StyledJsx';
import Emotion from './components/section4_css/Emotion';
import Router from './components/section5_ReactRouter/router/Router';

interface AppProps {}
const App: React.FunctionComponent<AppProps> = () => {
  console.log('** App() in');
  //const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  // ■セクション3: 再レンダリングの仕組みを知りレンダリングを最適化する 24m
  //子コンポーネントの閉じるボタン用
  // アロー関数式で単に書くと、毎回新しい関数を定義していることになる。テキストボックス変更でこの関数が走り、props変更とみなされレンダリングが走る。
  // →関数の中身をそのままuseCallbackで囲い、第二引数は空配列
  //const onClickClose = () => {setOpen(false);};
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  // 下のtempValueは、このApp関数が呼ばれるたびに再計算される。→useMemoで囲うと、初期表示時だけ計算されて結果が保持。
  // 子コンポで使った、memoで囲う話とは全く別なので注意。
  const tempValue1 = useMemo(() => {
    console.log('100+200を計算するよ');
    return 100 + 200;
  }, []);
  console.log(tempValue1);
  const tempValue2 = () => {
    console.log('1+2を計算するよ');
    return 1 + 2;
  };
  console.log(tempValue2());

  return (
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        <Link to="/">Homeへ</Link>
        <br />
        <Link to="/page1">Page1へ</Link>
        <br />
        <Link to="/page2">Page2へ</Link>
        <br />

        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
