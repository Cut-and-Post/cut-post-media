import React from 'react'
import PropTypes from 'prop-types'
import MultiSelect from '@khanacademy/react-multi-select';

import {
  Row,
  Column,
  Heading
} from 'components'

import './filteredlist'

const propTypes = {
  items: PropTypes.array,
  filters: PropTypes.array,
  renderItem: PropTypes.func,
}

const filtered = (items, filters) => {
  const filterKeys = Object.keys(filters);
  let arr = [];

  items.forEach(role => {
    filterKeys.forEach(key => {
      if (role[key].find(group => filters[key].includes(group)) !== undefined) {
        arr.push(role)
      }
    })
  })
  
  return arr.filter((i, index, self) =>
    index === self.findIndex((t) => (t.name === i.name))
  );
}

class FilteredList extends React.Component {
  constructor(props) {
    let obj = {};
    super(props)

    this.filterNames = this.props.filters.map(i => i.name)
    this.handleSelectedChanged = this.handleSelectedChanged.bind(this)

    this.props.filters.map(i => {
      obj[i.name] = []
    })

    this.state = Object.assign(obj, {
      activeGroup: '',
      selected: []
    });
  }
  
  handleSelectedChanged(selected) {
    if (selected.length < 1) {
      this.setState({
        [this.state.activeGroup]: selected
      })
    } else {
      this.setState({
        [selected[0].group]: selected,
        activeGroup: selected[0].group
      });
    }
  }

  // make more dynamic
  filteredItems(items) {
    const filters = {}

    for (let i = 0; i < this.filterNames.length; i++) {
      filters[this.filterNames[i]] = this.state[this.filterNames[i]].map(i => i.value);
    }

    if (this.state.genre.length < 1 && this.state.purpose.length < 1) {
      return items;
    }

    return filtered(items, filters);
  }

  getOptions(name, items) {
    return items.map(s => ({
      value: Object.assign(s, {
        group: name,
      }),
      label: s.value,
    }));
  }

  render() {
    const { items, filters } = this.props
        
    return (
      <React.Fragment>
        <form className="filter-form py-4">
          <div className="container">
            <Row>
              <Column sm={{ span: 12 }}>
                <Heading level={4} className="mb-0">Filter:</Heading>
              </Column>
              {
                filters.map(filter => {
                  return <Column md={{span: 6}} className="pt-4" key={filter.name}>
                    <Heading level={6}>{filter.title}</Heading>
                    <MultiSelect
                      onSelectedChanged={this.handleSelectedChanged}
                      selected={this.state[filter.name]}
                      options={this.getOptions(filter.name, filter.items)}
                      selectAllLabel={`All ${filter.name}s`}
                    />
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
                (items.length < 1) ? 'Loading' : this.filteredItems(items).map(i => this.props.renderItem(i))
              }
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

FilteredList.propTypes = propTypes

export default FilteredList
