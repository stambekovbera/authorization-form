import { combineSlices } from '@reduxjs/toolkit';

import { api } from 'shared/api';

export interface ILazyLoadedSlices {}

export const rootReducer =
  combineSlices(api).withLazyLoadedSlices<ILazyLoadedSlices>();
