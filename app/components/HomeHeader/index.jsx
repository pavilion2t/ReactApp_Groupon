import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
/*
头部左侧显示城市（后面还有链接功能），中间搜索，右侧图标点击跳转到个人主页
Head 本身没有涉及到和后端数据的交互
涉及不到后端数据交互，因此这个 Head 是木偶组件

*/
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader
