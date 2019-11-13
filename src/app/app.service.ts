import { Injectable } from '@angular/core';

export class EventData {
    id: number;
    text: string;
    participants: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    baseline: number;
    uplift: number;
    color: string;
}

export class Data {
    eventId: number;
    startDate: Date;
    endDate: Date;
}

const eventsData: EventData[] = [{
    id: 1,
    text: 'Event1',
    participants: '100',
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-07 23:59:59'),
    duration: 92,
    baseline: 10,
    uplift: 10,
    color: '#cb6bb2'
}, {
    id: 2,
    text: 'Event2',
    participants: '100',
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-07 23:59:59'),
    duration: 93,
    baseline: 10,
    uplift: 10,
    color: '#56ca85'
}, {
    id: 3,
    text: 'Event3',
    participants: '100',
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
    duration: 111,
    baseline: 10,
    uplift: 10,
    color: '#1e90ff'
}, {
    id: 4,
    text: 'Event4',
    participants: '100',
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
    duration: 68,
    baseline: 10,
    uplift: 10,
    color: '#ff9747'
}, {
    id: 5,
    text: 'Event5',
    participants: '100',
    startDate: new Date('2019-11-07 00:00:00'),
    endDate: new Date('2019-11-13 23:59:59'),
    duration: 130,
    baseline: 10,
    uplift: 10,
    color: '#f05797'
}, {
    id: 6,
    text: 'Event6',
    participants: '100',
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
    duration: 87,
    baseline: 10,
    uplift: 10,
    color: '#2a9010'
}];

const data: Data[] = [{
    eventId: 3,
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-05 23:59:59')
}, {
    eventId: 1,
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-07 23:59:59'),
}, {
    eventId: 3,
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 4,
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-07 00:00:00'),
    endDate: new Date('2019-11-13 23:59:59'),
}, {
    eventId: 1,
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-03 00:00:00'),
    endDate: new Date('2019-11-07 23:59:59'),
}, {
    eventId: 5,
    startDate: new Date('2019-11-03 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-13 23:59:59'),
}, {
    eventId: 3,
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 4,
    startDate: new Date('2019-11-08 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 1,
    startDate: new Date('2019-11-09 00:00:00'),
    endDate: new Date('2019-11-10 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-10 00:00:00'),
    endDate: new Date('2019-11-11 23:59:59'),
}, {
    eventId: 4,
    startDate: new Date('2019-11-05 00:00:00'),
    endDate: new Date('2019-11-11 23:59:59'),
}, {
    eventId: 1,
    startDate: new Date('2019-11-09 00:00:00'),
    endDate: new Date('2019-11-11 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-03 23:59:59'),
}, {
    eventId: 3,
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-04 23:59:59'),
}, {
    eventId: 5,
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-05 23:59:59'),
}, {
    eventId: 4,
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-06 23:59:59'),
}, {
    eventId: 5,
    startDate: new Date('2019-11-01 00:00:00'),
    endDate: new Date('2019-11-06 23:59:59'),
}, {
    eventId: 1,
    startDate: new Date('2019-11-02 00:00:00'),
    endDate: new Date('2019-11-06 23:59:59'),
}, {
    eventId: 2,
    startDate: new Date('2019-11-04 00:00:00'),
    endDate: new Date('2019-11-07 23:59:59'),
}
];

@Injectable()
export class AppService {
    getEventsData() {
        return eventsData;
    }
    getData() {
        return data;
    }
}
