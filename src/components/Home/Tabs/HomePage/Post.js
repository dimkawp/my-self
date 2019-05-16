import React, { Component } from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      viewPost: true,
      post: Object
       
    }
  }

  clickOnPost = (item) => {
    this.setState({ viewPost: !this.state.viewPost})
    let viewPost = {
      id: item.id,
      title: item.title,
      description: item.description,
    }
    this.setState({ post: viewPost })
  }
  clickClosePost = () => {
    this.setState({ viewPost: !this.state.viewPost})
  }
  
  render() {
    return (
    <div className="container body-container-info">
      <div className="container-email">
          <div className="description">
              <div className="title">Title</div>
              <p>text</p>
          </div>
      </div>
      <div className="post-container">
      {
        this.state.viewPost ?
        <div className="posts">
          <div className="items">
          {
            this.props.posts.map((item) => {
              return (
              <div className="item" key={item.id} onClick={(e)=>this.clickOnPost(item)}>
                  <img src="#" />
                  <div className="item-context">
                      <div className="item-title">{item.title}</div>
                      <div className="item-description">{item.description}</div>
                      <div className="footer-item-context">
                          <span>date</span>
                          <i>icon</i>
                      </div>
                  </div>
              </div>
              );
            })
          }
          </div>
        </div>
      :
      <div className="view-post">
        <div className="Header">View Post</div>
        <div onClick={this.clickClosePost}>close</div>
        <div className="body-view-post">
          {this.state.post.title}-{this.state.post.id}
          {this.state.post.description}
        </div>
      </div>
      }
        <div className="posts-navigation">
            Navigation
        </div>
      </div>
    </div>
    )
  }
}
