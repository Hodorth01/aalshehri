const NotFound = () => {
    return (
        <div className="not-found-page pt-5 mt-5">
            {/* Main 404 Error Title */}
            <h1 className="title404">404 Error Page</h1>
            {/* Error Section */}
            <section className="error-container">
                <span className="four">
                  <span className="screen-reader-text">4</span> {/* For accessibility */}
                </span>
                <span className="zero">
                  <span className="screen-reader-text">0</span> {/* For accessibility */}
                </span>
                <span className="four">
                  <span className="screen-reader-text">4</span> {/* For accessibility */}
                </span>
            </section>
            {/* Link to Home Page */}
            <div className="link-container">
                <a href="/" className="more-link">
                    Visit the Home page
                </a>
            </div>
        </div>
    );
};

export default NotFound;
