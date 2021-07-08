const initialState = {
    notes: [],
}

export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
}

export const ActionCreator = {
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
}

export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] };
        default:
            return state;
    }
}