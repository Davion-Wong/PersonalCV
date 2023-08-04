import React, { Component } from "react"
import clock from "../Images/A-25plus5-clock.png"
import calculator from "../Images/A-JavaScript-Calculator.png"
import drum from "../Images/A-Drum_Machine.png"
import markdown from "../Images/A-Markdown-Previewer.png"
import barChart from "../Images/A-Bar-Chart.png"
import scatterPlot from "../Images/A-ScatterPlot-Graph.png"
import heatMap from "../Images/A-Heat-Map.png"

class Portfolio extends Component {
  render() {
    var project1 = (
      <div key="A-25plus5-clock" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-25plus5-Clock/" title="">
            <img alt="" src={clock} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A 25 + 5 clock</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project2 = (
      <div key="A-JavaScrip-Calculator" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-JavaScript-Calculator/" title="">
            <img alt="" src={calculator} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A JavaScrip Calculator</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project3 = (
      <div key="A-Drum-Machine" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-Drum-Machine/" title="">
            <img alt="" src={drum} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A Drum Machine</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project4 = (
      <div key="A-Markdown-Previewer" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-Markdown-Previewer/" title="">
            <img alt="" src={markdown} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A Markdown Previewer</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project5 = (
      <div key="A-Bar-Chart" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-Bar-Chart/" title="">
            <img alt="" src={barChart} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A Bar Chart</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project6 = (
      <div key="A-ScatterPlot-Graph" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-ScatterPlot-Graph/" title="">
            <img alt="" src={scatterPlot} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A ScatterPlot Graph</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    var project7 = (
      <div key="A-Heat-Map" className="columns portfolio-item">
        <div className="item-wrap">
          <a href="https://davion-wong.github.io/A-Heat-Map/" title="">
            <img alt="" src={heatMap} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>A Heat Map</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {project1}
              {project2}
              {project3}
              {project4}
              {project5}
              {project6}
              {project7}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
