import React from "react";
import "../utils/css/services.css";

const Services = () => {
  return (
    <>
      <h3 className="service-header">OUR SERVICES</h3>
      <section
        style={{
          marginTop: "10%",
        }}
      >
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-4 m-auto" id="main-column">
              <div className="card border-0 shadow my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-laptop-code" />
                  <h1 id="header-service">Web Design</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto" id="main-column">
              <div className="card border-0 shadow  my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-chart-line" />
                  <h1 id="header-service">Marketing</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="card border-0 shadow  my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-file-invoice-dollar" />
                  <h1 id="header-service">Accounting</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="card border-0 shadow  my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-id-badge" />
                  <h1 id="header-service">Payroll</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="card border-0 shadow  my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-laptop-code" />
                  <h1 id="header-service">Networking</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="card border-0 shadow  my-3" id="main-card">
                <div className="card-body">
                  <i className="fas fa-mobile-alt" />
                  <h1 id="header-service">App Development</h1>
                  <p id="para-service">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}
        </div>
        {/* container ends */}
      </section>
    </>
  );
};

export default Services;
