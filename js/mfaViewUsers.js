$(document).ready(function(){
    $('#myTable').dataTable({
        searching: false,
        info: false,
        lengthChange: false,
        aoColumnDefs: [{
            bSortable: false,
            aTargets: [-1]
        }]
    });
});