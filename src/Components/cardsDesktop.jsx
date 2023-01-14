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
      <section className="principal">
      <section className="desktop">
        <h2>Our creations</h2>
        <div className="btn-container">
          <button className="btn">See All</button>
        </div>
        <section className="containerCardDesktop">
          {this.state.cards.map((card) => {
            const { id, image, title } = card
            return (
              <article className="cardDesktop" key={id}>
                <div>
                  <img src={image} alt="creations card" />
                </div>
                <h3 className="tittle">{title}</h3>
              </article>
            )
          })}
        </section>
      </section>
      </section>
    )
  }
}