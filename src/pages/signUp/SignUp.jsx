import { Link } from "react-router-dom";
import GoogleLogin from "../../components/share/googleWithSignIn/GoogleLogin";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import Container from "../../container/Container";

const SignUp = () => {
    const [passShowHide, setPassShowHide] = useState(false)
    return (
        <div className=" mt-16 mb-4">
            <Container>
                <div className=" min-h-screen">
                    <div className="hero-content flex-col lg:flex-row lg:gap-16 ">
                        {/* form part here */}
                        <div className="card flex-shrink-0 w-full max-w-sm border border-[#D0D0D0] ">
                            <h1 className=" text-4xl text-center font-semibold mt-8">
                                Sign Up
                            </h1>
                            <div className=" px-8 ">
                                {/* {error ? <p className=" text-red-500 py-4">{error}</p> : ""} */}
                            </div>
                            {/* onSubmit={handleSignUp}  */}
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-poppins font-medium ">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered text-black"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-lg font-poppins font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered text-black"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-poppins font-medium">Password</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input
                                            type={passShowHide ? "text" : "password"}
                                            name="password"
                                            placeholder="password"
                                            className="input input-bordered text-black"
                                            required
                                        />

                                        <div className=" absolute right-3 translate-y-4 text-black">
                                            {passShowHide ? (
                                                <BiSolidHide
                                                    onClick={() => setPassShowHide(false)}
                                                    className=" text-xl"
                                                />
                                            ) : (
                                                <BiSolidShow
                                                    onClick={() => setPassShowHide(true)}
                                                    className="text-xl"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text  text-lg font-poppins font-medium">Image</span>
                                        </label>
                                        <input
                                            required
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                        />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        className="btn bg-[#18212C] text-white normal-case text-lg hover:bg-[#0d1d21] border-0"
                                        value="Sign Up"
                                    />
                                </div>
                            </form>
                            <div className=" text-center mb-6">
                                <p className=" text-base font-medium  ">
                                    Create a new account?{" "}
                                    <Link to="/signIn" className=" text-[#013932]">
                                        SignIn
                                    </Link>
                                </p>
                            </div>
                            {/* google button */}
                            <div className="text-center mt-4 mb-4">
                                {/* <GoogleLogin /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;