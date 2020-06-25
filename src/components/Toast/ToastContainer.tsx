import React from 'react';
import {useSelector} from 'react-redux';

import * as selectors from '../../selectors';
import {Wrapper} from './Toast';
import toasts from './toasts';

const ToastContainer = () => {
  const addedToasts = useSelector(selectors.toasts).added;

  return (
    <>
      {addedToasts.length > 0 && (
        <Wrapper>
          {addedToasts.map(toastID => {
            const Toast = toasts[toastID];

            return <Toast key={toastID} />;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default ToastContainer;
