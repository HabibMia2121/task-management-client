import { FaUsers } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { GoIssueReopened } from "react-icons/go";
import { MdIncompleteCircle } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { PropagateLoader } from "react-spinners";


const Dashboard = () => {
    const axiosPublic = useAxiosPublic();
    // get total previous task
    const { data: previousTotalTask, isLoading } = useQuery({
        queryKey: ['previousTotalTask'],
        queryFn: async () => {
            const res = await axiosPublic.get('/previous-total-task');
            return res?.data;
        }

    })
    //get total user
    const { data: totalUser, isLoading:userLoading } = useQuery({
        queryKey: ['totalUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/total-user');
            return res?.data;
        }

    })
    if (isLoading || userLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <PropagateLoader color="#36d7b7" size={20} />
        </div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {/* previous task */}
            <div className=" bg-lime-600 p-4 rounded-xl">
                <div className=" flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <MdOutlinePreview className="text-white text-2xl"/>
                        <h2 className=" text-white font-bold text-xl">Previous Task</h2>
                    </div>
                    <p className="text-white font-bold text-xl">{previousTotalTask?.length}</p>
                </div>
            </div>
            {/* Total user */}
            <div className=" bg-violet-600 p-4 rounded-xl">
                <div className=" flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <FaUsers className="text-white text-2xl"/>
                        <h2 className=" text-white font-bold text-xl">Total Users</h2>
                    </div>
                    <p className="text-white font-bold text-xl">{totalUser?.length }</p>
                </div>
            </div>
            {/* to-do */}
            <div className=" bg-red-600 p-4 rounded-xl">
                <div className=" flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <LuListTodo className="text-white text-2xl"/>
                        <h2 className=" text-white font-bold text-xl">To-do</h2>
                    </div>
                    <p className="text-white font-bold text-xl">0</p>
                </div>
            </div>
            {/* ongoing */}
            <div className=" bg-sky-600 p-4 rounded-xl">
                <div className=" flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <GoIssueReopened className="text-white text-2xl"/>
                        <h2 className=" text-white font-bold text-xl">Ongoing</h2>
                    </div>
                    <p className="text-white font-bold text-xl">0</p>
                </div>
            </div>
            {/* completed */}
            <div className=" bg-amber-600 p-4 rounded-xl">
                <div className=" flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <MdIncompleteCircle className="text-white text-2xl"/>
                        <h2 className=" text-white font-bold text-xl">Completed Task</h2>
                    </div>
                    <p className="text-white font-bold text-xl">0</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;