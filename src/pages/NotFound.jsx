import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Alert variant="danger" className="text-center">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary mt-2">
          Go to Home
        </Link>
      </Alert>
    </div>
  );
};

export default NotFound;
