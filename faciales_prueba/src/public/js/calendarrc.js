document.addEventListener('DOMContentLoaded', function () {
    var Draggable = FullCalendar.Draggable;
    var containerEl = document.getElementById('external-events');
    var calendarrio = document.getElementById('calendar3');
  
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });
  
    var calendarvv = new FullCalendar.Calendar(calendarrio, {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      timeZone: 'UTC',
      headerToolbar: {
        right: 'resourceTimeGridDay,timeGridWeek',
        center: 'prev today next',
        left: 'title',
      },
      initialView: 'resourceTimeGridDay',
      scrollTime: '8:00',
      aspectRatio: 1.4,
      droppable: true,
      views: {
        resourceTimelineDay: {
          buttonText: ':15 slots',
          slotDuration: '00:15'
        },
        resourceTimelineTenDay: {
          type: 'resourceTimeline',
          duration: { days: 10 },
          buttonText: '10 days'
        }
      },
      editable: true,
      selectable: true,
      nowIndicator: true,
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Boss Room" },
        { "id": "b", "title": "Silla 1", "eventColor": "rgb(0, 116, 217)" },
        { "id": "c", "title": "Silla 2", "eventColor": "rgb(240, 18, 190)" }
      ],
      events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
  
    });
  
    calendarvv.render();
  });