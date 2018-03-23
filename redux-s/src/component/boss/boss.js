import React from 'react'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../../component/usercard/usercard'
@connect(
  state=>state.chatuser,
  {getUserList}
)
class Boss extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      data:[]
    }
  }

	componentDidMount(){
    this.props.getUserList('genius')
  }

  render(){
    return <UserCard userlist={this.props.userlist}></UserCard>
  }
}

export default Boss