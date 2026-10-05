import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {

    const handleClick = () => {
        alert("Welcome to my React Components Practice!");
    };

    return (
        <div className="app">

            <Header
                name="Shubhrodeep Majumder"
                role="React Components Practice"
            />

            <main className="main-content">

                <section>
                    <h2>Reusable Cards</h2>

                    <div className="card-container">

                        <Card
                            title="CyberAware"
                            description="A cybersecurity awareness platform."
                            category="Web Development"
                        />

                        <Card
                            title="KirliaSync"
                            description="A movie recommendation system."
                            category="Machine Learning"
                        />

                        <Card
                            title="CREST"
                            description="A productivity and achievement tracking platform."
                            category="Web Development"
                        />

                    </div>
                </section>


                <section>
                    <h2>Reusable Button</h2>

                    <Button
                        text="Click Me"
                        onClick={handleClick}
                    />
                </section>


                <section>
                    <h2>Interactive Form</h2>

                    <Form />
                </section>

            </main>

            <Footer
                year="2026"
                name="Shubhrodeep Majumder"
            />

        </div>
    );
}

export default App;