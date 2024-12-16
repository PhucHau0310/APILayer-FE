import {
    faFacebook,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SignUp = () => {
    return (
        <div className="max-w-md mx-auto pt-8 pb-32">
            <div className="p-5">
                <h2 className="text-3xl font-bold text-black text-center">
                    Welcome to APILayer
                </h2>
                <p className="text-[#9aa3b4] text-center text-lg">
                    Register now and start using the API marketplace!
                </p>
            </div>

            <div className="flex flex-col gap-4 text-black">
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        size="1x"
                        color="green"
                        className="mr-2"
                    />
                    Sign Up With Google
                </Link>
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        color="black"
                        className="mr-2"
                    />
                    Sign Up With Github
                </Link>
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="1x"
                        color="blue"
                        className="mr-2"
                    />
                    Sign Up With Fb
                </Link>

                <p className="text-[#a0aab4] text-center py-3">
                    <span>-------</span> OR <span>-------</span>
                </p>
            </div>

            <form className="px-5 py-3 text-black">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Sign Up For Free
                </button>
            </form>

            <p className="text-[#a0aab4] text-center py-3">
                <span>-------</span> OR <span>-------</span>
            </p>

            <p className="text-center text-[#a0aab4]">
                Already have an account?{' '}
                <Link href={'/sign-in'} className="text-blue-700 font-semibold">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default SignUp;