import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
          <div>
            <button
              className="bg-white text-black p-5 rounded-lg"
              onClick={() => signIn({ callbackUrl: "/" })}
            >
              Login with Google
            </button>
          </div>
    </div>
  );
};

export default Login;

