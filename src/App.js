import React from "react";
import "./App.css";
import ArticlePage from "../src/components/ArticlePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./components/FavoriteArticles";
import { ArticlesProvider } from "../src/context";
import Banner from "./components/Banner";
import ArticlesList from "./components/ArticlesList";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <ArticlesProvider>
          <div className="app-wrapper">
            <Favorites />
            <div>
              <Switch>
                <Route path="/" exact component={ArticlesList} />
                <Route path="/article/:id" component={ArticlePage} />
              </Switch>
            </div>
          </div>
        </ArticlesProvider>
      </Router>
    </div>
  );
}

export default App;
