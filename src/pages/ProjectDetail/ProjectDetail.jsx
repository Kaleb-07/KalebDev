import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="project-detail-page bg-white dark:bg-gray-900 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-teal-500 hover:text-teal-600 mb-6 inline-block font-medium">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          You are viewing details for project ID: <span className="font-bold text-teal-500">{id}</span>
        </p>
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">More information coming soon!</h2>
            <p className="text-gray-600 dark:text-gray-400">
                This page is currently under construction. Check back later for a full case study, screenshots, and more.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
