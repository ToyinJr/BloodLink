import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ImpactDashboard = () => {
  // Data for the bar chart (Yearly progress of blood requests)
  const barData = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Fulfilled Request",
        data: [160, 250, 350, 400],
        backgroundColor: "#800000",
      },
      {
        label: "Cancelled Request",
        data: [200, 260, 200, 100],
        backgroundColor: "#F5B7B1",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Font size
            family: '"Rethink Sans", sans-serif', // Font family
            weight: "regular", // Font weight
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            size: 14,
            family: '"Rethink Sans", sans-serif',
          },
        },
        ticks: {
          font: {
            size: 14,
            family: '"Rethink Sans", sans-serif',
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Blood Requests",
          font: {
            size: 14,
            family: '"Rethink Sans",sans-serif',
          },
        },
        ticks: {
          font: {
            size: 14,
            family: '"Rethink Sans", sans-serif',
          },
        },
      },
    },
  };

  const communitiesData = {
    labels: ["Hospitals", "Community Health Centers", "Blood Banks"],
    datasets: [
      {
        data: [35, 30, 35],
        backgroundColor: ["#800000", "#F5B7B1", "#E0A3AD"],
      },
    ],
  };

  const donorsData = {
    labels: ["Repeat Donors", "First-Time Donors"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#F5B7B1", "#800000"],
      },
    ],
  };

  const doughnutAndPieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Font size for labels
            family: '"Rethink Sans",sans-serif', // Font family
            weight: "regular", // Regular weight
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>
          Yearly Progress of Blood Requests: Increasing Fulfillments and Growing Demand
        </h3>
        <div style={styles.chart}>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Communities Supported</h3>
        <div style={styles.chart}>
          <Doughnut data={communitiesData} options={doughnutAndPieOptions} />
        </div>
      </div>

      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Percentage of First-Time Donors vs. Repeat Donors</h3>
        <div style={styles.chart}>
          <Pie data={donorsData} options={doughnutAndPieOptions} />
        </div>
      </div>
    </div>
  );
};

// Styles with responsiveness
const styles = {
  container: {
    fontFamily: '"Rethink Sans",sans-serif',
    fontWeight: 500,
    fontSize: "13px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "20px",
  },
  chartContainer: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    width: "100%",
  },
  chartTitle: {
    textAlign: "center",
    fontFamily: '"Rethink Sans",sans-serif',
    fontSize: "28px",
    marginBottom: "10px",
  },
  chart: {
    width: "100%",
    maxWidth: "600px",
    height: window.innerWidth < 768 ? "300px" : "400px", // Responsive height
  },
};

// Media queries for further customizations
if (window.innerWidth < 768) {
  styles.container.padding = "10px";
  styles.chartContainer.padding = "5px";
  styles.title.fontSize = "18px";
  styles.chartTitle.fontSize = "14px";
}

export default ImpactDashboard;
