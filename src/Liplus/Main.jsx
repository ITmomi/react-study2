import React, {useState} from "react";
import * as SS from './styleSheet';
import { Menu, Button, PageHeader, } from 'antd';
import {

  UserOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {LoginModal} from './LoginModal'
import {AnalysisItem} from "./AnalysisItem";
import {CategoryItem} from "./CategoryItem"

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Quick Mode', '1', <PieChartOutlined />),
  getItem('OVERLAY', '2', <DesktopOutlined />,[
    getItem('ADC Meas.', '3'),
    getItem('Correction Comp', '4'),
  ]),
  getItem('TACT', '5', <ContainerOutlined />,[
    getItem('Status Monitor', '6'),
    getItem('TS Memory Dump', '7'),
  ]),
  getItem('FOCUS', '8', <MailOutlined />, [
    getItem('Focus Analysis', '9'),
    getItem('Focus Correction of Exposure', '10'),
    getItem('Plate Chuck Arcuation', '11'),
  ]),
  getItem('Setting', '12', <AppstoreOutlined />, [
    getItem('Tact Setting', '13'),
    getItem('User Setting', '14'),
    getItem('Equipment Setting', '15'),
  ]),
];

export const NewMain = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeAniModal = () => {
    setAniOpen(false);
  };
  console.log('gtpark!!!!!!!!!!');

    return (
    <>
      <div css={SS.HomeStyle}>
        <div
          style={{width: 256}}
        >
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{marginBottom: 16}}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            defaultSelectedKeys={['2']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            forceSubMenuRender={true}
          />
        </div>
          <div css={SS.MainContentStyle}>
            <div className="page-header-box">
              <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
              />
              <div className="login-button">
                <Button
                  css={SS.homeButtonStyle}
                  className="green"
                  onClick={openModal}
                ><UserOutlined />
                </Button>
                <LoginModal
                  open={modalOpen}
                  close={closeModal}
                  header="Modal heading">
                </LoginModal>
              </div>
            </div>
            <div css={SS.MainBody}>
              <div>
                <AnalysisItem/>
                <CategoryItem/>
              </div>
            </div>
          </div>
      </div>
    </>
    );
};


