import React, { PropTypes } from "react";

export default function ColorPicker(props) {
	const { action, color_picker } = props;
	return (
		<input
			type="color"
			className="color-input"
			defaultValue={ color_picker }
			onChange={ (e) => {
				action(e.target.value)
			}}
		/>
	);
}

ColorPicker.propTypes = {
	color_picker: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};