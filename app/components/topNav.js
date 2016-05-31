import React, {Component} from 'react'

class TopNav extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      style: {
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        zIndex: 20
      },
      submenuclosed: true,
      shortcutsclosed: true,
      menuselected: props.links[0].key.toLowerCase() || '',
      shortcuts: [props.links[0].links[2], props.links[1].links[0]]
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
      
      this.setState({shortcutsclosed: true})
      if (this.state.submenuclosed) {
        this.setState( {submenuclosed: false})
      } else if (!changed) {
        this.setState( {submenuclosed: true})
      }
    }
    
    let onContainerClick = (e) => {
      if (!e.target.href) {
        this.setState({submenuclosed: true})
        this.setState({shortcutsclosed: true})
      }
    }
    
    let onShortcutsClick = () => {
      this.setState({submenuclosed: true})
      if (this.state.shortcutsclosed) {
        this.setState( { shortcutsclosed: false })
      } else {
        this.setState( {shortcutsclosed: true})
      }
    }
    
    const createItems = () => {
      return this.props.links.map((item) => {
        return <a className="nav" onClick={onClick} href={item.url} key={item.key} style={itemStyle}>{item.name}</a>
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
    
    const createShortcuts = () => {
      return this.state.shortcuts.map((item) => {
        return <a className="nav" href={item.url} key={item.name} style={itemStyle}><img className="img" src="http://placehold.it/250x100" /><h5>{item.name}</h5></a>
      })
    }
    
    const visibleToggle = (isHidden) => {
      return { display: (isHidden ? 'none' : 'block') }
    }
    
    return (
        <div style={this.state.style}>
          <div className="main-nav" onClick={onContainerClick}>
          
            <div style={wrapperStyle}>
              { createItems() }
              <a className="nav last" onClick={onShortcutsClick} href="#" key="quick menu" style={itemStyle}>
                Shortcuts 
              </a>
            </div>
            
          </div>
          <div className="promo-nav" 
            style={visibleToggle(this.state.submenuclosed)} 
            onClick={onContainerClick}>
            <div style={wrapperStyle}>
              { createSubItems() }
            </div>
          </div>
          <div className="promo-nav" 
            style={visibleToggle(this.state.shortcutsclosed)}
             onClick={onContainerClick}>
            <div style={wrapperStyle}>
              { createShortcuts() }
            </div>
          </div>
        </div>
      
    )
  }
}

export default TopNav