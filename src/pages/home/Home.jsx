import React from 'react'

class Home extends React.Component{
  constructor(props){
    console.log('Home start render')
    super(props)
    this.state = {
      list: []
    }
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount(){
    console.log('didMount')
    // 对获取的数据添加唯一值
    const newList =[
      {name: '11'},
      {name: '22'},
      {name: '33'},
      {name: '44'},
    ]
    newList.map((item, index) => (
      item.id = index + 1
    ))
    this.setState({
      list: newList
    })
  }

  static getDerivedStateFromProp(state, props){
    console.log('1111')
  }

  componentDidUpdate(){
    console.log('didUpdate')
  }

  removeItem(index){
    let newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render(){
    console.log('render')
    return (
      <div>
        {this.state.list.map((item, index) => (
          <div key={item.id} onClick={() => this.removeItem(index)}>{item.name}</div>
        ))}
      </div>
    )
  }
}

export default Home