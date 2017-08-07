import { SELECT_TOOL, CHANGE_SIZE } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";
import { COLOR } from "../constants/Tools";
import { STAMP } from "../constants/Tools";
import { ERASER } from "../constants/Tools";
import { SAVE } from "../constants/Tools";


const initialState = {
	tool: BRUSH,
	brush_size: "10"
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SELECT_TOOL:
			return Object.assign({}, state, {
				tool: action.text
			})

		default:
			return state
	}
}
