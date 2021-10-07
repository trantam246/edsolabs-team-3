import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import { Tabborrow, TabLend, Tabs, TabSum } from './style';
import { TabContent } from 'reactstrap';
import TabsBorrow from '../tabsBorrow/tabsBorrow';
import { TabLendForm } from '../tabLend/tabLend';
export function TabsComponent() {
  const [activeTabBorRow, setActiveTabBorRow] = useState('1');
  const toggle = tab => {
    if (activeTabBorRow !== tab) setActiveTabBorRow(tab);
  };
  return (
    <>
      <Tabs className="tabs">
        <TabSum tabs>
          <div>
            <span
              className={classnames({ active: activeTabBorRow === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              Borrow
            </span>
          </div>
          <div>
            <span
              className={classnames({ active: activeTabBorRow === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              Lend
            </span>
          </div>
        </TabSum>
        <TabContent activeTab={activeTabBorRow}>
          <Tabborrow tabId="1">
            <TabsBorrow></TabsBorrow>
          </Tabborrow>
          <TabLend tabId="2">
            <TabLendForm></TabLendForm>
          </TabLend>
        </TabContent>
      </Tabs>
    </>
  );
}
