document.addEventListener('DOMContentLoaded', function () {
  var Calendar = FullCalendar.Calendar;
  var calendarEl = document.getElementById('calendar');


  // initialize the calendar

  var calendar = new Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    headerToolbar: {
      left: 'prev today next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },

    initialView: 'timeGridWeek',

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
        id: 'A',
        groupId: '1',
        title: 'Resource A'
      },
      {
        id: 'B',
        groupId: '2',
        title: 'Resource B'
      },
      {
        id: 'C',
        groupId: '3',
        title: 'Resource C'
      },
      {
        id: 'D',
        groupId: '4',
        title: 'Resource D'
      },
      {
        id: 'E',
        groupId: '5',
        title: 'Resource E'
      }
    ],

    nowIndicator: true,
    allDaySlot: false,
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar

  });

  calendar.render();
});