import React from 'react'
import api from 'services/api'
import Modal from 'react-modal'
import VideoPlayer from 'react-player'

import { PageTemplate, Hero, TextBlock, FilteredList } from 'components'

import './portfolio.styl'

Modal.setAppElement('#app');

const PortfolioFilters = [
  {
    "name": "genre",
    "title": "By Genre",
    "items": [
      {
        "value": "african american"
      },
      {
        "value": "comedy"
      },
      {
        "value": "drama"
      },
      {
        "value": "thrillers"
      },
      {
        "value": "kids"
      }
    ]
  },
  {
    "name": "purpose",
    "title": "By Purpose",
    "items": [
      {
        "value": "branded content"
      },
      {
        "value": "critics spots"
      },
      {
        "value": "combo/marathons"
      }
    ]
  }
]

export default class PortfolioPage extends React.Component {
  constructor() {
    super();

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.setModal = this.setModal.bind(this)

    this.state = {
      portfolio: [],
      modalOpened: false,
      modalTitle: '',
      modalVideo: '',
      modalEditor: {},
      modalProducer: {}
    }
  }

  setModal(item) {
    this.setState({
      modalTitle: item.name,
      modalVideo: item.videoLink,
      modalEditor: item.editor,
      modalProducer: item.producer
    })

    this.handleOpenModal();
  }

  handleOpenModal() {
    this.setState({ modalOpened: true });
  }

  handleCloseModal() {
    this.setState({ modalOpened: false });
  }

  handleItemClick(data) {
    this.setModal(data)
  }

  renderVideoInfo(items, label) {
    if (items.length > 0) {
      return items.map(item => {
        return (
          <div key={item} className="video-info-item">
            <strong>{label}: </strong>
            <span>{item}</span>
          </div>
        )
      })
    }
  }

  componentDidMount() {
    api.get('/mocks/portfolio.json')
      .then(data => {
        this.setState({
          portfolio: data
        })
      })
  }

  render() {
    const { modalOpened, modalTitle, modalVideo, modalProducer, modalEditor } = this.state

    return (
      <PageTemplate name="portfolio">
        <Hero title="Portfolio" bg="Portfolio.png" />

        <TextBlock
          className="py-5"
          title="We speak your audience's language"
          copy="View a selection of projects from the talented creatives in the Cut & Post network"
        />

        <FilteredList
          filters={PortfolioFilters}
          items={this.state.portfolio}
          itemClick={this.handleItemClick}
        />

        <Modal
          isOpen={modalOpened}
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button type="button" className="close" onClick={this.handleCloseModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <VideoPlayer url={modalVideo} playing />
              <div className="video-info">
                {this.renderVideoInfo(modalEditor, 'Editor')}
                {this.renderVideoInfo(modalProducer, 'Producer')}
              </div>
            </div>
          </div>
        </Modal>
      </PageTemplate>
    )
  }
}