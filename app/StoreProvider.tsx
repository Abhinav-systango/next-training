'use client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistedStore } from './_store/store'; // Updated import

export default function StoreProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
