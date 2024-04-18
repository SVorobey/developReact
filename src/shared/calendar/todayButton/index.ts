export function pressTodayButton (day:moment.Moment) {
    return day.clone().subtract(1, 'month');
}
