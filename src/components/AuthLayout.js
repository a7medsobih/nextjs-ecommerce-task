import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-black">
            <div className="p-6 bg-white shadow-lg rounded-md">{children}</div>
        </div>
    );
};

export default AuthLayout;