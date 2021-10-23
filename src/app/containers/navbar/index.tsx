import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';
import avtar from '../../../images/avatarMenu.png';
import { GrMenu } from '@react-icons/all-files/gr/GrMenu';
import { GrClose } from '@react-icons/all-files/gr/GrClose';
import { useState } from 'react';
import { MenuNavbar } from 'app/components/menu';
import { Logo } from 'app/components/logo';
import { useHistory } from 'react-router';
import {
  ActiveMenuMobile,
  AiOutlineLefts,
  AvatarAndName,
  ButtonNavBar,
  Containers,
  HamburgerMenu,
  HeaderHome,
  MenuBorrowerProfile,
  MenuMobile,
  MenuSubDown,
  MenuSubMobile,
  RowNavBar,
} from './style';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/slices';
import { useEffect } from 'react';
import userApi from 'api/userApi';
import DropDownUser from './dropdowmUser';
import { useTranslation } from 'react-i18next';
import { SwitchLanguage } from 'app/components/switchLanguage';
export function Navbar(props) {
  const history = useHistory();
  const dispath = useDispatch();
  const [accName, setaccName] = useState<any>({});
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      userApi
        .getNameAcc(localStorage.getItem('access_token'))
        .then(res => setaccName(res));
    }
  }, []);
  const [openMenuMobile, setopenMenuMobile] = useState(false);
  const [statusMenuMobile, setstatusMenuMobile] = useState({
    Myaccount: false,
    BorrowerProfile: false,
    LenderProfile: false,
    NFT: false,
  });
  const openMenu = () => {
    setopenMenuMobile(!openMenuMobile);
    if (openMenuMobile === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  const setcolseMenuMobile = () => {
    document.body.style.overflow = 'auto';
  };
  const [statusBlockLogout, setstatusBlockLogout] = useState(false);
  const logout = () => {
    dispath(authActions.logout());
    setstatusBlockLogout(!statusBlockLogout);
    history.push('/');
  };
  const openDownMenuMobile = value => {
    switch (value) {
      case 'Myaccount':
        setstatusMenuMobile({
          ...statusMenuMobile,
          Myaccount: !statusMenuMobile.Myaccount,
        });
        break;
      case 'BorrowerProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          BorrowerProfile: !statusMenuMobile.BorrowerProfile,
        });
        break;
      case 'LenderProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          LenderProfile: !statusMenuMobile.LenderProfile,
        });
        break;
      case 'NFT':
        setstatusMenuMobile({
          ...statusMenuMobile,
          NFT: !statusMenuMobile.NFT,
        });
        break;
      default:
        break;
    }
  };
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <HeaderHome>
        <Containers fluid id={openMenuMobile ? 'fixed__Header' : ''}>
          <RowNavBar>
            <Col className="p-0 col-xl-2 col-lg-3 col-md-4 col-5 d-flex justify-content-start align-items-center warper__logo">
              <Logo setcolseMenuMobile={setcolseMenuMobile}></Logo>
            </Col>
            <Col className="p-0 col-xl-10 col-lg-9 col-md-8 col-7 d-flex align-items-center justify-content-between">
              <MenuNavbar></MenuNavbar>
              <Col className="text-end flex-fill">
                <ButtonNavBar color={'gradiend'} status={''}>
                  <NavLink to="/">{t('navBar.become')}</NavLink>
                </ButtonNavBar>
                <ButtonNavBar color={''} status={''}>
                  <NavLink to="/">{t('navBar.buy')}</NavLink>
                </ButtonNavBar>
                <ButtonNavBar color={''} status={'true'}>
                  <NavLink to="/">{t('navBar.connect')}</NavLink>
                </ButtonNavBar>
                {localStorage.getItem('access_token') ? (
                  <DropDownUser
                    name={accName?.data?.name}
                    handleLogout={logout}
                  />
                ) : (
                  <ButtonNavBar color={''} status={''}>
                    <NavLink to="/login?tab=2">{t('navBar.login')}</NavLink>
                  </ButtonNavBar>
                )}
                <div
                  style={{ marginLeft: '5px', display: 'inline-block' }}
                  className="Select__language"
                >
                  <SwitchLanguage></SwitchLanguage>
                </div>
                <HamburgerMenu onClick={openMenu}>
                  {openMenuMobile ? (
                    <GrClose size="28"></GrClose>
                  ) : (
                    <GrMenu size="28"></GrMenu>
                  )}
                </HamburgerMenu>
              </Col>
            </Col>
          </RowNavBar>
          {openMenuMobile ? (
            <>
              <MenuMobile>
                {localStorage.getItem('access_token') ? (
                  <AvatarAndName>
                    <img src={avtar} alt="" />
                    <p>{accName?.data?.name || 'admin'}</p>
                  </AvatarAndName>
                ) : (
                  <div style={{ textAlign: 'center', padding: '10px' }}>
                    <Link
                      onClick={openMenu}
                      to="/login?tab=2"
                      style={{
                        textDecoration: 'none',
                        border: '1px solid #fff',
                        padding: '10px',
                        fontSize: '16px',
                        color: '#fff',
                      }}
                    >
                      {t('navBar.login')}
                    </Link>
                  </div>
                )}

                <MenuSubMobile>
                  <div>
                    <Link
                      to="/"
                      onClick={openMenu}
                      style={{
                        textDecoration: 'none',
                        fontSize: '16px',
                        color: '#fff',
                      }}
                    >
                      {t('navMobile.pawn')}
                    </Link>
                  </div>
                  <div>{t('navMobile.staking')}</div>
                  <div>NFT</div>
                  <ActiveMenuMobile
                    status={statusMenuMobile.Myaccount}
                    className="d-flex justify-content-between"
                    onClick={() => openDownMenuMobile('Myaccount')}
                  >
                    <span className="active">{t('navMobile.account')}</span>
                    <span>
                      <AiOutlineLefts>
                        {statusMenuMobile.Myaccount}
                      </AiOutlineLefts>
                    </span>
                  </ActiveMenuMobile>
                  {statusMenuMobile.Myaccount ? (
                    <MenuSubDown>
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('BorrowerProfile')}
                      >
                        <span
                          className={
                            statusMenuMobile.BorrowerProfile ? 'active' : ''
                          }
                        >
                          {t('navMobile.borrowProfile')}
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.BorrowerProfile}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.BorrowerProfile ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>{t('navMobile.coll')}</div>
                            <div>{t('navMobile.contract')}</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('LenderProfile')}
                      >
                        <span
                          className={
                            statusMenuMobile.LenderProfile ? 'active' : ''
                          }
                        >
                          {t('navMobile.lendProfile')}
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.LenderProfile}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.LenderProfile ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>{t('navMobile.offer')}</div>
                            <div>{t('navMobile.contract')}</div>
                            <div>{t('navMobile.package')}</div>
                            <div>{t('navMobile.loan')}</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                      <div>{t('navMobile.staking')}</div>
                      <div
                        className="d-flex justify-content-between"
                        onClick={() => openDownMenuMobile('NFT')}
                      >
                        <span className={statusMenuMobile.NFT ? 'active' : ''}>
                          NFT
                        </span>
                        <span>
                          <AiOutlineLefts>
                            {statusMenuMobile.NFT}
                          </AiOutlineLefts>
                        </span>
                      </div>
                      {statusMenuMobile.NFT ? (
                        <>
                          <MenuBorrowerProfile>
                            <div>{t('navMobile.list')}</div>
                            <div>{t('navMobile.auction')}</div>
                          </MenuBorrowerProfile>
                        </>
                      ) : (
                        ''
                      )}
                    </MenuSubDown>
                  ) : (
                    ''
                  )}
                  <div>FAQ</div>
                  <div>{t('navMobile.changePass')}</div>
                  {localStorage.getItem('access_token') ? (
                    <div
                      onClick={() => {
                        logout();
                        openMenu();
                      }}
                    >
                      {t('navMobile.logOut')}
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="Select__language">
                    <SwitchLanguage></SwitchLanguage>
                  </div>
                </MenuSubMobile>
              </MenuMobile>
            </>
          ) : (
            ''
          )}
        </Containers>
      </HeaderHome>
    </>
  );
}
