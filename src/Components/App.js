import './App.css';
import News from "./News";
import React, { Component } from 'react'
import SideNews from './SideNews';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news1: {
        'type': 'top-headlines',
        'query': 'country=us&category=business'
      },
      news2: {
        'type': 'everything',
        'query': 'q=tesla&from=2024-03-25&sortBy=publishedAt'
      },
      news3: {
        'type': 'everything',
        'query': 'domains=wsj.com'
      }
    };
  }
  render() {
    return (
      <div className="container-fluid">
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo'>My Feed</a>
          </div>
        </nav>
      </div>
       <div className='row'>
       <div className='col s8'>
       <News news={this.state.news1}/>
       <News news={this.state.news2}/>
       </div>
       <div className='col s4'>
       <SideNews news={this.state.news3} />
        <SideNews news={this.state.news2}/>
       </div>
       <News/>
       </div>
     </div>
    )
  }
}
