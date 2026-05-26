import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';
import { MealsDetails, PageNotFound } from './components';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="meal/:id" element={<MealsDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;