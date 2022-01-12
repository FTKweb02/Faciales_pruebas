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
      timeZone: 'GMT-6',
      headerToolbar: {
        right: 'today prev,next resourceTimeGridDay,timeGridWeek resourceTimelineDay listDay',
        center: '',
        left: 'title'
      },
      initialView: 'resourceTimeGridDay',
      scrollTime: '1:00',
      aspectRatio: 1.6,
      droppable: true,
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
      editable: true,
      selectable: true,
      nowIndicator: true,
      allDaySlot: false,
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Saphire" },
        { "id": "b", "title": "Emerald", "eventColor": "rgb(0, 116, 217)" },
        { "id": "c", "title": "Ruby", "eventColor": "rgb(240, 18, 190)" },
        { "id": "d", "title": "Starlight", "eventColor": "rgb(136, 17, 85)" },
        { "id": "e", "title": "Opal" },
        { "id": "f", "title": "Pearl" },
      ],
      events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline',
      
      select: function (start, end) {
        $.getScript('/event/new', function () {
          $('#event_date_range').val(moment(start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm"));
          date_range_picker();
          $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
        });
      }
    });

    calendar.render();
  });