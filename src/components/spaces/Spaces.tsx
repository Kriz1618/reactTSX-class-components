import { Component } from 'react'
import { Space } from '../../model/Model'
import { DataService } from '../../services/DataService';
import { SpaceComponent } from './SpaceComponent';
import { ConfirmModal } from './ConfirmModal';

interface SpacesState {
  spaces: Space[];
  showModal: boolean;
  content: string
}

interface SpacesProps {
  dataService: DataService
}
export class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);

    this.state = {
      spaces: [], showModal: false,
      content: ''
    };

    this.reserveSpace = this.reserveSpace.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({ spaces });
  }

  async reserveSpace(spaceId: string) {
    const result = await this.props.dataService.reserveSpace(spaceId);
    if (result) {
      this.setState({
        showModal: true, content: `You reserved the space ${spaceId}, it was accepted with the code ${result}`
      })
    } else {
      this.setState({ showModal: true, content: `You couldn't reserve the space ${spaceId}` })
    }
  }

  private renderSpaces() {
    const rows: any[] = [];
    this.state.spaces.forEach(space => {
      rows.push(<SpaceComponent
        key={space.spaceId}
        location={space.location}
        name={space.name}
        photoUrl={space.photoUrl}
        spaceId={space.spaceId}
        reserveSpace={this.reserveSpace}
      />)
    })

    return rows;
  }

  private closeModal() {
    this.setState({ showModal: false, content: '' });
  }

  render() {
    return (
      <div>
        <h2>Spaces Page</h2>
        {this.renderSpaces()}
        {this.state.showModal && <ConfirmModal content={this.state.content} close={this.closeModal} show={this.state.showModal} />}
      </div>
    )
  }
}