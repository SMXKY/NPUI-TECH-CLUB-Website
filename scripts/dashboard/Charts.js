export function renderCharts() {
  if (window.location.pathname === "/NPUI-TECH-CLUB-Website/dashboard.html") {
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...
    //The code for the line chart in the dashbaord...

    const lineChart = document.getElementById("js-line-chart");

    //Line Chart functionality
    //Line Chart functionality
    //Line Chart functionality

    let labels = ["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"];
    let graphDataY = [7, 18, 6, 19, 17, 19, 15];
    let graphDataY1 = [10, 16, 18, 3, 19, 12, 14];

    const weekBtn = document.querySelector(".js-week-button");
    const monthBtn = document.querySelector(".js-month-btn");

    function chartDAta(lbl, data1, data2) {
      const data = {
        labels: lbl,
        datasets: [
          {
            label: "Submited",
            data: data1,
            borderColor: "rgba(12, 140, 233, 1)",
            backgroundColor: (context) => {
              const bgColor = [
                "rgba(12, 140, 233, 1)",
                "rgba(12, 140, 233, 0)",
              ];

              if (!context.chart.chartArea) {
                return;
              }

              const {
                ctx,
                data,
                chartArea: { top, bottom },
              } = context.chart;

              const gradient = ctx.createLinearGradient(0, top, 0, bottom);
              gradient.addColorStop(0, bgColor[0]);
              gradient.addColorStop(1, bgColor[1]);

              return gradient;
            },
            //yAxisID: "y",
            pointStyle: false,
            borderWidth: 2,
            tension: 0.2,
            fill: true,
          },
          {
            label: "Total tasks",
            data: data2,
            borderColor: "rgb(241, 196, 58)",
            //backgroundColor: "rgb(241, 196, 58, 0.2)",
            backgroundColor: (context) => {
              const bgColor = ["rgb(241, 196, 58, 1)", "rgb(241, 196, 58, 0)"];

              if (!context.chart.chartArea) {
                return;
              }

              const {
                ctx,
                data,
                chartArea: { top, bottom },
              } = context.chart;

              const gradient = ctx.createLinearGradient(0, top, 0, bottom);
              gradient.addColorStop(0, bgColor[0]);
              gradient.addColorStop(1, bgColor[1]);

              return gradient;
            },
            pointBorderColor: "rgba(12, 140, 233, 0.0)",
            pointStyle: false,
            borderWidth: 2,
            tension: 0.2,
            fill: true,
            //circular: true,
            //yAxisID: "y1",
          },
        ],
      };

      return data;
    }

    let myLineChart = new Chart(lineChart, {
      type: "line",
      data: chartDAta(labels, graphDataY, graphDataY1),
      options: {
        responsive: true,
      },
      //stacked: true,
      scales: {
        x: {
          stacked: true,
          grid: {
            drawOnChartArea: false,
          },
        },

        y: {
          beginAtZero: true,
          //stacked: true,
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    });

    weekBtn.addEventListener("click", () => {
      let labelsWeek = ["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"];
      let graphDataYweek = [7, 18, 6, 19, 17, 19, 15];
      let graphDataY1week = [10, 16, 18, 3, 19, 12, 14];

      document
        .querySelector(".toggle-div-week ")
        .classList.add("toogle-circle-on");
      document
        .querySelector(".toggle-div-month")
        .classList.remove("toogle-circle-on");

      myLineChart.destroy();
      myLineChart = new Chart(lineChart, {
        type: "line",
        data: chartDAta(labelsWeek, graphDataYweek, graphDataY1week),
        options: {
          responsive: true,
        },
        //stacked: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },

          y: {
            beginAtZero: true,
            //stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      });
    });

    monthBtn.addEventListener("click", () => {
      let labelsMonth = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      document
        .querySelector(".toggle-div-week ")
        .classList.remove("toogle-circle-on");
      document
        .querySelector(".toggle-div-month")
        .classList.add("toogle-circle-on");

      let graphDataYmonth = [7, 18, 6, 19, 17, 19, 15, 7, 18, 6, 19, 17];
      let graphDataY1month = [10, 16, 18, 3, 19, 12, 14, 10, 16, 18, 3, 19];

      myLineChart.destroy();

      myLineChart = new Chart(lineChart, {
        type: "line",
        data: chartDAta(labelsMonth, graphDataYmonth, graphDataY1month),
        options: {
          responsive: true,
        },
        //stacked: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },

          y: {
            beginAtZero: true,
            //stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      });
    });

    const pieChart = document.getElementById("js-dashboard-pie-chart");

    const sliceThickness = {
      id: "sliceThickness",
      beforeDraw(chart, plugins) {
        //console.log(chart.chartArea.width);
        chart.getDatasetMeta(0).data[1].outerRadius = 110;
        chart.getDatasetMeta(0).data[0].outerRadius = 115;
      },
    };

    const myPieChart = new Chart(pieChart, {
      type: "doughnut",
      data: {
        labels: ["Course Completion", "Course Outline"],
        datasets: [
          {
            label: "Course progress",
            data: [80, 20],
            backgroundColor: ["rgb(241, 196, 58)", "rgb(56,56,56)"],
            hoverOffset: 5,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        //aspectRatio: 0.5,
      },
      plugins: [sliceThickness],
    });
  } else {
    const ctx = document.getElementById("bar-chart");

    const myBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6"],
        datasets: [
          {
            label: "Task score",
            data: [6, 5, 9, 8, 4, 0],
            borderWidth: 0,
            color: "none",
            barThickness: 18,
            backgroundColor: "rgba(12, 140, 233, 1)",
            hoverBackgroundColor: "rgba(12, 140, 233, 0.8)",
            borderRadius: 3,
            borderSkipped: "start",
          },

          {
            label: "Expected score",
            data: [10, 10, 10, 10, 10, 10],
            borderWidth: 0,
            color: "none",
            barThickness: 18,
            backgroundColor: "rgb(56,56,56)",
            hoverBackgroundColor: "rgb(56,56,56)",
            borderRadius: 3,
            borderSkipped: "start",
          },
        ],
      },
      responsive: false,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Task and task score",
          },
        },
        interaction: {
          intersect: true,
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },

          y: {
            beginAtZero: true,
            //stacked: true,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    });

    const pieChart = document.getElementById("pie-chart");

    const sliceThickness = {
      id: "sliceThickness",
      beforeDraw(chart, plugins) {
        //console.log(chart.chartArea.width);
        chart.getDatasetMeta(0).data[1].outerRadius = 95;
        chart.getDatasetMeta(0).data[0].outerRadius = 100;
      },
    };

    const myPieChart = new Chart(pieChart, {
      type: "doughnut",
      data: {
        labels: ["Course Completion", "Course Outline"],
        datasets: [
          {
            label: "Course progress",
            data: [80, 20],
            backgroundColor: ["rgb(241, 196, 58)", "rgb(56,56,56)"],
            hoverOffset: 5,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        //aspectRatio: 0.5,
      },
      plugins: [sliceThickness],
    });
  }
}
