/* eslint-disable @typescript-eslint/no-explicit-any */
import { State } from "@entities/calendar/model";
import moment from "moment";

export const add = (state: State, value: any) => {
  if (state.selectedView === "month") {
    state.fullDate = moment(value).clone().add(1, "month").format("YYYY-MM-DD");
  } else {
    state.fullDate = moment(value).clone().add(1, "week").format("YYYY-MM-DD");
  }
};

export const subtract = (state: State, value: any) => {
  if (state.selectedView === "month") {
    state.fullDate = moment(value).clone().subtract(1, "month").format("YYYY-MM-DD");
  } else {
    state.fullDate = moment(value).clone().subtract(1, "week").format("YYYY-MM-DD");
  }
};
