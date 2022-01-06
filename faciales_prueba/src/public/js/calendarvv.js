document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar1');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      timeZone: 'UTC',
      headerToolbar: {
        right: 'resourceTimeGridDay,timeGridWeek',
        center: 'prev today next',
        left: 'title',
      },
      initialView: 'resourceTimeGridDay',
      scrollTime: '8:00',
      aspectRatio: 1.5,
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
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Cabina 1" },
        { "id": "b", "title": "Cabina 2", "eventColor": "rgb(0, 116, 217)" },
        { "id": "c", "title": "Cabina 3", "eventColor": "rgb(240, 18, 190)" },
        { "id": "d", "title": "Cabina 4", "eventColor": "rgb(136, 17, 85)" }
      ],
      events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'

    });

    calendar.render();
  });