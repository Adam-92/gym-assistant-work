import Sidebar from "../Sidebar/Sidebar";
import "./Container.css";

const Container = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className="container">
      <article className="center-container">
        <div className="dimensions-container">
          <Sidebar />
          <section className="content-container">{children}</section>
        </div>
      </article>
    </main>
  );
};

export default Container;
