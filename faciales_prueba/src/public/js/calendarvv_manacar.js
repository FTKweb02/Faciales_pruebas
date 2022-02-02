document.addEventListener('DOMContentLoaded', function () {
    var calendarrio = document.getElementById('calendar_man');
  
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
          buttonText: 'Cabinas',
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
        { "id": "a", "title": "Cabina 1" },
        { "id": "b", "title": "Cabina 2" },
        { "id": "c", "title": "Cabina 3" }
      ],
      events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
  
    });
  
    calendarvv.render();
  });