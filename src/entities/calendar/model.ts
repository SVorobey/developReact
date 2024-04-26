import { daysOfWeek, monthsOfYear } from "@app/momentConfig";
import { RootState } from "@app/store"
import { createSlice } from "@reduxjs/toolkit"
import { add, subtract } from "@shared/calendar/utils";
import moment from "moment"

moment.defineLocale("ru", {
    week: {dow : 0},
    weekdaysShort: daysOfWeek,
    months: monthsOfYear,
    monthsMin: monthsOfYear.map((month) => month.slice(0, 3)),
});

export type State = {
    fullDate: string,
    selectedView: 'month' | 'week',
}

const initialState: State = {
    fullDate: moment().format('YYYY-MM-DD'),
    selectedView: 'month',
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        next: (state, action) => {
            add(state, action.payload);
        },
        previous: (state, action) => {
            subtract(state, action.payload);
        },
        current: (state) => {
            state.fullDate = moment().clone().format('YYYY-MM-DD');
        },
        selectView: (state, action) => {
            state.selectedView = action.payload;
        }
    },
})

export const { next, previous, current, selectView } = calendarSlice.actions;
export const fullDateSelector = (state: RootState) => state.calendar.fullDate;
export const viewSelector = (state: RootState) => state.calendar.selectedView;
export default calendarSlice.reducer;