document.addEventListener('DOMContentLoaded', function () {
    var Draggable = FullCalendar.Draggable;
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');

    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });

    var calendar = new FullCalendar.Calendar(calendarEl, {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      locale: 'en',
      headerToolbar: {
        right: 'today prev,next resourceTimeGridDay,timeGridWeek resourceTimelineDay listDay',
        center: '',
        left: 'title'
      },
      initialView: 'resourceTimeGridDay',
      scrollTime: '8:00',
      aspectRatio: 1.6,
      views: {
        resourceTimeGridDay: {
          buttonText: 'Cabinas',
          slotDuration: '00:15'
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
      
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Saphire" },
        { "id": "b", "title": "Emerald", "eventColor": "rgb(0, 116, 217)" },
        { "id": "c", "title": "Ruby", "eventColor": "rgb(240, 18, 190)" },
        { "id": "d", "title": "Starlight", "eventColor": "rgb(136, 17, 85)" },
        { "id": "e", "title": "Opal" },
        { "id": "f", "title": "Pearl" },
      ],
      events: '/json/events.json',
      
      droppable: true,
      editable: true,
      selectable: true,
      nowIndicator: true,
      allDaySlot: false,
    });

    calendar.render();
  });