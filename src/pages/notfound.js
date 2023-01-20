import React from "react";

const Notfound = () => {
  return (
    <main className="not-found">
      <div
        id="site-content"
        role="main"
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="section-inner thin error404-content">
          <h1 className="entry-title">Page Not Found</h1>

          <div className="intro-text">
            <p>
              The page you were looking for could not be found. It might have
              been removed, renamed, or did not exist in the first place.
            </p>
          </div>

          <form
            role="search"
            aria-label="404 not found"
            method="get"
            className="search-form"
            action="https://www.projectautomate.com/"
          >
            <label htmlFor="search-form-2">
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                id="search-form-2"
                className="search-field"
                placeholder="Search …"
                name="s"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Notfound;
