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
    const [daysOfMonth, setDaysOfMonth] = useState({
        endDay: moment().endOf('month').endOf('week'),
        startDay: moment().startOf('month').startOf('week')
    });

    useEffect(() => {
        const calculateDaysOfMonth = () => {
            setDaysOfMonth({
                endDay: moment().endOf('month').endOf('week'),
                startDay: moment().startOf('month').startOf('week'),
            });
        };

        calculateDaysOfMonth();
    }, []);

    return daysOfMonth;
};

export default useGetDate;