//'use client'

import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;