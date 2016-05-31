import React, {Component} from 'react'

class TopNav extends Component {
  
  constructor(props) {
    super(props)
    
    console.log(props)
    
    this.state = {
      style: {
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        height: 38,
        zIndex: 20
      },
      closed: true,
      selected: props.links[0].name
    }
  }
  
  
  
  render() {
    let wrapperStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
    
    let itemStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 0,
      flexShrink: 0,
      padding: 10
    }

    let onClick = (e) => {
      this.setState( { 
        selected: e.target.innerText 
      })
      
      if (this.state.closed) {
        this.setState( { 
          closed: false 
        })
      } else {
        this.setState( { 
          closed: true 
        })
      }
    }
    
    const createItems = () => {
      return this.props.links.map((item) => {
        return <span key={item.name} style={itemStyle}>{item.name}</span>
      })
    }

    const createSubItems = () => {
      return this.props.links.map((item) => {
        if (item.name === this.state.selected) {
           return item.links.map((item) => {
             return <a className="nav" href={item.url} key={item.name} style={itemStyle}><img className="img" src="http://placehold.it/350x150" /><br />{item.name}</a>
           })
        }
      })
    }
    
    return (
        <div style={this.state.style}>
          <div className="mainNav" onClick={onClick}>
          
            <div style={wrapperStyle}>
              { createItems() }
            </div>
            
          </div>
          <div className="promoNav" style={{ display: (this.state.closed ? 'none' : 'block') }}>
            <div style={wrapperStyle}>
              { createSubItems() }
            </div>
          </div>
        </div>
      
    )
  }
}

export default TopNav