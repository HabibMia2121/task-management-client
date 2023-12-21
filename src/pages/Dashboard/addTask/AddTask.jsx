import { useForm} from "react-hook-form"
import DashboardTitle from "../../../components/share/dashboardTitle/DashboardTitle";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AddTask = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        const newTask = {
            title: data?.title,
            descriptions: data?.descriptions,
            priority: data?.priority,
            deadlines: data?.deadlines,
            email: user?.email
        }
        axiosPublic.post('/add-task', newTask)
            .then(res => {
                console.log(res?.data);
            })

    }

    return (
        <div>
            {/* title section */}
            <DashboardTitle
                title={'Add the new task'}
            />
            
            {/* from section here */}
            <div className=" mt-4 mx-12 bg-[#e5e5e5] p-10 rounded">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Task title */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold"> Title</span>
                        </label>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            required
                            placeholder="task title" className="input input-bordered w-full " />
                    </div>
                    {/* Description */}
                    <div className=" flex gap-6">
                        {/* price here */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold"> Description</span>
                            </label>
                            <textarea
                                {...register("descriptions", { required: true })}
                                placeholder="descriptions" className="textarea textarea-bordered w-full " 
                            ></textarea>
                        </div>
                    </div>
                    <div className=" flex flex-col lg:flex-row gap-3">
                        {/* priority */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold"> Priority</span>
                            </label>
                            <input
                                {...register("priority", { required: true })}
                                type="text"
                                required
                                placeholder="Low, moderate, high" className="input input-bordered w-full " />
                        </div>
                        {/* deadlines */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold"> Deadlines</span>
                            </label>
                            <input
                                {...register("deadlines", { required: true })}
                                type="date"
                                required
                                placeholder="task deadlines" className="input input-bordered w-full " />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button className="btn gap-2 bg-gradient-to-r from-[#18212C] to-[#236f7e] text-white">
                            Add Task
                        </button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;