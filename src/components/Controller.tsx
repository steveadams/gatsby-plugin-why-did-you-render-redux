/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {useSelector} from 'react-redux';

import {init} from '../actions';
import {Page} from '../routes';
import * as selectors from '../selectors';

import Footer from './Footer';
import Header from './Header';
import HomeHeader from './HomeHeader';
import HostingChooser from './HostingChooser';
import MainDomainView from './MainDomainView';
import SearchBox from './SearchBox';
import ShortcutsDialog from './ShortcutsDialog';

interface ControllerProps {
  page: Page;
  header?: string;
  results?: React.ReactNode;
  children?: React.ReactNode;
}

function Controller({page, header, results, children}: ControllerProps) {
  const shouldShowContent = useSelector(selectors.shouldShowContent);

  React.useEffect(() => {
    init(page);
  }, [page]);

  return (
    <>
      {shouldShowContent && !header && <HomeHeader />}
      {shouldShowContent && header && <Header>{header}</Header>}
      <SearchBox />
      {shouldShowContent ? (
        <>
          <hr className="darkHr" style={{margin: '0 0 48px'}} />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <MainDomainView />
          <HostingChooser />
          {results}
        </>
      )}
      <ShortcutsDialog />
    </>
  );
}

export default React.memo(Controller);
