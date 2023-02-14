import React from "react";
import { Route, Routes } from "react-router-dom";
import { ViewData } from "./components/ViewData";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Upload } from "./components/Upload";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view-data" element={<ViewData itemsPerPage={5}></ViewData>} />
        <Route path="upload-file" element={<Upload />} />
      </Routes>
    </Layout>
  );
};

export default App;
