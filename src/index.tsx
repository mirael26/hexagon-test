import * as React from "react";
import * as ReactDOMClient from "react-dom/client";

import './index.scss';

import ScreensRoot from "./screens/Root";

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <ScreensRoot/>
);