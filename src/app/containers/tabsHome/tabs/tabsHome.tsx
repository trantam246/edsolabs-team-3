import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import { Tabborrow, TabLend, Tabs, TabSum } from './style';
import { TabContent } from 'reactstrap';
import TabsBorrow from '../tabsBorrow/tabsBorrow';
import { TabLendForm } from '../tabLend/tabLend';
import { useTranslation } from 'react-i18next';
export function TabsComponent() {
  const [activeTabBorRow, setActiveTabBorRow] = useState('1');
  const toggle = tab => {
    if (activeTabBorRow !== tab) setActiveTabBorRow(tab);
  };
  const { t } = useTranslation();
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
              {t('home.tabs.borrow.title')}
            </span>
          </div>
          <div>
            <span
              className={classnames({ active: activeTabBorRow === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              {t('home.tabs.lend.title')}
            </span>
          </div>
        </TabSum>
        <div>
          <TabContent activeTab={activeTabBorRow}>
            <Tabborrow tabId="1">
              <TabsBorrow></TabsBorrow>
            </Tabborrow>
            <TabLend tabId="2">
              <TabLendForm></TabLendForm>
            </TabLend>
          </TabContent>
        </div>
      </Tabs>
    </>
  );
}
