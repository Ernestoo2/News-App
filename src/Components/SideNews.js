import React, { Component } from 'react';
import SingleSide from './SingleSide';
import Error from './Error';


export class SideNews extends Component {
    constructor(props){
        super(props);
        this.state ={
            sidenews : [],
            error : false,
        };
    }

  async componentDidMount() {
    if (this.props.news) {
      const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;

  
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ sidenews: data.articles });
      } catch (error) {
        console.error(error);
        this.setState({ error: true });
      };
    }
  }

  renderItems() {
    if(!this.state.error){
      return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item}/>
      ));
    } else{
      return <Error/>;
    }
  };

  render() {
    return <div className='row'>{this.renderItems()}</div>;
  };

}
export default SideNews;