import React from 'react';

//=================================================================
// Dashboard Component
//=================================================================

// Define props interface for Dashboard component
interface DashboardProps {
  email: string;
  password: string;
}

// Dashboard component
export const Dashboard: React.FC<DashboardProps> = ({ email, password }) => {
  return (
    <div className="dashboard">
      {/* Display welcome message with user's email */}
      <h2>Welcome, {email}!</h2>
      {/* Display user's password */}
      <p>Your password: {password}</p>
    </div>
  );
};

// Export Dashboard component
export default Dashboard;