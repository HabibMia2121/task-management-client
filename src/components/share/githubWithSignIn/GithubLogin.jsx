import { FaGithub } from "react-icons/fa6";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GithubLogin = () => {
    const { signInWithGithub } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGithub = () => {
        signInWithGithub()
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
                            timer: 2000,
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
                onClick={handleGithub}
                className="btn bg-inherit hover:bg-[#18212C] hover:text-white  outline-1  normal-case rounded-full w-64 border-gray-400 "
            >
                <FaGithub className=" text-3xl top-2 left-4 md:left-32 " />
                Continue with Github
            </button>
        </>
    );
};

export default GithubLogin;