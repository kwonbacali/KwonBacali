import React from 'react';
import Section from '../../components/Section';

const Resume = () => (
  <Section title="Resume" id="resume">
    <div className="d-flex align-items-center justify-content-between bg-white p-4 rounded shadow-sm">
      <div>
        <h5 className="mb-1">Professional Curriculum Vitae</h5>
        <p className="text-muted mb-0">Updated February 2025</p>
      </div>
      <button className="btn btn-primary">
        <i className="fas fa-download me-2"></i>Download PDF
      </button>
    </div>
  </Section>
);

export default Resume;