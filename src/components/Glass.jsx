import React, { Component } from "react";

class Glass extends Component {
    render() {
        return (
            <div className="col-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                        this.props.handleChoiceGlasses(this.props.glass.name)
                    }
                >
                    <img
                        src={this.props.glass.imgSrc}
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                    />
                </button>
            </div>
        );
    }
}

export default Glass;
