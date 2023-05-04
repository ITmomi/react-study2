import React from 'react';
import * as SS from './styleSheet';
import { Button } from 'antd';
import {
  HomeFilled
} from '@ant-design/icons';

export const HOMEMenu = (closer) => {

  const onCloser = () => {
    closer();
  };

  return (
    <>
      <div css={SS.homeMenuStyle}>
          <div className="leftMain">
            <HomeFilled />
            <span>HOME</span>
          </div>
        <div>
            <div className="label">Quick Mode</div>
            <div div className="subtitle">
              <Button
                type="text"
                onClick={onCloser}
              >Quick Mode</Button>
            </div>
            <div className="label">OVERLAY</div>
            <div className="subtitle">
              <div>
                <Button type="text">ADC Meas.</Button>
              </div>
              <div>
                <Button type="text">Correction Comp.</Button>
              </div>
            </div>
            <div className="label">TACT</div>
            <div className="subtitle">
              <div>
                <Button type="text">Status Monitor</Button>
              </div>
              <div>
                <Button type="text">TS Memory Dump</Button>
              </div>
            </div>
            <div className="label">FOCUS</div>
            <div className="subtitle">
              <div>
                <Button type="text">Focus Analysis</Button>
              </div>
              <div>
                <Button type="text">Focus Correction of Exposure</Button>
              </div>
              <div>
                <Button type="text">Plate Chuck Arcuation</Button>
              </div>
            </div>
            <div className="label">Setting</div>
            <div className="subtitle">
              <div>
                <Button type="text">Tact Setting</Button>
              </div>
              <div>
                <Button type="text">User Setting</Button>
              </div>
              <div>
                <Button type="text">Equipment Setting</Button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
};