/* eslint-disable @typescript-eslint/no-explicit-any */
import { current, next, previous, selectView } from "@entities/calendar/model";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Data {
    label: string,
    action?: ActionCreatorWithPayload<any, string>,
    id?: string,
}

export interface ButtonsData extends Data {
    action: ActionCreatorWithPayload<any>,
}

export const monthWeekData:Data[] = [
    {
        label: 'Месяц',
        action: selectView,
        id: 'month',
    },
    {
        label: 'Неделя',
        action: selectView,
        id: 'week',
    },
];

export const currentPrevNext:ButtonsData[] = [
    {
        label: 'Предыдущий',
        action: previous,
    },
    {
        label: 'Сегодня',
        action: current,
    },
    {
        label: 'Следующий',
        action: next,
    },
]
