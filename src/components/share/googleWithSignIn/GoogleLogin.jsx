import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";

const GoogleLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('user', userInfo)
                    .then(() => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener(
                                    "mouseenter",
                                    Swal.stopTimer
                                );
                                toast.addEventListener(
                                    "mouseleave",
                                    Swal.resumeTimer
                                );
                            },
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Account create successfully",
                        });
                        navigate('/')
                    })
            })
    }
    return (
        <>
            <button
                onClick={handleGoogle}
                className="btn bg-inherit hover:bg-[#6623a4]  outline-1  normal-case rounded-full w-64 border-gray-400 text-white "
            >
                <FcGoogle className=" text-3xl top-2 left-4 md:left-32 " />
                Continue with Google
            </button>
        </>
    );
};

export default GoogleLogin;