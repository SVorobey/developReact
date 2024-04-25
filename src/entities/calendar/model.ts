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
    selectedView: 'month' | 'week',
}

const initialState: State = {
    day: moment().format('D'),
    fullDate: moment().format('YYYY-MM-DD'),
    monthYear: moment().format('MMMM YYYY'),
    selectedView: 'month',
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        next: (state, action) => {
            if (state.selectedView === 'month') {
                state.fullDate = moment(action.payload).clone().add(1, 'month').format('YYYY-MM-DD');
                state.day = moment(action.payload).clone().add(1, 'month').format('D');
                state.monthYear = moment(action.payload).clone().add(1, 'month').format('MMMM YYYY');
            } else {
                state.fullDate = moment(action.payload).clone().add(1, 'week').format('YYYY-MM-DD');
                state.day = moment(action.payload).clone().add(1, 'week').format('D');
                state.monthYear = moment(action.payload).clone().add(1, 'week').format('MMMM YYYY');
            }
        },
        previous: (state, action) => {
            if (state.selectedView === 'month') {
                state.fullDate = moment(action.payload).clone().subtract(1, 'month').format('YYYY-MM-DD');
                state.day = moment(action.payload).clone().subtract(1, 'month').format('D');
                state.monthYear = moment(action.payload).clone().subtract(1, 'month').format('MMMM YYYY');  
            } else {
                state.fullDate = moment(action.payload).clone().subtract(1, 'week').format('YYYY-MM-DD');
                state.day = moment(action.payload).clone().subtract(1, 'week').format('D');
                state.monthYear = moment(action.payload).clone().subtract(1, 'week').format('MMMM YYYY');
            }
        },
        current: (state) => {
            state.fullDate = moment().clone().format('YYYY-MM-DD');
            state.day = moment().clone().format('D');
            state.monthYear = moment().clone().format('MMMM YYYY');
        },
        selectView: (state, action) => {
            state.selectedView = action.payload;
        }
    },
})

export const { next, previous, current, selectView } = calendarSlice.actions;
export const daySelector = (state: RootState) => state.calendar.day;
export const fullDateSelector = (state: RootState) => state.calendar.fullDate;
export const monthYearSelector = (state: RootState) => state.calendar.monthYear;
export const viewSelector = (state: RootState) => state.calendar.selectedView;
export default calendarSlice.reducer;