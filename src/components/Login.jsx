import { useState } from "react";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(false);

  const toggleSignIn = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div className="relative">
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/6b7e0c9b-0383-4137-a0a7-a52925e7f43f/PK-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image netflix"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-md opacity-70 shadow-md">
        <h1 className="text-white text-3xl font-bold mb-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Full Name"
            />
          </div>
        )}
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-sm cursor-pointer text-gray-400 pt-4"
            onClick={toggleSignIn}
          >
            {isSignForm ? (
              <>
                New to Netflix? <span className="text-white"> Sign up Now</span>
              </>
            ) : (
              <>
                Already Registered?
                <span className="text-white"> Sign In</span>
              </>
            )}
          </p>
        </div>
        {/* <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <input
              className="mr-2 text-blue-500 focus:ring-blue-200"
              value="true"
              type="checkbox"
              id="rememberMe"
            />
            <label htmlFor="rememberMe" className="text-white">
              Remember me
            </label>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
