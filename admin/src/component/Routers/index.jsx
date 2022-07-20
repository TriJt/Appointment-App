import React from "react";
import { Route, Routes } from "react-router-dom";

import { sidebar_routes } from "../../assets/fake_data";
export default function Routers() {
  return (
    <Routes>
      {sidebar_routes.map((item, index) => (
        <Route key={index} path={item.base} element={item.content}>
          {item.groups?.length > 0 &&
            item.groups.map((member, index) => (
              <Route key={index} path={member.path} element={member.content} />
            ))}
        </Route>
      ))}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
