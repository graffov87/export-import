import React, {Component} from 'react';
import Menu from './Header/Menu';
import Signin from './Header/Signin';
class Header extends Component {
    render() {
        return (
            <div className="card">  
               <Menu />
            </div>
        )
    }
}  

export default Header;