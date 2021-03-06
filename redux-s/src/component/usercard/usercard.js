import React from 'react'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

@withRouter
class UserCard extends React.Component {

  static propTypes = {
    userlist:PropTypes.array.isRequired
  }

  handleClick(v){
    this.props.history.push(`/chat/${v._id}`)
  }

  render(){
    const Header = Card.Header
    const Body = Card.Body
    return(
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v=>(
          v.avatar?(
          <Card onClick={()=>this.handleClick(v)} key={v._id}>
            <Header 
              title={v.user}
              thumb={require(`../img/${v.avatar}.jpg`)}
              thumbStyle = {{width:40}}
              extra={<span>{v.title}</span>}
            >
            </Header>
            <Body>
              {v.type == 'boss'? <div>公司：{v.company}</div>:null}
              {v.desc}
              {v.type == 'boss'? <div>薪资：{v.money}</div>:null}
            </Body>
          </Card>):null
        ))}
      </WingBlank>
    )
  }
}

export default UserCard