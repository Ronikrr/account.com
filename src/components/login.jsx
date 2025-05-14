import { SignIn } from "@clerk/clerk-react";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <SignIn redirectUrl="/home" />
        </div>
    );
};

export default Login;
