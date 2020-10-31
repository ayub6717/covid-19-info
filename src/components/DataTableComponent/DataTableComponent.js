import React, { Component } from "react";
import "./DataTableComponent.css";
import Horizontal from "../../loading/Horizontal.gif";

class DataTableComponent extends Component {
	render() {
		let count = 0;
		return (
			<div>
				<table className="table table-bordered">
					<thead className="Heading">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Country</th>
							<th scope="col">Total Cases</th>
							<th scope="col">Total Deaths</th>
							<th scope="col">Total Recovered</th>
							<th scope="col">New Cases</th>
						</tr>
					</thead>
					<tbody>
						{this.props.Countries.map((country) => {
							return (
								<tr key={++count}>
									<th scope="row">{count}</th>
									<td>{country.Country}</td>
									<td>{country.TotalConfirmed}</td>
									<td>{country.TotalDeaths}</td>
									<td>{country.TotalRecovered}</td>
									<td>{country.NewConfirmed}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{this.props.Countries.length === 0 ? (
					<div className="loading2">
						<img src={Horizontal} alt="CoronaLoading" />
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}

export default DataTableComponent;
