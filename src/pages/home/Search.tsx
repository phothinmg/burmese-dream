import { h, Component } from 'preact';
import SearchBox from './SearchBox';
import data from './DreamDictionary.json';

const bldit = data.BlogDetail;
let blc = [];
bldit.forEach((bl)=>{
    const blp = bl.BlogContent;
    blc.push(blp);
})

class Search extends Component {
  items = blc;
  filteredItems: string[] = [];

  handleSearch = (filteredItems: string[]) => {
    this.filteredItems = filteredItems;
  };

  render() {
    return (
      <div>
        <p>အိပ်မက်မှသတ္တဝါ , အရာဝတ္တု အားမြန်မာစာဖြင့်ရှာနိုင်သည်။ </p>
        <SearchBox items={this.items} onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Search;