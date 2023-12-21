import Banner from "../../components/header/banner/Banner";
import Container from "../../container/Container";

const Home = () => {
    return (
        <div>
            {/* banner section here */}
            <Banner />

            {/* main part here */}
            <Container>
                <div className=" my-4">
                    <h2>this is home page</h2>
                </div>
            </Container>
        </div>
    );
};

export default Home;