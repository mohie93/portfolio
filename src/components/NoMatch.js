import '../assets/styles/404.css';

function NoMatch() {
  return <div className="error-content">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="error-text">
            <h1 className="error">404 Error</h1>
            <div className="im-sheep">
              <div className="top">
                <div className="body"/>
                <div className="head">
                  <div className="im-eye one"/>
                  <div className="im-eye two"/>
                  <div className="im-ear one"/>
                  <div className="im-ear two"/>
                </div>
              </div>
              <div className="im-legs">
                <div className="im-leg"/>
                <div className="im-leg"/>
                <div className="im-leg"/>
                <div className="im-leg"/>
              </div>
            </div>
            <h4>Oops! This page Could Not Be Found!</h4>
            <p>Sorry bit the page you are looking for does not exist, have been removed or name changed.</p>
            <a href="/" className="btn btn-customised-primary btn-round">Go to homepage</a>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default NoMatch