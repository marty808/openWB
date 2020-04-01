function loadgraph() {
	var lineChartData = {
		labels: atime,
		datasets: [{
			label: 'Lp1',
			borderColor: "rgba(0, 0, 255, 0.7)",
			backgroundColor: "rgba(0, 0, 255, 0.7)",
			borderWidth: 2,
			hidden: boolDisplayLp1,
			fill: false,
			data: alp1,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Lp2',
			borderColor: "rgba(50, 30, 105, 0.7)",
			backgroundColor: "rgba(50, 30, 105, 0.7)",
			borderWidth: 2,
			hidden: boolDisplayLp2,
			fill: false,
			data: alp2,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Bezug',
			borderColor: "rgba(255, 0, 0, 0.7)",
			backgroundColor: "rgba(255, 10, 13, 0.3)",
			borderWidth: 1,
			fill: true,
			data: abezug,
			hidden: boolDisplayEvu,
			yAxisID: 'y-axis-1'
		} , {
			label: 'PV',
			borderColor: 'green',
			backgroundColor: "rgba(10, 255, 13, 0.3)",
			fill: true,
			hidden: boolDisplayPv,
			borderWidth: 1,
			data: apv,
			yAxisID: 'y-axis-1'
		}  , {
			label: 'Speicherleistung',
			borderColor: 'orange',
			backgroundColor: "rgba(200, 255, 13, 0.3)",
			fill: true,
			borderWidth: 1,
			data: aspeicherl,
			hidden: boolDisplaySpeicher,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Speicher SoC',
			borderColor: 'orange',
			backgroundColor: "rgba(200, 255, 13, 0.5)",
			borderDash: [10,5],
			hidden: boolDisplaySpeicherSoc,
			fill: false,
			borderWidth: 2,
			data: aspeichersoc,
			yAxisID: 'y-axis-2'
		} , {
			label: 'LP1 SoC',
			borderColor: "rgba(0, 0, 255, 0.5)",
			borderDash: [10,5],
			borderWidth: 2,
			hidden: boolDisplayLp1Soc,
			fill: false,
			data: asoc,
			yAxisID: 'y-axis-2'
		} , {
			label: 'LP2 SoC',
			borderColor: "rgba(50, 50, 55, 0.5)",
			borderDash: [10,5],
			fill: false,
			borderWidth: 2,
			hidden: boolDisplayLp2Soc,
			data: asoc1,
			yAxisID: 'y-axis-2'
		} , {
			label: 'Hausverbrauch',
			borderColor: "rgba(255,255,204,0.7)",
			backgroundColor: "rgba(200, 255, 13, 0.3)",
			fill: false,
			borderWidth: 2,
			hidden: boolDisplayHouseConsumption,
			data: ahausverbrauch,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Verbraucher 1',
			borderColor: "rgba(0, 150, 150, 0.7)",
			backgroundColor: "rgba(200, 255, 13, 0.3)",
			fill: false,
			borderWidth: 2,
			hidden: boolDisplayLoad1,
			data: averbraucher1,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Verbraucher 2',
			borderColor: "rgba(150, 150, 0, 0.7)",
			backgroundColor: "rgba(200, 255, 13, 0.3)",
			fill: false,
			borderWidth: 2,
			data: averbraucher2,
			hidden: boolDisplayLoad2,
			yAxisID: 'y-axis-1'
		} , {
			label: 'LP Gesamt',
			borderColor: "rgba(50, 50, 55, 0.1)",
			backgroundColor: "rgba(0, 0, 255, 0.1)",
			fill: true,
			borderWidth: 2,
			data: alpa,
			hidden: boolDisplayLpAll,
			yAxisID: 'y-axis-1'
		} , {
			label: 'Lp3',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			borderWidth: 2,
			data: alp3,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp3
		} , {
			label: 'Lp4',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			data: alp4,
			borderWidth: 2,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp4
		} , {
			label: 'Lp5',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			borderWidth: 2,
			data: alp5,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp5
		} , {
			label: 'Lp6',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			borderWidth: 2,
			data: alp6,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp6
		} , {
			label: 'Lp7',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			borderWidth: 2,
			data: alp7,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp7
		} , {
			label: 'Lp8',
			borderColor: "rgba(50, 50, 55, 0.7)",
			backgroundColor: 'blue',
			fill: false,
			borderWidth: 2,
			data: alp8,
			yAxisID: 'y-axis-1',
			hidden: boolDisplayLp8
		}]
	}

	function getMaxTicksLimit(width) {
		if ( width < 350 ) {
			return 6;
		} else if ( width < 470 ) {
			return 9;
		} else if ( width < 768 ) {
			return 12;
		} else {
			return 18;
		}
	}

	function setGraphLineBorderWidth(theGraph, newWidth) {
		// sets borderWidth attribute for all single lines without fill
		for ( var index = 0; index < theGraph.config.data.datasets.length; index++) {
			if ( !theGraph.config.data.datasets[index].fill ) {
				theGraph.config.data.datasets[index].borderWidth = newWidth;
			}
		}
	}

	function doGraphResponsive(chartInstance) {
		// changes graph resonding to screen size
		// quantity of x-axis labels
		chartInstance.config.options.scales.xAxes[0].ticks.maxTicksLimit = getMaxTicksLimit(chartInstance.width);
		// other settings
		if ( chartInstance.width > 390 ) {
			setGraphLineBorderWidth(chartInstance, 2);
			chartInstance.config.options.scales.xAxes[0].ticks.fontSize = 12;
			chartInstance.config.options.scales.yAxes[0].ticks.fontSize = 12;
			chartInstance.config.options.scales.yAxes[0].scaleLabel.fontSize = 12;
			chartInstance.config.options.scales.yAxes[1].ticks.fontSize = 12;
			chartInstance.config.options.scales.yAxes[1].scaleLabel.fontSize = 12;
		} else {
			setGraphLineBorderWidth(chartInstance, 1);
			chartInstance.config.options.scales.xAxes[0].ticks.fontSize = 10;
			chartInstance.config.options.scales.yAxes[0].ticks.fontSize = 9;
			chartInstance.config.options.scales.yAxes[0].scaleLabel.fontSize = 10;
			chartInstance.config.options.scales.yAxes[1].ticks.fontSize = 9;
			chartInstance.config.options.scales.yAxes[1].scaleLabel.fontSize = 10;
		}

		chartInstance.update();
	}

	var ctx = document.getElementById('canvas').getContext('2d');

	window.myLine = new Chart.Line(ctx, {
		plugins: {
        	afterInit: doGraphResponsive,
        	resize: doGraphResponsive
		},
		data: lineChartData,
		options: {
			tooltips: {
				enabled: false
			},
			elements: {
				point: {
					radius: 0
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			hover: {
				mode: 'null'
			},
			stacked: false,
			legend: {
				display: boolDisplayLegend,
				labels: {
					fontColor: "rgba(255, 255, 255, 0.82)",
					filter: function(item,chart) {
						if ( item.text.includes(hidehaus) || item.text.includes(hideload2) || item.text.includes(hideload1) || item.text.includes(hidelp2soc) || item.text.includes(hidelp1soc) || item.text.includes(hidelp1) || item.text.includes(hidelp2) || item.text.includes(hidelp3) || item.text.includes(hidelp4) || item.text.includes(hidelp5) || item.text.includes(hidelp6) || item.text.includes(hidelp7) || item.text.includes(hidelp8) || item.text.includes(hidespeichersoc) || item.text.includes(hidespeicher) || item.text.includes(hidelpa) || item.text.includes(hidepv) || item.text.includes(hideevu) ) { return false } else { return true}
					}
				}
			},
			title: {
				display: false
			},
			scales: {
				xAxes: [
					{
         				ticks: {
							fontColor: "rgba(255, 255, 255, 0.82)",
							maxTicksLimit: 15
         				}
      				}],
				yAxes: [
					{
						// horizontal line for values displayed on the left side (power)
						position: 'left',
						id: 'y-axis-1',
						type: 'linear',
						display: true,
						scaleLabel: {
		        			display: true,
		        			labelString: 'Leistung [kW]',
							fontColor: "rgba(255, 255, 255, 0.82)"
		      			},
						gridLines: {
							color: "rgba(255, 255, 255, 0.82)"
						},
						ticks: {
							stepSize: 0.2,
							maxTicksLimit: 10,
							fontColor: "rgba(255, 255, 255, 0.82)"
						}
					},{
						// horizontal line for values displayed on the right side (SoC)
						position: 'right',
						id: 'y-axis-2',
						type: 'linear',
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'SoC [%]',
							fontColor: "rgba(255, 255, 255, 0.82)"
						},
						gridLines: {
							// black, opacy = 0% (invisible)
							color: "rgba(0, 0, 0, 0)",
						},
						ticks: {
							min: 0,
							suggestedMax: 100,
							fontColor: "rgba(255, 255, 255, 0.82)"
						}
					}
				]
			}
		}
	});
	initialread = 1;
	$('#waitforgraphloadingdiv').hide();
}  // end loadgraph

function checkgraphload(){
	if ( graphloaded == 1 ) {
       	myLine.destroy();
		loadgraph();
		return;
	}
	if ( typeof boolDisplayHouseConsumption === "boolean" &&
		 typeof boolDisplayLoad1 === "boolean" &&
		 typeof boolDisplayLp1Soc === "boolean" &&
		 typeof boolDisplayLp2Soc === "boolean" &&
		 typeof boolDisplayLoad2 === "boolean" &&
	 	 typeof boolDisplayLp1 === "boolean" &&
	 	 typeof boolDisplayLp2 === "boolean" &&
	 	 typeof boolDisplayLp3 === "boolean" &&
	 	 typeof boolDisplayLp4 === "boolean" &&
	 	 typeof boolDisplayLp5 === "boolean" &&
	 	 typeof boolDisplayLp6 === "boolean" &&
	 	 typeof boolDisplayLp7 === "boolean" &&
	 	 typeof boolDisplayLp8 === "boolean" &&
	 	 typeof boolDisplayLpAll === "boolean" &&
	 	 typeof boolDisplaySpeicherSoc === "boolean" &&
	 	 typeof boolDisplaySpeicher === "boolean" &&
	 	 typeof boolDisplayEvu === "boolean" &&
	 	 typeof boolDisplayPv === "boolean" &&
	 	 typeof boolDisplayLegend === "boolean" ) {
		if ( initialread != 0 ) {
			if ( graphloaded == 0 ) {
				graphloaded = 1;
			} else {
   				myLine.destroy();
			}
			loadgraph();
		}
	}
}

window.onload = function(){
	setTimeout(forcegraphload, 15000)
}

function forcegraphload() {
	if ( graphloaded == 0 ) {
		if ( !(typeof boolDisplayHouseConsumption === "boolean") ) {
			showhidedataset('boolDisplayHouseConsumption');
		}
		if ( !(typeof boolDisplayLoad1 === "boolean") ) {
			showhidedataset('boolDisplayLoad1');
		}
		if ( !(typeof boolDisplayLp1Soc === "boolean") ) {
			showhidedataset('boolDisplayLp1Soc');
		}
		if ( !(typeof boolDisplayLp2Soc === "boolean") ) {
			showhidedataset('boolDisplayLp2Soc');
		}
		if ( !(typeof boolDisplayLoad2 === "boolean") ) {
			showhidedataset('boolDisplayLoad2');
		}
		if ( !(typeof boolDisplayLp1 === "boolean") ) {
			showhidedataset('boolDisplayLp1');
		}
		if ( !(typeof boolDisplayLp2 === "boolean") ) {
			showhidedataset('boolDisplayLp2');
		}
		if ( !(typeof boolDisplayLp3 === "boolean") ) {
			showhidedataset('boolDisplayLp3');
		}
		if ( !(typeof boolDisplayLp4 === "boolean") ) {
			showhidedataset('boolDisplayLp4');
		}
		if ( !(typeof boolDisplayLp5 === "boolean") ) {
			showhidedataset('boolDisplayLp5');
		}
		if ( !(typeof boolDisplayLp6 === "boolean") ) {
			showhidedataset('boolDisplayLp6');
		}
		if ( !(typeof boolDisplayLp7 === "boolean") ) {
			showhidedataset('boolDisplayLp7');
		}
		if ( !(typeof boolDisplayLp8 === "boolean") ) {
			showhidedataset('boolDisplayLp8');
		}
		if ( !(typeof boolDisplayLpAll === "boolean") ) {
			showhidedataset('boolDisplayLpAll');
		}
		if ( !(typeof boolDisplaySpeicherSoc === "boolean") ) {
			showhidedataset('boolDisplaySpeicherSoc');
		}
		if ( !(typeof boolDisplaySpeicher === "boolean") ) {
			showhidedataset('boolDisplaySpeicher');
		}
		if ( !(typeof boolDisplayEvu === "boolean") ) {
			showhidedataset('boolDisplayEvu');
		}
		if ( !(typeof boolDisplayPv === "boolean") ) {
			showhidedataset('boolDisplayPv');
		}
		if ( !(typeof boolDisplayLegend === "boolean") ) {
			showhidedataset('boolDisplayLegend');
		}
		checkgraphload();
	}
}  // end forcegraphload

function showhidedataset(thedataset) {
	if ( window[thedataset] == true ) {
		publish("1","openWB/graph/"+thedataset);
	} else if ( window[thedataset] == false ) {
		publish("0","openWB/graph/"+thedataset);
	} else {
		publish("1","openWB/graph/"+thedataset);
	}
}

function showhidelegend(thedataset) {
	if ( window[thedataset] == true ) {
		publish("0","openWB/graph/"+thedataset);
	} else if ( window[thedataset] == false ) {
		publish("1","openWB/graph/"+thedataset);
	} else {
		publish("0","openWB/graph/"+thedataset);
	}
}

function showhide(thedataset) {
	if ( window[thedataset] == 0 ) {
		publish("1","openWB/graph/"+thedataset);
	} else if ( window[thedataset] == 1 ) {
		publish("0","openWB/graph/"+thedataset);
	} else {
		publish("1","openWB/graph/"+thedataset);
	}
}
