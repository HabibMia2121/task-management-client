
const WhoBenefit = () => {
    return (
        <div id="whoBenefit" className=" space-y-4 py-7" data-aos="zoom-in-down">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    <h2>Task for Developers</h2>
                </div>
                <div className="collapse-content">
                    <p>Developers are tasked with creating a concise and informative short description for a new software library. The library is designed to simplify the process of handling asynchronous operations in a web development environment. It provides a set of utility functions and abstractions to streamline the management of asynchronous tasks, such as handling asynchronous API requests, managing callbacks, and improving code readability.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    <h2>Task for Bankers</h2>
                </div>
                <div className="collapse-content">
                    <p>Bankers are assigned to create a clear and compelling description of the benefits of a new digital banking feature aimed at enhancing customer experience. This feature introduces a secure mobile banking app with advanced functionalities, including real-time transaction monitoring, personalized financial insights, and seamless fund transfers. The goal is to communicate the advantages of this feature to existing and potential customers.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    <h2>Task for Corporate Professionals</h2>
                </div>
                <div className="collapse-content">
                    <p>Corporate professionals are tasked with creating a compelling communication piece that highlights the business benefits of a newly introduced Corporate Wellness Program. The program aims to enhance employee well-being, reduce stress, and increase overall productivity. Your goal is to convey the advantages of the program to both employees and upper management, emphasizing its positive impact on individual health and its potential benefits for the company.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoBenefit;