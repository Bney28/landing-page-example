import React from "react";
import info from '../desktop';

export default class CardDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: info
    };
  }
  render() {
    return (
      <section className="desktop">
        <h2>Our creations</h2>
        <section className="cardElement">
          {this.state.cards.map((card) => {
            const { id, image, title } = card
            return (
              <article key={id}>
                <div className="bakcground">
                  <img src={image} alt="creations card" />
                </div>
                <h3 className="tittle">{title}</h3>
              </article>
            )
          })}
        </section>
        <div className="btn-container">
          <button className="btn">See All</button>
        </div>
      </section>
    )
  }
}