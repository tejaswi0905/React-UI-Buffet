const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-b from-sky-400 to-blue-800  bg-sky-400 overflow-auto">
      {children}
    </div>
  );
};
export default AuthLayout;
