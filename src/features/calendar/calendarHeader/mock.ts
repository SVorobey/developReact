import { pressNextButton } from "@shared/calendar/nextButton";
import { pressPreviousButton } from "@shared/calendar/previousButton";
import { pressTodayButton } from "@shared/calendar/todayButton";

export type Data = {
    label: string,
    onClick?: () => void,
}

export const monthWeekData:Data[] = [
    {
        label: 'Месяц',
    },
    {
        label: 'Неделя',
    },
];

export const currentPrevNext:Data[] = [
    {
        label: 'Предыдущий',
        onClick: () => pressPreviousButton,
    },
    {
        label: 'Сегодня',
        onClick: () => pressTodayButton,
    },
    {
        label: 'Следующий',
        onClick: () => pressNextButton,
    },
]