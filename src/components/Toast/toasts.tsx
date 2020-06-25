import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {State} from '../../reducers';
import * as selectors from '../../selectors';
import Icon from '../Icon';
import {ToastID} from '.';
import {Action, Content, Title, Toast, ToastIcon} from './Toast';

const toasts: {[id in ToastID]: () => JSX.Element} = {
  [ToastID.Survey]: () => {
    const shouldShowToast = useSelector((state: State) => selectors.shouldShowToast(state, ToastID.Survey));
    const [hide, setHide] = useState(false);

    return (
      <>
        {shouldShowToast ? (
          <Toast hide={hide} toastID={ToastID.Survey}>
            <ToastIcon>👋</ToastIcon>
            <Title>Hi there...</Title>
            <Content>If you have 45 seconds, we would love to know more about you and what you do.</Content>
            <Action href="https://www.surveymonkey.com/r/ZQ8RLRK" onClick={() => setHide(true)} target="_blank">
              <span>Take the survey</span> <Icon name="ArrowRight" />
            </Action>
          </Toast>
        ) : (
          <></>
        )}
      </>
    );
  },
};

export default toasts;
