/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {useSelector} from 'react-redux';

import {init} from '../actions';
import {Page} from '../routes';
import * as selectors from '../selectors';
import Footer from './Footer';
import Header from './Header';
import HostingChooser from './HostingChooser';
import MainDomainView from './MainDomainView';
import SearchBox from './SearchBox';
import {FloatingSearchSelector} from './SearchSelector';
import ShortcutsDialog from './ShortcutsDialog';
import ShortcutsTip from './ShortcutsTip';
import ToastContainer from './Toast/ToastContainer';

interface ControllerProps {
  page: Page;
  header?: string;
  results?: React.ReactNode;
  children?: React.ReactNode;
}

function Controller({page, results, children}: ControllerProps) {
  const shouldShowContent = useSelector(selectors.shouldShowContent);
  const shouldShowHeaderAndFooter = useSelector(selectors.shouldShowHeaderAndFooter);
  const isMobile = useSelector(selectors.isMobile);

  React.useEffect(() => {
    init(page);
  }, [page]);

  return (
    <main>
      <section id="headerAndSearch">
        {shouldShowContent && <Header />}
        <SearchBox />
      </section>

      <section>
        {shouldShowContent ? (
          <>
            {children}
            <Footer />
          </>
        ) : (
          <>
            <MainDomainView />
            {!shouldShowHeaderAndFooter && <ShortcutsTip />}
            <HostingChooser />
            {results}
          </>
        )}
      </section>

      <ShortcutsDialog />
      <ToastContainer />
      {isMobile && <FloatingSearchSelector />}
    </main>
  );
}

export default React.memo(Controller);
