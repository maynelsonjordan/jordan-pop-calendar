import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CalendarInitialState {
    projectIssues: string[]
}
const initialState: CalendarInitialState = {
    projectIssues: []
}

export const calendarSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

// Part 4
export const { addIssue } = issueSlice.actions
export default issueSlice.reducer
