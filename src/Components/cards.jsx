import React from "react";
import info from '../mobile';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: info
    };
  }
  render() {
    return (
      <section className="mobile">
        <h2>Our creations</h2>
        <section className="containerCardMobile">
          {this.state.cards.map((card) => {
            const { id, image, title } = card
            return (
              <article className="cardMobile" key={id}>
                <div>
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