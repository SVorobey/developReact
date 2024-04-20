import { daysOfWeek, monthsOfYear } from "@app/momentConfig";
import { RootState } from "@app/store"
import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"

moment.defineLocale("ru", {
    week: {dow : 0},
    weekdaysShort: daysOfWeek,
    months: monthsOfYear,
    monthsMin: monthsOfYear.map((month) => month.slice(0, 3)),
});

type State = {
    day: string,
    fullDate: string,
    monthYear: string,
}

const initialState: State = {
    day: moment().format('D'),
    fullDate: moment().format('YYYY-MM-DD'),
    monthYear: moment().format('MMMM YYYY'),
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        nextDay: (state, action) => {
            state.fullDate = moment(action.payload).clone().add(1, 'month').format('YYYY-MM-DD');
            state.day = moment(action.payload).clone().add(1, 'month').format('D');
            state.monthYear = moment(action.payload).clone().add(1, 'month').format('MMMM YYYY');
        },
        prevDay: (state, action) => {
            state.fullDate = moment(action.payload).clone().subtract(1, 'month').format('YYYY-MM-DD');
            state.day = moment(action.payload).clone().subtract(1, 'month').format('D');
            state.monthYear = moment(action.payload).clone().subtract(1, 'month').format('MMMM YYYY');
        },
        currentDay: (state) => {
            state.fullDate = moment().clone().format('YYYY-MM-DD');
            state.day = moment().clone().format('D');
            state.monthYear = moment().clone().format('MMMM YYYY');
        },
    },
})

export const { nextDay, prevDay, currentDay } = calendarSlice.actions;
export const daySelector = (state: RootState) => state.calendar.day;
export const fullDateSelector = (state: RootState) => state.calendar.fullDate;
export const monthYearSelector = (state: RootState) => state.calendar.monthYear;
export default calendarSlice.reducer;