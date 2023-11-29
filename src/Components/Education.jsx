import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import lesMisData from "../images/lesMisData.json";

const Education = () => {
  const svgRef = useRef(null);

  useEffect(() => {

    const svg = d3.select(svgRef.current)
      .style("width", "100%")
      .style("height", "100%");

    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d) => d.id))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(lesMisData.links)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value))
      .attr("stroke", "gray");

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(lesMisData.nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", (d) => colorScale(d.group))
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("title")
      .text((d) => d.id);

    simulation.nodes(lesMisData.nodes)
      .on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);
      });

    simulation.force("link")
      .links(lesMisData.links);

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);

  return (
    <section id="Education" className="min-height">
        <svg ref={svgRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "inline-block"}}></svg>
        <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
            <h1>Education</h1>
            <h2>University of North Texas</h2>
        </div>
    </section>
  
  );
};

export default Education;
