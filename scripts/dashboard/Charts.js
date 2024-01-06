export function renderCharts() {
  const ctx = document.getElementById("bar-chart");

  new Chart(ctx, {
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

  new Chart(pieChart, {
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
