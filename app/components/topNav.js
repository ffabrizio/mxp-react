import React, {Component} from 'react'

class TopNav extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      submenuclosed: true,
      menuselected: props.links[0].key.toLowerCase() || ''
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
      padding: 7
    }

    let onClick = (e) => {
      let a = e.target.getElementsByTagName('a')
      let key = (a.innerText || e.target.innerText).toLowerCase()
      let changed = this.state.menuselected != key
      
      this.setState( { 
        menuselected: (a.innerText || e.target.innerText).toLowerCase()
      })
      
      if (this.state.submenuclosed) {
        this.setState( {submenuclosed: false})
        document.body.classList.add('noscroll')
        this.refs.wrapper.classList.add('scroll')
      } else if (!changed) {
        this.setState( {submenuclosed: true})
        document.body.classList.remove('noscroll')
        this.refs.wrapper.classList.remove('scroll')
      }
    }
    
    let onContainerClick = (e) => {
      if (!e.target.href) {
        this.setState({submenuclosed: true})
        document.body.classList.remove('noscroll')
        this.refs.wrapper.classList.remove('scroll')
      }
    }
    
    const createItems = () => {
      let last = this.props.links[this.props.links.length -1]
      return this.props.links.map((item) => {
        if (item === last) {
          return <a className="nav last" onClick={onClick} href={item.url} key={item.key} style={itemStyle}>{item.name}</a>
        } else {
          return <a className="nav" onClick={onClick} href={item.url} key={item.key} style={itemStyle}>{item.name}</a>
        }
      })
    }

    const createSubItems = () => {
      return this.props.links.map((item) => {
        if (item.key.toLowerCase() === this.state.menuselected) {
           return item.links.map((item) => {
             return <a className="nav" href={item.url} key={item.name} style={itemStyle}><img className="img" src="http://placehold.it/250x100" /><h5>{item.name}</h5></a>
           })
        }
      })
    }
    
    const visibleToggle = (isHidden) => {
      return { display: (isHidden ? 'none' : 'block') }
    }
    
    return (
        <div ref="wrapper" className="nav-wrapper">
          <div className="main-nav" onClick={onContainerClick}>
          
            <div style={wrapperStyle}>
              { createItems() }
            </div>
            
          </div>
          <div className="promo-nav" 
            style={visibleToggle(this.state.submenuclosed)} 
            onClick={onContainerClick}>
            <div style={wrapperStyle}>
              { createSubItems() }
            </div>
          </div>
        </div>
      
    )
  }
}

export default TopNav