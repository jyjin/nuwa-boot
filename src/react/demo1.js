import React, { Component } from "react";
const Header = () => {
  return <div className={'header'} style={{ color: 'white' }}>
    <a>NUWA</a>
  </div>
}
export default class Demo1 extends Component {

  constructor(props){
    super(props)
    console.log('sub app props == ', props)
  }

  render() {
    return (
      <div>
        <Header />
        <h1 align='center'>Welcome to Nuwa! </h1>
        <h2 align='center'>Nuwa is a micro and lightly frontend frameword base on React.</h2>
        {/* <h2 align='center'>欢迎加入女娲 </h2>
        <h3 align='center'>女娲——轻量前端微服务脚手架.</h3> */}
      </div>
    )
  }
}