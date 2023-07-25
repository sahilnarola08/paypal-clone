import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "components/common/Layout";
import Image from "next/image";
import Rocket from "../../../assets/rocket.svg";

const allReports = () => {
  return (
    <>
      <Layout>
        {/* <div className="container"> */}
        <div className="d-flex justify-content-between mt-4">
          <div>
            <h2>All Report</h2>
          </div>
          <div>
            <a href="" className="blue-color fw-bold text-decoration-none">
              Give us your feedback
            </a>
          </div>
        </div>
        <div className="landingPage__tile">
          <div className="row">
            <div className="col-8">
              <h3 className="fw-bolder">
                Introducing! New navigation for reports
              </h3>
              <p className="mt-4">
                Find your reports faster with a modern look and feel. Reports
                are organised under easily relatable tabs aligned with various
                areas of interest in your business.
              </p>
              <p className="fw-bold">Looking for Insights?</p>
              <p>
                We felt you should have faster access to your insights. So we
                moved it right next to the Reports option in the main navigation
                at the top.
              </p>
              <button className="start-btn">Get Started</button>
            </div>
            <div className="col-4">
              <Image className="roket-img" src={Rocket} alt="" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </Layout>
    </>
  );
};

export default allReports;
