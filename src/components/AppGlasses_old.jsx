import React, { Component } from "react";

class AppGlasses_old extends Component {
    state = {
        glassImg: "./img/glassesImage/v2.png",
        glassPrice: "$50",
        glassName: "GUCCI G8759H",

        glassList: [
            {
                name: "v1",
                imgSrc: "./img/glassesImage/v1.png",
            },
            {
                name: "v2",
                imgSrc: "./img/glassesImage/v2.png",
            },
            {
                name: "v3",
                imgSrc: "./img/glassesImage/v3.png",
            },
            {
                name: "v4",
                imgSrc: "./img/glassesImage/v4.png",
            },
            {
                name: "v5",
                imgSrc: "./img/glassesImage/v5.png",
            },
            {
                name: "v6",
                imgSrc: "./img/glassesImage/v6.png",
            },
            {
                name: "v7",
                imgSrc: "./img/glassesImage/v7.png",
            },
            {
                name: "v8",
                imgSrc: "./img/glassesImage/v8.png",
            },
            {
                name: "v9",
                imgSrc: "./img/glassesImage/v9.png",
            },
        ],
    };

    handleChoiceGlasses = (name) => {
        switch (name) {
            case "v1":
                this.setState({
                    glassImg: "./img/glassesImage/v1.png",
                    glassPrice: "$30",
                    glassName: "GUCCI G8850U",
                });
                break;
            case "v2":
                this.setState({
                    glassImg: "./img/glassesImage/v2.png",
                    glassPrice: "$50",
                    glassName: "GUCCI G8759H",
                });
                break;
            case "v3":
                this.setState({
                    glassImg: "./img/glassesImage/v3.png",
                    glassPrice: "$30",
                    glassName: "DIOR D6700HQ",
                });
                break;
            case "v4":
                this.setState({
                    glassImg: "./img/glassesImage/v4.png",
                    glassPrice: "$30",
                    glassName: "DIOR D6005U",
                });
                break;
            case "v5":
                this.setState({
                    glassImg: "./img/glassesImage/v5.png",
                    glassPrice: "$30",
                    glassName: "PRADA P8750",
                });
                break;
            case "v6":
                this.setState({
                    glassImg: "./img/glassesImage/v6.png",
                    glassPrice: "$30",
                    glassName: "PRADA P9700",
                });
                break;
            case "v7":
                this.setState({
                    glassImg: "./img/glassesImage/v7.png",
                    glassPrice: "$30",
                    glassName: "FENDI F8750",
                });
                break;
            case "v8":
                this.setState({
                    glassImg: "./img/glassesImage/v8.png",
                    glassPrice: "$30",
                    glassName: "FENDI F8500",
                });
                break;
            case "v9":
                this.setState({
                    glassImg: "./img/glassesImage/v9.png",
                    glassPrice: "$30",
                    glassName: "FENDI F4300",
                });
                break;
        }
    };

    render() {
        return (
            <section
                className="glasses-app bg-dark"
                style={{ height: "100vh" }}
            >
                <h2 className="text-center h2 text-white py-1">Glasses App</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="container row">
                        <section className="model d-flex justify-content-center col-5">
                            <div
                                className="card text-left"
                                style={{ width: 300, position: "relative" }}
                            >
                                <img
                                    className="card-img-top"
                                    src="./img/glassesImage/model.jpg"
                                    alt="hinh model"
                                />
                                <img
                                    src={this.state.glassImg}
                                    alt="kinh"
                                    style={{
                                        width: 170,
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        top: "16%",
                                    }}
                                />
                                <div className="card-body">
                                    <span className="card-title badge-danger h3 px-2 rounded">
                                        {this.state.glassPrice}
                                    </span>
                                    <p className="card-text mt-2">
                                        {this.state.glassName}
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v1")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v1.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v2")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v2.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v3")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v3.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v4")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v4.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v5")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v5.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v6")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v6.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v7")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v7.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v8")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v8.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                            <div className="col-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        this.handleChoiceGlasses("v9")
                                    }
                                >
                                    <img
                                        src="./img/glassesImage/v9.png"
                                        alt="hinh"
                                        style={{ width: 100, borderRadius: 20 }}
                                    />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppGlasses_old;
