import React from "react";
import Sidebar from "../Sidebars/Sidebar/Sidebar"
import "./Container.css";

interface IProps {
  children: JSX.Element
}

const Container: React.FC<IProps> = ({ children }) => {
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
