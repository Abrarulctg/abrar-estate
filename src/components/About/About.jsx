import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Estate | About</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="text-3xl">About</h1>
        </div>
    );
};

export default About;