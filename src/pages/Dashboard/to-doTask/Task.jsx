import { RiDeleteBin6Line } from "react-icons/ri";
import DashboardTitle from "../../../components/share/dashboardTitle/DashboardTitle";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import { PropagateLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Task = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: todoTask, isLoading, refetch } = useQuery({
        queryKey: ['todoTask'],
        enabled: !'isLoading' || !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/previous-task/${user?.email}`);
            return res?.data;
        }
    })
    // delete task 
    const handleDelete = id => {
        axiosPublic.delete(`/task-delete/${id}`)
            .then(res => {
                refetch();
                if (res?.data?.acknowledged) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer);
                            toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Task deleted completed!",
                    })
                }
            })
    }

    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <PropagateLoader color="#36d7b7" size={20} />
        </div>
    }
    return (
        <div>
            {/* title section */}
            <DashboardTitle
                title={'Todo task list'}
            />
            {/* task tracking */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {/* to-do */}
                <div className=" bg-slate-300  overflow-y-scroll h-[420px]">
                    {/* title */}
                    <h2 className=" text-center pt-3 underline font-bold text-2xl font-fontRoboto">To-do</h2>
                    {
                        todoTask?.map(todo => <div key={todo._id} className=" flex gap-4 justify-between items-center py-4 border-b-2 border-slate-500 mx-4">
                            <div className="">
                                <h2 className="text-lg font-semibold font-fontRoboto">Title: {todo?.title }</h2>
                                <h2 className="text-lg font-semibold font-fontRoboto">Priority: {todo?.priority}</h2>
                                <h2 className="text-lg font-semibold font-fontRoboto">Deadline: {todo?.deadlines}</h2>
                                <p className=" text-base font-fontRoboto">{todo?.descriptions}</p>
                            </div>
                            <div className="">
                                <button onClick={() => handleDelete(todo._id)} className=" py-2 px-3">
                                    <RiDeleteBin6Line className=" text-2xl text-red-600" />
                                </button>
                                <div className=" text-center">
                                    <Link to={`/dashboard/todo/${todo._id}`} className=" py-2 px-3 inline-block">
                                        <FaRegEdit className=" text-2xl text-sky-600" />
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                    
                </div>

                {/* ongoing */}
                <div className=" bg-orange-200 overflow-y-scroll h-[420px]">
                    {/* title */}
                    <h2 className=" text-center pt-3 underline  font-bold text-2xl font-fontRoboto">Ongoing</h2>

                    {/* <div className=" flex gap-4 justify-between items-center py-4 border-b-2 border-slate-500 mx-4">
                        <div className="">
                            <h2 className="text-lg font-semibold font-fontRoboto">Title: Card title!</h2>
                            <h2 className="text-lg font-semibold font-fontRoboto">Priority: Card title!</h2>
                            <h2 className="text-lg font-semibold font-fontRoboto">Deadline: Card title!</h2>
                            <p className=" text-base font-fontRoboto">If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div> */}
                </div>

                {/* completed */}
                <div className=" bg-emerald-200 overflow-y-scroll h-[420px]">
                    {/* title */}
                    <h2 className=" text-center pt-3 underline font-bold text-2xl font-fontRoboto">Completed</h2>

                    {/* <div className=" flex gap-4 justify-between items-center py-4 border-b-2 border-slate-500 mx-4">
                        <div className="">
                            <h2 className="text-lg font-semibold font-fontRoboto">Title: Card title!</h2>
                            <h2 className="text-lg font-semibold font-fontRoboto">Priority: Card title!</h2>
                            <h2 className="text-lg font-semibold font-fontRoboto">Deadline: Card title!</h2>
                            <p className=" text-base font-fontRoboto">If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Task;