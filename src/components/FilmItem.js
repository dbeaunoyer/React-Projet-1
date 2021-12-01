import React from "react";


class FilmItem extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { itemInfo } = this.props;
    const text = this.state.liked ? "aimes" : "n'aimes pas";
    const label = this.state.liked ? "Je n'aime pas" : "J'aime";
    return (
      <div className="body">
  
          <div className="itemDescription">
            <h1>{itemInfo.titre}</h1>
            <button className="btn btn-primary" onClick={this.handleClick}>
              {label}            
            </button>
            <p className="aimep">Tu {text} ce film</p>
            
            <p>{itemInfo.synopsis}</p>
            <div className="imgContainer">
              <img src={itemInfo.afficheImage} alt="" />
            </div>
          </div>
        </div>

    );
  }
}

export default FilmItem;
