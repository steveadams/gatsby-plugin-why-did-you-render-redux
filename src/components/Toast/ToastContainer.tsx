import React from 'react';
import {useSelector} from 'react-redux';

import * as selectors from '../../selectors';
import toasts from './toasts';

const ToastContainer = () => {
  const addedToasts = useSelector(selectors.toasts).added;

  return (
    <>
      {addedToasts.length > 0 &&
        addedToasts.map(toastID => {
          const Toast = toasts[toastID];

          return <Toast key={toastID} />;
        })}
    </>
  );
};

export default ToastContainer;
