document.addEventListener('DOMContentLoaded', function () {
    var Calendar = FullCalendar.Calendar;
    var calendarEl = document.getElementById('calendar');


    // initialize the calendar

    var calendar = new Calendar(calendarEl, {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        headerToolbar: {
            left: 'prev today next',
            center: 'title',
            right: ''
        },

        initialView: 'resourceTimelineDay',

        views: {
            timeGridWeek: {
                buttonText: 'Semana'
            },
            timeGridDay: {
                buttonText: 'Día'
            }
        },

        resourceGroupField: 'groupId',
        resources: [
            {
                id: 'a',
                groupId: 'Sucursal 1',
                title: 'Facialista A',
            },
            {
                id: 'b',
                groupId: 'Sucursal 2',
                title: 'Facialista B'
            },
            {
                id: 'c',
                groupId: 'Sucursal 3',
                title: 'Facialista C'
            },
            {
                id: 'd',
                groupId: 'Sucursal 4',
                title: 'Facialista D'
            },
            {
                id: 'e',
                groupId: 'Sucursal 5',
                title: 'Facialista E'
            }
        ],

        events: [
            {
                "resourceId": "b",
                "title": "Prueba constante",
                startTime: '10:00',
                endTime: '18:00',


                daysOfWeek: [1]
            },
            {
                "resourceId": "b",
                "title": "Comida",
                startTime: '13:00',
                endTime: '14:00',

                daysOfWeek: [1]
            },

            {
                "resourceId": "b",
                "title": "Prueba constante",
                startTime: '11:00',
                endTime: '19:00',


                daysOfWeek: [2]
            },
            {
                "resourceId": "b",
                title: "Comida",
                startTime: '14:00',
                endTime: '15:00',

                daysOfWeek: [2]
            },

        ],

        resourceAreaHeaderContent: 'Sucursales',
        nowIndicator: true,
        allDaySlot: false,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar

    });

    calendar.render();
});