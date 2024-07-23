
$(document).ready(function () {
    $("#container_header").load("header.html");
    $("#container_footer").load("footer.html");
    $('#Data_Table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});
