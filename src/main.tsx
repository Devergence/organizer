import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {Pages} from "./pages";
import {RouterProvider} from "atomic-router-react";
import {router} from "./shared/routing.ts";
import {HeaderMegaMenu} from "./components/Header/Header.tsx";
import {appStarted} from "./shared/config/init.ts";

appStarted();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider>
        <RouterProvider router={router}>
          <HeaderMegaMenu />
          <Pages />
        </RouterProvider>
      </MantineProvider>
  </StrictMode>,
)
