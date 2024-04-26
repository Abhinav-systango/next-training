'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './_store/store'; // Updated import

export default function StoreProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef(store); // Use the Redux store directly

  return <Provider store={storeRef.current}>{children}</Provider>;
}
