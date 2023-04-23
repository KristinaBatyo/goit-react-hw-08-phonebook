import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filtersReducer } from './filters';
import authReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
