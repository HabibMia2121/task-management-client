import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../components/share/dashboardTitle/DashboardTitle";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PropagateLoader } from "react-spinners";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const PreviousTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: previousTask, isLoading, refetch } = useQuery({
        queryKey: ['previousTask'],
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
                title={'See in the previous task'}
            />

            <div className="overflow-x-auto overflow-y-scroll h-[300px] lg:h-[400px]   mt-4 mx-12 bg-[#e5e5e5] p-10 rounded">
                <table className="table table-zebra">
                    <thead className=" text-base text-black font-fontRoboto font-semibold">
                        <tr> 
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadlines</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=" text-base">
                        {
                            previousTask?.map((task, idx) => <tr key={task._id}>
                                <td>{ idx +1}</td>
                                <td>{ task?.title }</td>
                                <td>{task?.descriptions}</td>
                                <td>{task?.deadlines}</td>
                                <td>{task?.priority}</td>
                                <td>
                                    <button onClick={() => handleDelete(task._id)} className=" py-2 px-3">
                                        <RiDeleteBin6Line className=" text-2xl text-red-600"/>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PreviousTask;