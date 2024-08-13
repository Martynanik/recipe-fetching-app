import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import IndexPage from "./pages/IndexPage";
import SingleRecipePage from "./pages/SingleRecipePage";
import SearchedRecipePage from "./pages/SearchedRecipePage";
import TagRecipePage from "./pages/TagRecipePage";
import Logo from "./components/Logo";
import PaginationRecipesPage from "./pages/PaginationRecipesPage";

function App() {


  return(
      <div>


          <BrowserRouter>
              <Logo></Logo>
              <Pagination></Pagination>
              <Routes>
                  <Route element={<PaginationRecipesPage></PaginationRecipesPage>} path="/page/:pageNumber">
                  </Route>
                  <Route element={<IndexPage></IndexPage>} path="/">
                  </Route>
                  <Route element={<SingleRecipePage></SingleRecipePage>} path="/recipe/:id">
                  </Route>
                  <Route element={<SearchedRecipePage></SearchedRecipePage>} path="/search/:word"></Route>
                  <Route element={<TagRecipePage></TagRecipePage>} path="/tag/:tag">
                  </Route>
              </Routes>
          </BrowserRouter>


      </div>
  )
}

export default App;
