import { Spinner } from '@/components/Spinner';
import useForm from '@/hooks/useForm';
import useLogin from '@/hooks/useLogin';
import useShowPw from '@/hooks/useShowPw';

export default function LoginPage() {
  const { email, password, validForm, credentials, handleChange } = useForm();
  const { spinner, handleSubmit } = useLogin(credentials);
  const { btnText, type, handlerType } = useShowPw();

  return (
    <>
      {spinner ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-80 h-screen flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-screen h-screen max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Email Address
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={handleChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="mail@mail.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={handleChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-password"
                  type={type}
                  name="password"
                  value={password}
                  placeholder="******************"
                />
              </div>
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlerType}
              >
                {btnText}
              </button>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={!validForm}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
