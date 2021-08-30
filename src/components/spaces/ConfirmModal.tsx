import { Component } from 'react'
import './ConfirmModal.css';

interface ConfirmModalProps {
  show: boolean,
  content: string,
  close: () => void
}

export class ConfirmModal extends Component<ConfirmModalProps> {

  render() {
    if (this.props.show) {
      return <div className="modal">
        <div className="modal-content">
          <h2>You tried to reserve...</h2>
          <h3 className="modalText">{this.props.content}</h3>
          <button className='modalButton' onClick={() => this.props.close()}>Close</button>
        </div>
      </div>
    }
    return (
      <div>

      </div>
    )

  }
}
