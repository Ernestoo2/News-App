import React, { Component } from 'react';

import  NewSingle from "./NewSingle";
import Error from './Error';
export class News extends Component {
        constructor(props){
            super(props);
            this.state ={
                news : [],
                error: false,
            };
        }
        async componentDidMount() {
            if (this.props.news) {
              const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;
              console.log(this.props.news);

              try {
                const response = await fetch(url);
                const data = await response.json();
                this.setState({ news: data.articles });
              } catch (error) {
                console.error(error);
                this.setState({ error: true });
              };
            };
          };
    renderItems() {
      if(!this.state.error){
        return this.state.news.map((item) => (
          <NewSingle key={item.url} item={item}/>
        ));
      } else{
        return <Error/>;
      }
    };


render() {
  return(
    <div className='row'>
    {this.renderItems()}
</div>
)

};
};
export default News;
