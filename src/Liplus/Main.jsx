import React, {useState} from "react";
import * as SS from './styleSheet';
import Button from "antd/es/button";
import {HOME} from "./HOMEMenu";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";


export default function Main () {
  const [down, setdown] = useState(false);
    return (
    <>
      <div css={SS.mainTitle}>Analysis Tool</div>
      <div css={SS.naviBar}>
        <div>
          <div css={SS.DropDown}>
                    <span className="dropdown">
                      <Button
                        css={SS.homeButtonStyle}
                        className="dropBtn"
                        onClick={() => setdown(!down)}
                      >
                        HOME
                        <DownOutlined />
                      </Button>
                      {down ? (
                        <div className="dropdown-content">
                          <HOME
                            closer={() => setdown(false)}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </span>
          </div>
        </div>
        <div><Button>LOGIN</Button></div>
      </div>
    </>
    );
};


