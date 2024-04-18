export function pressPreviousButton (day:moment.Moment) {
    return day.clone().subtract(1, 'month');
    console.log("я сработало"); 
}