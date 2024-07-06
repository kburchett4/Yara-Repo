import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Visualization = ({ repo }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!repo) return;

    // Function to aggregate directory counts
    const aggregateDirectoryCounts = (repo) => {
      const directories = {};
      repo.forEach((file) => {
        const parts = file.split('/');
        if (parts.length > 1) {
          const dir = parts[0];
          directories[dir] = (directories[dir] || 0) + 1;
        }
      });
      return directories;
    };

    const directoryCounts = aggregateDirectoryCounts(repo);
    const labels = Object.keys(directoryCounts);
    const data = Object.values(directoryCounts);

    // Cleanup the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: `Rule Counts`,
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [repo]);

  return (
    <div className="visualization-container">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Visualization;
