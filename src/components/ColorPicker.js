import React, { PropTypes } from "react";

export default function Color(props) {
	const { action, color } = props;
	return (
		<input
			type="color"
			className="color-input"
			defaultValue={ #FFFFFF }
			onChange={ (e) => {
				action(e.target.value)
			}}
		/>
	);
}

BrushSize.propTypes = {
	brush_size: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};