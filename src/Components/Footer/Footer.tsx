import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row footer-description">
              <div className="col-md-6">
                <p>© 2023 Stranger Developer. All right reserved.</p>
              </div>
              <div className="col-md-6">
                <div className="text-end">
                  Terms of Service | Privacy policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default React.memo(Footer);
