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
import { iconCoin } from 'app/components/icon';
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
            <h2 className="accordion-header" id="panelsStayOpen-heading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse1"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse1"
              >
                Duration
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading1"
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
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading2">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse2"
              >
                NFT type
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse2"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading2"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input type="checkbox" name="SoftNFT" value="SoftNFT" />
                  <span>Soft NFT</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="HardNFT" value="HardNFT" />
                  <span>Hard NFT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading4">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse4"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse4"
              >
                Asset type
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse4"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-heading4"
            >
              <div className="accordion-body">
                <div className="checkbox__custom">
                  <input type="checkbox" name="Assettype" value="SoftNFT" />
                  <span>Jewelry</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Assettype" value="HardNFT" />
                  <span>Car</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Assettype" value="HardNFT" />
                  <span>Car</span>
                </div>
                <div className="checkbox__custom">
                  <input type="checkbox" name="Assettype" value="HardNFT" />
                  <span>House and land</span>
                </div>
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
        </Accordion>
      </WarperFilterNav>
      <Bong
        style={{ display: props.status ? 'block' : 'none' }}
        onClick={() => props.onClick()}
      ></Bong>
    </>
  );
}
