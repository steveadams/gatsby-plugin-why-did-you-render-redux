import React from 'react';

import * as storage from '../../storage';

export type ToastProps = {
  children: React.ReactNode;
  hide?: boolean;
  toastID: ToastID;
};

export enum ToastID {
  Survey = '2020-06-24_Survey',
}

export const loadDismissed = (): ToastID[] => JSON.parse(storage.get('dismissedToasts') || '[]') as ToastID[];
export const saveDismissed = (toastIDs: ToastID[]) => storage.set('dismissedToasts', JSON.stringify(toastIDs));
