import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import { Tabborrow, TabLend, Tabs, TabSum } from './style';
import { TabContent } from 'reactstrap';
import TabsBorrow from '../tabsBorrow/tabsBorrow';
import { TabLendForm } from '../tabLend/tabLend';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
export function TabsComponent() {
  const history = useHistory();
  const [activeTabBorRow, setActiveTabBorRow] = useState('1');
  const toggle = tab => {
    if (tab === '1') {
      history.push({ pathname: '', search: 'tab=1' });
    }
    if (tab === '2') {
      history.push({ pathname: '', search: 'tab=2' });
    }
    if (activeTabBorRow !== tab) setActiveTabBorRow(tab);
  };
  useEffect(() => {
    if (history.location.search.includes('?tab=1')) {
      setActiveTabBorRow('1');
    }
    if (history.location.search.includes('?tab=2')) {
      setActiveTabBorRow('2');
    }
  }, [activeTabBorRow, history.location.search]);
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
