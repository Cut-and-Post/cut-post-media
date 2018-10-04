import React from 'react'
import { Link, Label, Input, Heading } from 'components'

class FilteredList extends React.Component {
  constructor(props) {
    let obj = {};
    super(props)

    this.updateChecked = this.updateChecked.bind(this);

    this.props.filters.map(i => {
      obj[i.name] = []
    })

    this.state = obj;
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
        <form className="filter-form">
          <div className="container">
            {JSON.stringify(this.state)}
            <div className="row">
              {
                this.props.filters.map(filter => {
                  return <div className="col" key={filter.name}>
                    <Heading level={4}>{filter.title}</Heading>
                    <div className="row">
                      {
                        filter.items.map(item => {
                          return <div className="col" key={item.value.replace(' ', '-')}>
                            <Input onChange={this.updateChecked} type="checkbox" name={filter.name} id={item.value.replace(' ', '-')} value={item.value} />
                            <Label htmlFor={item.value.replace(' ', '-')}>{item.value}</Label>
                          </div>
                        })
                      }
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </form>

        <div className="filtered-list">
          <div className="container">
            {
              (this.props.items.length < 1) ? 'Loading' : this.filteredItems(this.props.items).map(i => {
                return <div key={i.name}>{i.name} - genre {JSON.stringify(i.genre)} purpose {JSON.stringify(i.purpose)}</div>
              })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FilteredList
