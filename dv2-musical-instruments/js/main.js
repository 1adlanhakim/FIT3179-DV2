/**
 * FIT3179 Data Visualisation 2: Musical Instruments
 * Main data processing and visualisation orchestration module
 *
 * Author: Wan Adlan Hakim bin Wan Zalizan
 * Student ID: 35572140
 * Date: October 2026
 * Course: FIT3179 Data Visualisation
 * Institution: Monash University Malaysia
 */

const charts = [
  ["#viz-01", "specs/01-instrument-waffle.json"],
  ["#viz-02", "specs/02-creative-activities-lollipop.json"],
  ["#viz-03", "specs/03-instrument-by-age.json"],
  ["#viz-04", "specs/04-instrument-by-gender.json"],
  ["#viz-05", "specs/05-education-dumbbell.json"],
  ["#viz-06", "specs/06-age-heatmap.json"],
  ["#viz-07", "specs/07-age-bump.json"],
  ["#viz-08", "specs/08-state-choropleth.json"],
  ["#viz-09", "specs/09-conservatorium-dot-map.json"],
  ["#viz-10", "specs/10-conservatorium-symbol-map.json"],
  ["#viz-11", "specs/11-grant-boxplot.json"],
  ["#viz-12", "specs/12-grant-ranking.json"],
  ["#viz-13", "specs/13-ameb-trend.json"],
  ["#viz-14", "specs/14-ameb-treemap.json"],
  ["#viz-15", "specs/15-ameb-delivery.json"]
];

async function renderChart(selector, specPath) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const response = await fetch(specPath);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const spec = await response.json();

    await vegaEmbed(selector, spec, {
      actions: false,
      renderer: "svg",
      tooltip: {
        theme: "light"
      }
    });

  } catch (error) {
    console.error(`Failed to render ${specPath}`, error);

    target.innerHTML = `
      <div class="chart-error">
        Chart could not be loaded. Run the project through a local web server
        and check the browser console.
      </div>
    `;
  }
}

Promise.all(
  charts.map(([selector, path]) => renderChart(selector, path))
);