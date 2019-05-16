import React, { Component } from 'react'

export class TitleContainerInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
    <div className="container title-container-info">
      <div className="row">
          <div className="col-8">
              <div className="item one-item-review">
                  <div className="item">
                      <img src="#" />
                      <div className="item-context">
                          <div className="item-title">item.title</div>
                          <div className="item-description">item.description</div>
                          <div className="footer-item-context">
                              <span>date</span>
                              <i>icon</i>
                          </div>
                      </div>
                  </div>
              </div>
          </div> 
          <div className="col-4">
              <div className="items">
              {
                this.props.items.map((item) => {
                    return (
                    <div className="item" key={item.id}>
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
      </div>
    </div>
    )
  }
}

export default TitleContainerInfo
