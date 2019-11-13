import { Component, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { AppService, EventData, Data } from './app.service';
import Query from 'devextreme/data/query';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppService]
})
export class AppComponent {
    @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;

    data: Data[];
    currentDate: Date = new Date();
    eventsData: EventData[];

    constructor(service: AppService) {
        this.data = service.getData();
        this.eventsData = service.getEventsData();
    }

    onAppointmentFormOpening(data) {
        const that = this;
        const form = data.form;
        const eventInfo = that.getEventById(data.appointmentData.eventId) || {};

        form.option('items', [{
            label: {
                text: 'Event'
            },
            editorType: 'dxTextBox',
            dataField: 'eventId',
            editorOptions: {
                value: eventInfo.events,
                displayExpr: 'text',
                valueExpr: 'id'
            }
        }, {
            label: {
                text: 'Participants'
            },
            name: 'participants',
            editorType: 'dxTextBox',
            editorOptions: {
                value: eventInfo.participants
            }
        }, {
            label: {
                text: 'Baseline Forecast'
            },
            name: 'baseline',
            editorType: 'dxTextBox',
            editorOptions: {
                value: eventInfo.participants
            }
        }, {
            label: {
                text: 'Event Uplift'
            },
            name: 'uplift',
            editorType: 'dxTextBox',
            editorOptions: {
                value: eventInfo.participants
            }
        }, {
            dataField: 'startDate',
            editorType: 'dxDateBox',
            editorOptions: {
                width: '100%',
                type: 'datetime'
            }
        }, {
            name: 'endDate',
            dataField: 'endDate',
            editorType: 'dxDateBox',
            editorOptions: {
                width: '100%',
                type: 'datetime'
            }
        }]);
    }

    onAppointmentAdded(data) {
        console.log('Data ', data);
    }

    deleteAppointment(e) {
        this.scheduler.instance.deleteAppointment(e.appointmentData);
        this.scheduler.instance.hideAppointmentTooltip();
    }

    getEventById(id) {
        return Query(this.eventsData).filter(['id', '=', id]).toArray()[0];
    }

    getDateById(id) {
        return Query(this.data).filter(['eventId', '=', id]).toArray()[0];
    }
}
