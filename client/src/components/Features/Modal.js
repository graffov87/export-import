import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
        };
        console.log(props.html.render);
      }
      hideModal = () => {
        this.setState({ visible: false });
      }
      showModal = () => {
        this.setState({ visible: true });
      }
     getStyles = () => {
         return {opacity:1, display:"block"};
     }
    render() {
        
        return (
            <div>
<button type="button" onClick={this.showModal} class="btn btn-primary" data-toggle="modal">
  {this.props.title}
</button>

<div style={(this.state.visible) ? this.getStyles() : {}} class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="modal1" class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.hideModal}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}


export default Modal;