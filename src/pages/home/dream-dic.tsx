import { h, Component } from 'preact';
import data from './DreamDictionary.json';

const mma = data.BlogHeader;
	let array = [];
	mma.forEach((mm) =>{
		const bid = mm.BlogId;
		const tt = mm.BlogTitle.split(' ')[1];
		const arry = {ttt: tt, id: bid};
		array.push(arry);
});
const bbd = data.BlogDetail;
/**
 * 
 * @param {*} dd 
 */
const getContent = (dd) => {
	const id = parseInt(dd);
	let getcontent = [];
	bbd.forEach((bb) =>{
		let content ;
		if(bb.BlogId === id){
			content = bb.BlogContent
		}else{
			content = ''
		}
		getcontent.push(content);
	});
	return getcontent;
}

interface DreamDictionaryState {
  selectedValue: string;
}

class DreamDictionary extends Component<{}, DreamDictionaryState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedValue: ''
    };
  }

  handleSelectChange = (event: h.JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    const selectedValue = event.currentTarget.value;
    this.setState({ selectedValue });
  }

  getcontent(){
	const gg = getContent(this.state.selectedValue);
	const ff = gg.filter(item => item !== '');
	return ff;
  }

  render() {
    return (
		<>
			<div>
				<h3>အိပ်မက် အဘိဓာန်</h3>
				<p>အက္ခရာအစဉ်အတိုင်းသိရှိနိုင်ရန်သက်ဆိုင်ရာအက္ခရာအားရွေးချယ်ပါ</p>
				<div>
					<select value={this.state.selectedValue} onChange={this.handleSelectChange} className={'dream-select'}>
						<option value={''} ></option>
							{array.map((item)=>(
								<option value={item.id}>{item.ttt}</option>
							))};
					</select>
				</div>
				<br></br>
				<details>
					<summary className={'dream-summary'}>ရလဒ်ဖတ်ရှုရန်မြားကိုနှိပ်ပါ</summary>
						<div className={'rc'}>
						<ol className={'dream-ol'}>
							{this.getcontent().map((item)=>(
								
								<li>{item}</li>
								
							))}
						</ol>
					</div>
				</details>
				
			</div>
			<br />
			
	    </>
    );
  }
}

export default DreamDictionary;