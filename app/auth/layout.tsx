const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-b from-indigo-200 to-gray-300 overflow-auto">
      {children}
    </div>
  );
};
export default AuthLayout;
