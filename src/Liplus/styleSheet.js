import { css } from '@emotion/react';

export const HomeStyle = css`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  padding: 1rem;
`;

export const MainContentStyle = css`
  & .page-header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    & .site-page-header {
      width: 100%;
      position: relative;
      background-color: #B5EAEA;
      border-radius: 10px;
      border: 1px solid #FFF8F8;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    & .login-button {
      position: absolute;
      right: 15px;
    }
  }
`;

export const homeButtonStyle = css`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 30px;
  &.blue {
    background-color: #1899ff;
    color: white;
    font-weight: bold;
    &:hover {
      display: block;
      color: #1899ff;
      background: #ffffff;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
    &.green {
    background-color: #52C41A;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    width: 0;
    &:hover {
      display: block;
      color: #F5222D;
      background: #ffffff;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
`;

export const MainBody = css`
  & .grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: 200px;
    padding: 0 3rem;
    & > div {
    margin: auto 0;
    }
    & .title-text {
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 90px;
      text-transform: capitalize;
    }
    & .title-text-sub {
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 90px;
      text-transform: capitalize;
      color: #FFD591;
    }
    & .text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-transform: capitalize;
    color: #77838F;
    white-space: pre-wrap;
    }
  } 
  & .ant-btn-primary {
    color: #fff;
    border-color: #FA8C16;
    background: #FA8C16;
    width: 215px;
  }
`;
export const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const homeMenuStyle = css`
  position: absolute;
  height: 500px;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 3px 5px 1px rgb(0 0 0 / 15%);
  & .leftMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    & span > svg {
      position: absolute;
      width: 70px;
      height: 70px;
      left: 74px;
      top: 12px;
      color: #002766;
    }
    & span:last-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 28px;
      position: absolute;
      width: 206px;
      height: 68px;
      top: 82px;
    }
  }
  & .label {
    padding: 1rem;
    font-size: 18px;
    font-weight: bold;
    color: #096dd9;
  }
  & .subtitle {
    display: flex;
    gap: 3px;
    & button {
      color: #ff4d4f;
      &.ant-btn {
        transition: unset;
      }
      &:hover {
      background-color: darkblue;
      border-radius: 20px;
      color: white;
      }
    } 
  }
`;

export const LoginFormStyle = css`
& section {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  min-height: 781px;
}
& .title-box {
  padding: 1rem;
  background-color: #F95700;
  font-weight: 900;
  & > div {
    color: white;
    &:first-of-type {
      font-size: 46px
    }
    &:last-of-type {
      font-size: 30px;
    }
  }
}
& .title {
    display: flex;
    font-size: 30px;
    font-weight: bold;
    background-color: #FF4D4F;
    color: white;
    padding: 0.5rem 1rem;
}   
& .headerStyle {
  padding: 1rem;
}
& .ant-tabs-tab {
  font-size: 24px;
  width: 500px;
  justify-content: center;
}
& .ant-tabs-nav-wrap {
  justify-content: space-evenly;
}
& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #F5222D;
  font-weight: bold;
}
& .ant-tabs-ink-bar {
  background: #F5222D;
}
& .ant-tabs-nav-list {
  width: 100%;
  justify-content: space-around;
}
`;

export const LoginModalStyle = css`
& .title-box {
  padding: 1rem;
  background-color: #F95700;
  font-weight: 900;
  & > div {
    color: white;
    &:first-of-type {
      font-size: 46px
    }
    &:last-of-type {
      font-size: 30px;
    }
  }
}
& .title {
    display: flex;
    font-size: 30px;
    font-weight: bold;
    background-color: #FF4D4F;
    color: white;
    padding: 0.5rem 1rem;
}   
&.modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
}
&.modal button {
  outline: none;
  cursor: pointer;
  border: 0;
}
&.modal > section {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modal-show 0.3s;
  overflow: hidden;
}
&.modal > section > header {
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
}
&.modal > section > header button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
}
&.modal > section > main {
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
}
&.modal > section > footer {
  padding: 12px 16px;
  text-align: right;
}
&.modal > section > footer button {
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
}
&.modal.openModal {
  display: flex;
  align-items: center;
  animation: modal-bg-show 0.3s;
}

@keyframes modal-show {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes modal-bg-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
& .headerStyle {
  padding: 1rem;
}
& .ant-tabs-tab {
  font-size: 24px;
  width: 500px;
  justify-content: center;
}
& .ant-tabs-nav-wrap {
  justify-content: space-evenly;
}
& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #F5222D;
  font-weight: bold;
}
& .ant-tabs-ink-bar {
  background: #F5222D;
}
& .ant-tabs-nav-list {
  width: 100%;
  justify-content: space-around;
}
`;
export const mainBodyStyle = css`
& > div {
  padding: 1rem;
}
& .inputs {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px; 
  & input, span {
    border-radius: 10px;
  } 
} 
& .buttons {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label > span:last-of-type {
    color: #1899FF;
    display: flex;
    align-items: center;
  }
  & button > span {
    color: #F5222D;
  }
}
& .ant-btn-primary {
  background: #FF4D4F;
}
`;

export const AnalysisItemStyle = css`
  padding: 1rem;
  & .analysis-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 
  & > div > span {
    font-weight: 700;
    font-size: 30px;
  }
  & .items {
    width: 100%;
    display: flex;
  }
  & .item {
    width: 250px;
    height: 250px;
    border-radius: 1rem;
    margin: 1rem;
    border: 1px solid #d5d5d5;
    resize: both;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  }
  & .item-sub {
    padding: 1rem;
  }
`;


export const aniBox = css`
 &:root {
  --zipper-teeth-left: transparent 0%, transparent 1.25%, #333 1.25%, #333 2.25%;
  --zipper-teeth-right: #333 0%, #333 1%, transparent 1%, transparent 2.25%;
 }
`;

