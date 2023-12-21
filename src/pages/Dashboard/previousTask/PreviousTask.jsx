import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../components/share/dashboardTitle/DashboardTitle";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";

const PreviousTask = () => {
    const axiosPublic = useAxiosPublic();

    const { data: previousTask, isLoading, refetch } = useQuery({
        queryKey: ['previousTask'],
        queryFn: async () => {
            const res = await axiosPublic.get('/previous-task');
            return res?.data;
        }
    })

    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            {/* <img src={loader} alt="not found" /> */}
            <h2>Loading ..........</h2>
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
                                    <button className=" py-2 px-3">
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