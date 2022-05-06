import React from "react";
import Sidebar from "../Sidebars/Sidebar/Sidebar"
import "./Container.css";

const Container = ({ children }) => {
  return (
    <main className="container">
      <article className="center-container">
        <div className="dimensions-container">
          <section className="sidebar-container">
            <Sidebar />
          </section>
          <section className="content-container">
            {children}
          </section>
        </div>
      </article>
    </main>
  );
};

export default Container;
