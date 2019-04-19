import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurverNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

export default () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" exact component={SurverNew} />
          <Route path="/" exact component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};