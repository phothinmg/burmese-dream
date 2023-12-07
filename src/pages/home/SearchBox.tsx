import { h, Component, JSX } from 'preact';

interface SearchBoxProps {
  items: string[];
  onSearch: (filteredItems: string[]) => void;
}

interface SearchBoxState {
  query: string;
  filteredItems: string[];
}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);
    this.state = {
      query: '',
      filteredItems: []
    };
  }

  handleInputChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const query = event.currentTarget.value;
    this.setState({ query });
  };

  handleSearch = () => {
    const { query } = this.state;
    const { items, onSearch } = this.props;

    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ filteredItems });
    onSearch(filteredItems);
  };

  handleClear = () => {
    this.setState({ query: '', filteredItems: [] });
    // Clear the search results in the parent component if needed
  };

  handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { query, filteredItems } = this.state;

    return (
      <div>
          <div>
              <input
                type="text"
                value={query}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                className={'dream-input'}
              />
          </div>
          <br />
          <div>
            <button className={'dream-button'} onClick={this.handleSearch}>ရှာ</button>
            <button  className={'dream-button'} onClick={this.handleClear}>ဖျက်</button>
          </div>
        <br />
          <div className={'rc'}>
            <ol className={'dream-ol'}>
              {filteredItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
      </div>
    );
  }
}

export default SearchBox;