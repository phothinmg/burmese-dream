import { h, ComponentChildren } from "preact";
import Search from "./Search";
import DreamDictionary from "./dream-dic";
import './dream.css';

export default function Home (){

	return (
		<>
			<DreamDictionary />
			<Search />
		</>
	)

};