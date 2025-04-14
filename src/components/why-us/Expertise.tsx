import { Process } from "./Process";

export const Expertise = () => {
  return (
    <>
      <div className="container">
        <div className="expertise-area text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading">
                <h4 className="sub-title">Our Process </h4>
                <h2 className="title">A full-cycle AI transformation</h2>
              </div>
            </div>
          </div>
          <Process />
        </div>
      </div>
    </>
  );
};
