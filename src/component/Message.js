import React from "react";

export default class Message extends React.Component {
    render() {
        if (this.props.winner) {
            return (
                <div className="message">
                    <b>Congratulations! You won!</b><br/>
                    Press "Play!" to start a new game.
                </div>
            );
        } else {
            return null;
        }
    }
}
