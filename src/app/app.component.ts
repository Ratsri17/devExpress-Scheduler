import { Component, ViewChild } from '@angular/core';

import { Priority, Resource, Appointment, AppService } from './app.service';

@Component({
    styleUrls: ['./app.component.css'],
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [AppService]
})
export class AppComponent {
    appointmentsData: Appointment[];
    resourcesData: Resource[];
    prioritiesData: Priority[];
    currentDate: Date = new Date(2017, 4, 1);

    constructor(service: AppService) {
        this.appointmentsData = service.getAppointments();
        this.resourcesData = service.getResources();
        this.prioritiesData = service.getPriorities();
    }

    onAppointmentAdded(e) {
        const appointmentData = e.appointmentData;
        console.log(appointmentData);
    }

    onAppointmentFormOpening(e) {
        console.log('Worked ', e);
    }
}
