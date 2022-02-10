document.addEventListener('DOMContentLoaded', function () {
  var Calendar = FullCalendar.Calendar;
  var calendarEl = document.getElementById('calendar');

  var horarios = calendarEl.getAttribute('data');
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
    eventClick: function(info) {
      alert('Event: ' + info.event.title);
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('View: ' + info.view.type);
    info.el.style.borderColor = 'red';
    },
    events: JSON.parse(horarios),

    nowIndicator: true,
    allDaySlot: false,
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar

  });

  calendar.render();
});