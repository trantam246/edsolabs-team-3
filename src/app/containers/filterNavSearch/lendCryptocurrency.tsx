import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import closeFilterNav from '../../../images/closeFilterNav.svg';
import { Accordion, Bong, Resetfilter, WarperFilterNav } from './style';
import { iconCoin, LoanAmount } from 'app/components/icon';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
export function FiterNavSearch(props: any) {
  //onchange dữ liệu truyền lên api nè ỏ ỏ ỏ
  const collateralSymbols = e => {
    props.collateralSymbols(e);
  };
  const loanSymbols = e => {
    props.loanSymbols(e);
  };
  const durationTypes = e => {
    props.durationTypes(e);
  };
  const queryString = require('query-string');
  const history = useHistory();
  const param = queryString.parse(history.location.search);
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <WarperFilterNav status={props.status}>
        <Resetfilter>
          <span onClick={() => props.clickResetAll()}>
            {t('search.lendCrypto.filter.reset')}
          </span>
          <img
            src={closeFilterNav}
            alt=""
            onClick={() => props.onClick()}
            style={{ cursor: 'pointer' }}
          />
        </Resetfilter>
        <Accordion className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                {t('search.lendCrypto.filter.coll')}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                {iconCoin.map((item, index) => (
                  <div className="checkbox__custom" key={index}>
                    <input
                      type="checkbox"
                      name="Collateralaccepted"
                      value={item.value}
                      onChange={collateralSymbols}
                      checked={
                        param.collateralSymbols === undefined
                          ? false
                          : param.collateralSymbols.includes(item.value)
                      }
                    />
                    <span>
                      <img
                        src={item.url}
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                      />
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                {t('search.lendCrypto.filter.loan')}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                {LoanAmount.map((item, index) => (
                  <div className="checkbox__custom" key={index}>
                    <input
                      type="checkbox"
                      name="Loantoken"
                      value={item.value}
                      onChange={loanSymbols}
                      checked={
                        param.loanSymbols === undefined
                          ? false
                          : param.loanSymbols.includes(item.value)
                      }
                    />
                    <span>
                      <img
                        src={item.url}
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                      />
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
                style={{ color: '#53565f' }}
              >
                {t('search.lendCrypto.filter.nft')}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Loantype"
                    value="Auto"
                    disabled
                    style={{ borderColor: '#53565f' }}
                  />
                  <span style={{ color: '#53565f' }}>
                    {t('search.lendCrypto.filter.all')}
                  </span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Loantype"
                    value="Semi-auto"
                    disabled
                    style={{ borderColor: '#53565f' }}
                  />
                  <span style={{ color: '#53565f' }}>
                    {t('search.lendCrypto.filter.evaluated')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading6">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse6"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse6"
              >
                {t('search.lendCrypto.filter.duration')}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse6"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading6"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Duration"
                    value="1"
                    onChange={durationTypes}
                    checked={
                      param.durationTypes === undefined
                        ? false
                        : param.durationTypes.includes('1')
                    }
                  />
                  <span>{t('search.lendCrypto.filter.week')}</span>
                </div>
                <div className="checkbox__custom">
                  <input
                    type="checkbox"
                    name="Duration"
                    value="0"
                    onChange={durationTypes}
                    checked={
                      param.durationTypes === undefined
                        ? false
                        : param.durationTypes.includes('0')
                    }
                  />
                  <span>{t('search.lendCrypto.filter.month')}</span>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </WarperFilterNav>
      <Bong
        style={{ display: props.status ? 'block' : 'none' }}
        onClick={() => props.onClick()}
      ></Bong>
    </>
  );
}
