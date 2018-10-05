import React from 'react'
import { Row, Column, Label, Input, Heading } from 'components'
import Modal from 'react-modal'

Modal.setAppElement('#app');
class FilteredList extends React.Component {
  constructor(props) {
    let obj = {};
    super(props)

    this.updateChecked = this.updateChecked.bind(this);

    this.props.filters.map(i => {
      obj[i.name] = []
    })

    this.state = Object.assign(obj, {
      modalOpened: false,
      modalTitle: '',
      modalVideo: '',
      modalEditor: {},
      modalProducer: {}
    });

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ modalOpened: true });
  }

  handleCloseModal() {
    this.setState({ modalOpened: false });
  }

  updateChecked(event) {
    const checkedValue = event.target.value;
    const name = event.target.name;
    let checkedArr = this.state[name];
    let valueIndex = 0;

    if (event.target.checked) {
      checkedArr.push(checkedValue);

      this.setState({
        [name]: checkedArr
      });
    } else {
      valueIndex = checkedArr.indexOf(checkedValue);
      checkedArr.splice(valueIndex, 1);

      this.setState({
        [name]: checkedArr
      });
    }
  }

  filteredItems(items) {
    const genre = items.filter(role =>
      role.genre.find(group => this.state.genre.includes(group))
    );
    const purpose = items.filter(role =>
      role.purpose.find(group => this.state.purpose.includes(group))
    )

    if (this.state.genre.length < 1 && this.state.purpose.length < 1) {
      return items;
    }

    return genre.concat(purpose).filter((i, index, self) =>
      index === self.findIndex((t) => (t.name === i.name))
    )
  }

  render() {
    return (
      <React.Fragment>
        <form className="filter-form py-3">
          <div className="container">
            {/* {JSON.stringify(this.state)} */}
            <Row>
              {
                this.props.filters.map(filter => {
                  return <Column md={{span: 6}} key={filter.name}>
                    <Heading level={4}>{filter.title}</Heading>
                    <Row>
                      {
                        filter.items.map(item => {
                          return <div className="col" key={item.value.replace(' ', '-')}>
                            <Input onChange={this.updateChecked} type="checkbox" name={filter.name} id={item.value.replace(' ', '-')} value={item.value} />
                            <Label htmlFor={item.value.replace(' ', '-')}>&nbsp;{item.value}</Label>
                          </div>
                        })
                      }
                    </Row>
                  </Column>
                })
              }
            </Row>
          </div>
        </form>

        <div className="filtered-list py-5">
          <div className="container">
            <Row>
              {
                (this.props.items.length < 1) ? 'Loading' : this.filteredItems(this.props.items).map(i => {
                  return <Column sm={{span: 6}} md={{span: 4}} lg={{span: 3}} className="thumb-col" key={i.name}>
                    <div onClick={this.handleOpenModal}>
                      <img src={`/images/${i.thumb}`} />
                    </div>
                  </Column>
                })
              }
            </Row>
          </div>
        </div>

        <Modal 
          isOpen={this.state.modalOpened}
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" onClick={this.handleCloseModal}  aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

export default FilteredList
