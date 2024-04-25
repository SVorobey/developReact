/* eslint-disable @typescript-eslint/no-explicit-any */
import { current, next, previous, selectView } from "@entities/calendar/model";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface IHeaderData {
  label: string;
  action?: ActionCreatorWithPayload<any, string>;
  id?: string;
}

export interface IHeaderButtonsData extends IHeaderData {
  action: ActionCreatorWithPayload<any>;
}

export const monthWeekData: IHeaderData[] = [
  {
    label: "Месяц",
    action: selectView,
    id: "month",
  },
  {
    label: "Неделя",
    action: selectView,
    id: "week",
  },
];

export const currentPrevNext: IHeaderButtonsData[] = [
  {
    label: "Предыдущий",
    action: previous,
  },
  {
    label: "Сегодня",
    action: current,
  },
  {
    label: "Следующий",
    action: next,
  },
];
