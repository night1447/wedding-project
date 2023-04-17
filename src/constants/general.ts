export const TITLE_SITE: string = 'Саша&Настя';

export const PLACE: string = 'Atrium hall';
export const ADDRESS: string = 'г Лида ул рыбиновского 86';
export const DATE: string = '24 июня 2023'


export type TimeTableType = { time: string, value: string, description?: string }
export const TIMETABLE: TimeTableType[] = [
    {
        time: '16:00',
        value: 'Сбор гостей',
        description: 'Вас будут ждать охлаждающие коктейли,чтобы расслабиться и добавить нотку веселья в момент ожидания'
    }, {
        time: '16:40',
        value: 'Церемония',
        description: 'Приготовьте с собой платочки для самого трогательного момента нашего торжества'
    },
    {
        time: '17:10',
        value: 'Фотосессия с гостями',
        description: 'Никто не останется без ярких кадров с нами на память:)\n'
    },
    {
        time: '17:30',
        value: 'Банкет',
        description: 'Время подкрепиться и насладиться вечером в компании заводного ведущего💃🕺'
    }, {
        time: '1:00',
        value: 'Окончание'
    },
]

export const ALCHO_ANSWERS: string[] = ['Вино', 'Водка', 'Виски', 'Шампанское', 'Не пью алкоголь'];

export const BARCODE: string = '#наконецТолмиевы';
