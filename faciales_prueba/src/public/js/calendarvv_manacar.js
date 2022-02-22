document.addEventListener('DOMContentLoaded', function () {
    var calendarrio = document.getElementById('calendar_man');
    var horarios = calendarrio.getAttribute('data');
    var calendarvv = new FullCalendar.Calendar(calendarrio, {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
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
      nowIndicator: true,
      allDaySlot: false,
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { "id": "a", "title": "Cabina 1" },
        { "id": "b", "title": "Cabina 2" },
        { "id": "c", "title": "Cabina 3" }
      ],
      events: JSON.parse(horarios),
  
    });
  
    calendarvv.render();
  });