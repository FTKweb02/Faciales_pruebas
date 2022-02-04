function genJSON(idCalendario_RS, title, resourceId, start, end, Resvera_idResvera, Sucursal_RS_idSucursal_RS) {
    $.ajax({
        type: "POST",
        url: "/json/events.json",
        data: JSON.stringify(events),
        contentType: "application/json; charset: 'utf8'",
        dataType: "json"
    })
    doc.text(idCalendario_RS);
    doc.text(title);
    doc.text(resourceId);
    doc.text(start);
    doc.text(end);
    doc.text(Resvera_idResvera);
    doc.text(Sucursal_RS_idSucursal_RS);
    doc.save('event' + title + "_" + idCalendario_RS + '.json');
   }