import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.scss';
import img1 from '../../assets/images/coin/btc-2.png'
import img2 from '../../assets/images/coin/eth-2.png'
import img3 from '../../assets/images/coin/tet-2.png'
import img4 from '../../assets/images/coin/bnb-2.png'

import chart1 from '../../assets/images/icon/chart-up-2.png';
import chart2 from '../../assets/images/icon/chart-down-2.png';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function Crypto03() {

	const data = {
		labels: ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"],

		datasets: [
			{
				label: "Draining Token Daily Chart",
				data: [1000, 2000, 1500, 2500, 2000, 3000, 3500],
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 2,
				legend: {
					display: false,
				}
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				labels: {
					filter: function (legendItem, chartData) {
						if (legendItem.text === "Draining Token Daily Chart") {
							return false;
						}
						return true;
					}
				}
			},
			title: {
				display: false,
				text: "Draining Token Daily Chart",
			},
		},
	};

	const [dataCrytoTab] = useState([
		{ id: 1, title: 'Daily' },
		{ id: 2, title: 'Weekly' },
		{ id: 3, title: 'Monthly' },
		{ id: 4, title: 'Yearly' }
	]);
	const [dataCrytoContent] = useState([
		{
			id: 1,
			icon: img1,
			chart: chart1,
			name: 'Drainer',
			price: 'New Drainer',

		},
		{
			id: 2,
			icon: img2,
			chart: chart2,
			name: 'Strategy',
			price: 'New Strategy',
		},
		{
			id: 3,
			icon: img3,
			chart: chart1,
			name: 'Ticket',
			price: 'New Ticket',
		},
		{
			id: 4,
			icon: img4,
			chart: chart1,
			name: '2-FA',
			price: 'Enable 2-FA',
		},
	])

	return (
		<section className="crypto" data-aos="fade-up" data-aos-duration="1000">
			<div className="container">
				<div className='chart-datas'>
					<div className="row">

						<div className='col-md-5'>
							<div className='wallet'>
								<div className="wallet-main">
									<div className="left" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "100%", padding: "4.7rem" }}>
										<i style={{ fontSize: "3rem", textAlign: "center" }} className="bx bx-bar-chart font-size-25 align-middle me-1 center-icon"></i>
										<h6>Not Enough Data</h6>
										<p>It usually takes a couple of days to analyze your logs and display data.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-7" >
							<div className="crypto__main">
								<Tabs>
									<TabList>
										{dataCrytoTab.map(idx => (
											<Tab key={idx.id} className="tab-title">{idx.title}</Tab>
										))}
									</TabList>

									{dataCrytoTab.map(idx => (
										<TabPanel key={idx.id} >
											<div >
												<Bar data={data} options={options} style={{ maxHeight: "15rem" }} />
											</div>
										</TabPanel>
									))}
								</Tabs>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="row">
						<div className='col-md-12'>
							<div className="wallet buy-crypto flat-tabs">
								<div className="wallet-main">

									<div className="wallet-body">
										<div className="left">
											<h4 className="heading">Changelog</h4>

											<p>Total Logs : 100</p>

											<div className="price">
												<p className="heading">All Changelogs <i className="bx bx-chevron-right font-size-16 align-middle me-1"></i></p>
											</div>
										</div>
										<div className="right">
											<div className="Change-log-category">
												<ul>
													<li>
														<span style={{ fontWeight: "bold" }}>Blockchain</span>
														<span style={{ fontWeight: "bold" }}>Blockchain</span>
													</li>
													<li>
														<span style={{ fontWeight: "bold" }}>Blockchain</span>
														<span style={{ fontWeight: "bold" }}>Blockchain</span>

													</li>

												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<section data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<div className="crypto__main">
								<Tabs>
									{
										dataCrytoTab.map(idx => (
											<TabPanel key={idx.id}>
												<div className="content-inner">
													{
														dataCrytoContent.map(idx => (
															<div key={idx.id} className="crypto-box">
																<div className="left">
																	<img src={idx.icon} alt="Rockie" />
																	<h6> {idx.name}</h6>
																	<h6 className="price">{idx.price}</h6>
																</div>

																<div className="right">
																	<img src={idx.chart} alt="Rockie" />
																</div>
															</div>
														))
													}
												</div>
											</TabPanel>
										))
									}
								</Tabs>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section >
	);
}

export default Crypto03;
