import React from 'react'
import api from 'services/api'
import Modal from 'react-modal'
import VideoPlayer from 'react-player'

import {
  PageTemplate,
  Hero,
  ProfileCard,
  TextBlock,
  Heading,
  FilteredList,
  List,
  Column
} from 'components'

import './profile.styl'

Modal.setAppElement('#app');

const PORTFOLIO_FILTERS = [
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
      },
      {
        "value": "show launches"
      }
    ]
  }
]

export default class TheProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: false,
      portfolio: [],
      modalOpened: false,
      modalTitle: '',
      modalVideo: '',
      modalEditor: {},
      modalProducer: {}
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.setModal = this.setModal.bind(this)
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
    api.get(`/mocks/staffing-${this.props.match.params.id}.json`)
      .then(data => {
        this.setState({
          profile: data,
          portfolio: []
        })

        const name = this.state.profile.full_name;

        api.get(`/mocks/portfolio.json`)
          .then(data => {
            const works = data.map(i => {
              if (i.producer.includes(name) || i.editor.includes(name)) {
                return i;
              }
            }).filter(i => i)

            this.setState({
              portfolio: works
            })
          })
      })
  }

  render() {
    const { full_name, introduction } = this.state.profile;
    const {
      modalOpened,
      modalTitle,
      modalVideo,
      modalProducer,
      modalEditor
    } = this.state;

    return (
      <PageTemplate name="profile">
        <Hero bg="ContactUs.png">
          {this.state.profile &&
            <ProfileCard data={this.state.profile} btn={false} />
          }
        </Hero>
        <TextBlock
          title={`About ${full_name}`}
          copy={introduction}
          align="left"
          className="mt-5 mb-5"
        />

        <div className="profile-more-info">
          <div className="container">
            <Heading level={2}>More Info</Heading>
            <List className="pb-3" ordered={false}>
              <li><strong>Voiceover accent:</strong> North American, British, Australian</li>
              <li><strong>Gender:</strong> Male</li>
              <li><strong>Age:</strong> 35-44</li>
              <li><strong>Ethnicity:</strong> White</li>
            </List>

            <Heading className="mt-5 pb-3" level={2}>{`${full_name} Portfolio`}</Heading>
          </div>
        </div>

        <FilteredList
          filters={PORTFOLIO_FILTERS}
          items={this.state.portfolio}
          renderItem={i => {
            return (
              <Column sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 3 }} className="thumb-col" key={i.name}>
                <div onClick={() => this.handleItemClick(i)}>
                  <img src={`/images/${i.thumb}`} />
                </div>
              </Column>
            )
          }}
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