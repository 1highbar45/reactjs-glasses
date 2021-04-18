import React, { Component } from "react";
import FaceModel from "./FaceModel";
import Glass from "./Glass";

class AppGlasses extends Component {
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

    renderGlassesList = () => {
        return this.state.glassList.map((glass) => {
            return (
                <Glass
                    glass={glass}
                    handleChoiceGlasses={this.handleChoiceGlasses}
                />
            );
        });
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
                            <FaceModel
                                glassImg={this.state.glassImg}
                                glassName={this.state.glassName}
                                glassPrice={this.state.glassPrice}
                            />
                        </section>
                        <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                            {this.renderGlassesList()}
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppGlasses;
