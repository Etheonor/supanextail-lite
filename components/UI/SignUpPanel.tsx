import { IoLogoGoogle } from 'react-icons/io';
import { useState } from 'react';

const signup = (event: React.SyntheticEvent<HTMLButtonElement>): void => {
  event.preventDefault();

  // Handle the login. Go to the homepage if success or display an error.
  // Not available in the Lite version
};

const SignUpPanel = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-sm p-10 rounded-md shadow-md md:flex-1 bg-base-100 text-base-content font-body">
      <h3 className="my-4 text-2xl font-semibold font-title">
        Account Sign Up
      </h3>
      <form action="#" className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            type="email"
            id="email"
            autoFocus
            className="input input-primary input-bordered input-sm"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            type="password"
            id="password"
            className="input input-primary input-bordered input-sm"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div>
          <button
            id="loginBtn"
            className="w-full btn btn-primary"
            onClick={(event) => {
              void signup(event);
            }}>
            Sign Up
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="flex items-center justify-center space-x-2">
            <span className="h-px bg-gray-400 w-14" />
            <span className="font-normal text-gray-500">or sign up with</span>
            <span className="h-px bg-gray-400 w-14" />
          </span>
          <div className="flex flex-col space-y-4">
            <button
              className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border rounded-md focus:outline-none border-base-200 group hover:bg-base-300"
              onClick={(event) => {
                event.preventDefault();
              }}>
              <div className="text-base-content">
                <IoLogoGoogle />
              </div>
              <span className="text-sm font-medium text-base-content">
                Gmail
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPanel;
