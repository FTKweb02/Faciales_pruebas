document.addEventListener('DOMContentLoaded', function () {
    var Calendar = FullCalendar.Calendar;
    var calendarEl = document.getElementById('calendar');

    var sucursales = calendarEl.getAttribute('datas');
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

        resourceGroupField: 'Nombre',
        resources: JSON.parse(sucursales),

        events: JSON.parse(sucursales),

        resourceAreaHeaderContent: 'Sucursales',
        nowIndicator: true,
        allDaySlot: false,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar

    });

    calendar.render();
});