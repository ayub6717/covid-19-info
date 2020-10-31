import React, { Component } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import DataTableComponent from "./components/DataTableComponent/DataTableComponent";
import axios from "axios";
import atomLoading from './loading/Atom.gif';

class App extends Component {
	state = {
		Global: [],
		Countries: [],
		bangladesh: [],
	};

	componentDidMount() {
		axios.get("https://api.covid19api.com/world/total").then((response) => {
			this.setState({
				Global: response.data,
			});
		});

		axios
			.get("https://api.covid19api.com/total/country/bangladesh")
			.then((response) => {
				this.setState({
					bangladesh: response.data[response.data.length - 1],
				});
			});

			axios.get("https://api.covid19api.com/summary").then((response) => {
			this.setState({
				Countries: response.data.Countries,
			});
		});
	}

	render() {

		if(this.state.Global.length === 0 && this.state.bangladesh.length === 0) {
			return (
				<div className="loading1">
					<img src={atomLoading} alt="Loading"/>
				</div>
			)
		}
		return (
			<div className="App container">
				<h2>Covid-19 Information</h2>
				<p>If you don't get all the data please Refresh</p>
				<div className="row">
					<div className="col-md-2">
						<p>World</p>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.Global.TotalConfirmed}
							header="Coronavirus Cases"
						/>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.Global.TotalDeaths}
							header="Deaths"
						/>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.Global.TotalRecovered}
							header="Recovered"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<p>Bangladesh</p>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.bangladesh.Confirmed}
							header="Coronavirus Cases"
						/>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.bangladesh.Deaths}
							header="Deaths"
						/>
					</div>
					<div className="col-md-3">
						<CardComponent
							cases={this.state.bangladesh.Recovered}
							header="Recovered"
						/>
					</div>
				</div>

				<DataTableComponent Countries={this.state.Countries} />
			</div>
		);
	}
}

export default App;
