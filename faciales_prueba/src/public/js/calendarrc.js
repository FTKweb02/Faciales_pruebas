document.addEventListener('DOMContentLoaded', function () {
    var calendarrio = document.getElementById('calendar3');
  
  
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
        resourceTimeGridDay: {
          buttonText: 'Sillas',
          slotDuration: '00:15'
        },
        resourceTimelineTenDay: {
          type: 'resourceTimeline',
          duration: { days: 10 },
          buttonText: '10 days',
          slotDuration: '00:15'
        }
      },
      editable: true,
      selectable: true,
      nowIndicator: true,
      allDaySlot: false,
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Boss Room" },
        { "id": "b", "title": "Sala Compartida", "eventColor": "rgb(0, 116, 217)" }
      ],
      events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
  
    });
  
    calendarvv.render();
  });