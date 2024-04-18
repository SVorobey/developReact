export function pressNextButton (day:moment.Moment) {
    return day.clone().add(1, 'month');
}