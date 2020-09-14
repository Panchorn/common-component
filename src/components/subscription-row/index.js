import React, { Component } from "react";

export default class SubscriptionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        { id: 1, review: "review 1" },
        { id: 2, review: "review 2" },
        { id: 3, review: "review 3" },
        { id: 99, review: "review 99" }
      ]
    };
  }

  renderTableHeader = () => {
    const header = Object.keys(this.state.reviews[0]);
    return header.map(key => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  render() {
    return (
      <div>
        <h1>This is a subscription row</h1>
      </div>
    );
  }
}
