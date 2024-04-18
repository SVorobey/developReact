import { useState, useEffect } from 'react';
import moment from 'moment';
import { daysOfWeek, monthsOfYear } from '@app/momentConfig';

const useGetDate = () => {
    moment.locale("ru", {
        week: {dow : 1},
        weekdaysShort: daysOfWeek,
        months: monthsOfYear,
        monthsMin: monthsOfYear.map((month) => month.slice(0, 3)),
    });
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(moment().startOf('month').startOf('week'));

    useEffect(() => {
        const calculateDaysOfMonth = () => {
            setFirstDayOfMonth(moment().startOf('month').startOf('week'));
        };
        calculateDaysOfMonth();
    }, []);

    return firstDayOfMonth;
};

export default useGetDate;