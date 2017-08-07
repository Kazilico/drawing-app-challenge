import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import Stamp from "./Stamp";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>
				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>
				<section className="section section--colorPicker">
					<h3 className="section__heading">Brush Color</h3>
					<Stamp
						action={ actions.colorPicker }
					/>
				</section>
				<section className="section section--stamp">
					<h3 className="section__heading">Image Stamp</h3>
					<Stamp
						/*stamp={ stamp }*/
						action={ actions.stamp }
					/>
				</section>
				<section className="section section--eraser">
					<h3 className="section__heading">Reset</h3>
					<Stamp
						action={ actions.eraser }
					/>
				</section>
				<section className="section section--save">
					<h3 className="section__heading">Save</h3>
					<Stamp
						action={ actions.save }
					/>
				</section>
			</div>
		)
	}
}
