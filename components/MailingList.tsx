/*
This is the form component to register an email adress to your mailing list. 
This is just the frontend, and the email will be send to our backend API (/api/mailingList) (Not available in the lite version)
*/

import Image from 'next/image';
import Mailing from 'public/landing/mailing.svg';
import { toast } from 'react-toastify';
import { useState } from 'react';

const MailingList = (): JSX.Element => {
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);

  const subscribe = (): void => {
    // Not available in the Lite version
    setLoading(false);
  };

  const validateEmail = (): void => {
    // Regex patern for email validation
    const regex =
      /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))$/;

    if (regex.test(mail)) {
      // this is a valid email address
      void subscribe();
      setValid(true);
    } else {
      // invalid email.
      toast.error('Your email is invalid');
      setValid(false);
    }
  };

  return (
    <div className="flex flex-col m-auto my-10 mt-24">
      <h2 className="text-3xl font-bold text-center uppercase md:text-4xl font-title">
        Stay Tuned
      </h2>
      <Image src={Mailing as string} alt="Mail" />
      <label className="label">
        <p className="max-w-md m-auto text-center">
          Want to be the first to know when SupaNexTail launches and get an
          exclusive discount? Sign up for the newsletter!
        </p>
      </label>
      <div className="m-auto mt-5">
        <input
          onChange={(event) => {
            setMail(event.target.value);
          }}
          type="email"
          placeholder="Your email"
          className={`input input-primary input-bordered ${
            valid ? '' : 'input-error'
          }`}
        />
        <button
          onClick={validateEmail}
          className={`btn ml-3 ${
            loading ? 'btn-disabled loading' : 'btn-primary'
          }`}>
          I'm in!
        </button>
      </div>
    </div>
  );
};

export default MailingList;
