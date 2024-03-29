import React from 'react';
import Card from '../../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
