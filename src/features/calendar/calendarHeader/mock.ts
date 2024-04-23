/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentMonth, nextMonth, prevMonth } from "@entities/calendar/model";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Data {
    label: string,
}

export interface ButtonsData extends Data {
    action: ActionCreatorWithPayload<any>,
}

export const monthWeekData:Data[] = [
    {
        label: 'Месяц',
    },
    {
        label: 'Неделя',
    },
];

export const currentPrevNext:ButtonsData[] = [
    {
        label: 'Предыдущий',
        action: prevMonth,
    },
    {
        label: 'Сегодня',
        action: currentMonth,
    },
    {
        label: 'Следующий',
        action: nextMonth,
    },
]
