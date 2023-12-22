import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { PropagateLoader } from "react-spinners";
import DashboardTitle from "../../../components/share/dashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TodoTaskEdit = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: todo, isLoading, refetch } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todo/${id}`);
            return res?.data;
        }
    })

    // todo task update here
    const {
        register,
        // formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        axiosPublic.patch(`/todo-update/${id}`, data)
            .then(res => {
                refetch();
                if(res?.data?.modifiedCount > 0){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Todo task successfully updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
                title={'Update todo task'}
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
                            defaultValue={todo?.title}
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
                                placeholder="descriptions"
                                defaultValue={todo?.descriptions}
                                className="textarea textarea-bordered w-full "
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
                                defaultValue={todo?.priority}
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
                                defaultValue={todo?.deadlines}
                                required
                                placeholder="task deadlines" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn gap-2 bg-gradient-to-r from-[#18212C] to-[#236f7e] text-white">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoTaskEdit;