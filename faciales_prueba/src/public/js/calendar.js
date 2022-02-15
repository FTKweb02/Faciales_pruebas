document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var horarios = calendarEl.getAttribute('data');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    locale: 'en',
    headerToolbar: {
      right: 'today prev,next resourceTimeGridDay,timeGridWeek resourceTimelineDay listDay',
      center: '',
      left: 'title'
    },
    initialView: 'dayGridMonth',
    scrollTime: '8:00',
    aspectRatio: 1.6,
    views: {
      resourceTimeGridDay: {
        buttonText: 'Cabinas',
        slotDuration: '00:15',
      },
      timeGridWeek: {
        buttonText: 'Semana',
        slotDuration: '00:15',
      },
      resourceTimelineDay: {
        buttonText: 'Tecnologías',
        slotDuration: '00:15',
      },
      listDay: {
        buttonText: 'Resumen'
      }
    },

    resourceAreaHeaderContent: 'Cabinas',
    resources: [
      { "id": "a", "title": "Saphire" },
      { "id": "b", "title": "Emerald", "eventColor": "rgb(0, 116, 217)" },
      { "id": "c", "title": "Ruby", "eventColor": "rgb(240, 18, 190)" },
      { "id": "d", "title": "Starlight", "eventColor": "rgb(136, 17, 85)" },
      { "id": "e", "title": "Opal" },
      { "id": "f", "title": "Pearl" }
    ],
    events: JSON.parse(horarios),

    editable: true,
    selectable: true,
    nowIndicator: true,
    allDaySlot: false,
  });

  calendar.render();
});
