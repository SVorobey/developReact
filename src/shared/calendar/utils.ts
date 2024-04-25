import { State } from "@entities/calendar/model";
import moment from "moment";

export const add = (state: State, value: any) => {
  if (state.selectedView === "month") {
    state.fullDate = moment(value).clone().add(1, "month").format("YYYY-MM-DD");
    state.day = moment(value).clone().add(1, "month").format("D");
    state.monthYear = moment(value).clone().add(1, "month").format("MMMM YYYY");
  } else {
    state.fullDate = moment(value).clone().add(1, "week").format("YYYY-MM-DD");
    state.day = moment(value).clone().add(1, "week").format("D");
    state.monthYear = moment(value).clone().add(1, "week").format("MMMM YYYY");
  }
};

export const subtract = (state: State, value: any) => {
  if (state.selectedView === "month") {
    state.fullDate = moment(value)
      .clone()
      .subtract(1, "month")
      .format("YYYY-MM-DD");
    state.day = moment(value).clone().subtract(1, "month").format("D");
    state.monthYear = moment(value)
      .clone()
      .subtract(1, "month")
      .format("MMMM YYYY");
  } else {
    state.fullDate = moment(value)
      .clone()
      .subtract(1, "week")
      .format("YYYY-MM-DD");
    state.day = moment(value).clone().subtract(1, "week").format("D");
    state.monthYear = moment(value)
      .clone()
      .subtract(1, "week")
      .format("MMMM YYYY");
  }
};
