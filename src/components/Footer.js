import React from "react";

function footer(props) {
  return (
    <>
      <footer
        id="sticky-footer"
        className={`flex-shrink-0 py-5 bg-${props.mode}`}
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
        // text-${
        //     props.mode === "light" ? "dark" : "light"
        //   }-50
      >
        <div className="container text-center">
          <h5>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/aditya-singh-a78948a2/"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aditya Singh
            </a>
          </h5>
        </div>
      </footer>
    </>
  );
}

export default footer;
