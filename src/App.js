import React, { createContext, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from "react-router-dom";
import {LoginForm} from "./Liplus/LoginForm";
import {NewMain} from "./Liplus/Main";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { css } from '@emotion/react';

const HeaderStyle = css`
  height: 78px;
  background-color: #0B4F6C;
  display: flex;
  align-items: center;
  
  & > span {
    font-weight: 700;
    font-size: 32px;
    color: white;
    padding: 0 24px;
  }
`;
const BodyStyle = css`
  min-height: 764px;
`;
const FooterStyle = css`
  height: 78px;
  background-color: #0B4F6C;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    display: flex;
    color: white;
    font-size: 16px;
  }
`;

export const AppContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    name: '',
  });

  const changeUserInfo = (info) => {
    setUserInfo(info);
  };

  console.log('userInfo', userInfo);

  return (
      <div className="App" style={{MaxWidth:'1920px'}}>
        <div css={HeaderStyle}>
          <span>CSS Test</span>
        </div>
        <div css={BodyStyle}>
          <AppContext.Provider value={{ userInfo, changeUserInfo }}>
            <Switch>
              <Route exact path="/" component={LoginForm}/>
              <DndProvider backend={HTML5Backend}>
                <Route path="/main" component={NewMain}/>
              </DndProvider>
            </Switch>
          </AppContext.Provider>
        </div>
        <div css={FooterStyle}>
          <span>Version 1.0</span>
        </div>
      </div>
  );
}

export default App;
