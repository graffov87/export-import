import React, {Component} from 'react';

class Article extends Component {
state = {
            isOpen: false 
    }
    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="card">
                <div classname="card-header"><h2>{article.title}</h2>
                <button onClick={this.handleClick}>
                {this.state.isOpen ? 'close' : 'open'}
                </button>
                </div>  
                {body}
                <h3>creation {(new Date(article.date)).toDateString()}</h3>
               
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}  

export default Article