import WhoBenefit from "../../components/whoBenefit/WhoBenefit";
import Container from "../../container/Container";

const Home = () => {
    return (
        <div className=" my-4">
            {/* main part here */}
            <Container>
                <div>
                    {/* Who Benefit section here */}
                    <WhoBenefit/>
                </div>
            </Container>
        </div>
    );
};

export default Home;