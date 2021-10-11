import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import searchFilterNav from '../../../images/searchFilterNav.svg';
import closeFilterNav from '../../../images/closeFilterNav.svg';
import {
  Accordion,
  Bong,
  InputSearchNameFilter,
  Resetfilter,
  WarperFilterNav,
} from './style';
import { iconCoin, LoanAmount } from 'app/components/icon';
export function FiterNavSearch(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <WarperFilterNav status={props.status}>
        <Resetfilter>
          <span>Reset filter</span>
          <img
            src={closeFilterNav}
            alt=""
            onClick={() => props.onClick()}
            style={{ cursor: 'pointer' }}
          />
        </Resetfilter>
        <InputSearchNameFilter>
          <div>
            <div>
              <img src={searchFilterNav} alt="" />
            </div>
            <div>
              <input type="text" placeholder="Search pawnshops" />
            </div>
          </div>
        </InputSearchNameFilter>
        <Accordion className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Interest range
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Interestrange" value="0-10" />
                    <span></span>
                  </div>
                  <span>{'0 - 10%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Interestrange" value="10-25" />
                    <span></span>
                  </div>
                  <span>{'10 - 25%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Interestrange" value="25-50" />
                    <span></span>
                  </div>
                  <span>{'25 - 50%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Interestrange" value=">50" />
                    <span></span>
                  </div>
                  <span>{'> 50%'}</span>
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Loan to value
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Loantovalue" value="0-25" />
                    <span></span>
                  </div>
                  <span>{'0 - 25%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Loantovalue" value="25-50" />
                    <span></span>
                  </div>
                  <span>{'25 - 50%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Loantovalue" value="50-75" />
                    <span></span>
                  </div>
                  <span>{'50 - 75%'}</span>
                </label>
                <label className="radio__custom">
                  <div>
                    <input type="radio" name="Loantovalue" value=">75" />
                    <span></span>
                  </div>
                  <span>{'> 75%'}</span>
                </label>
              </div>
            </div>
          </div>
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
                Collateral accepted
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
                Loan token
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
              >
                Loan type
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input type="checkbox" name="Loantype" value="Auto" />
                  <span>Auto</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Loantype" value="Semi-auto" />
                  <span>Semi-auto</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Loantype" value="Negotiation" />
                  <span>Negotiation</span>
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
                Duration
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse6"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading6"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input type="checkbox" name="Duration" value="Week" />
                  <span>Week</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Duration" value="Month" />
                  <span>Month</span>
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
