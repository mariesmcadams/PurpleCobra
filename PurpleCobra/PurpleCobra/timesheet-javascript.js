$(document).ready(function() {
    $('#pendingTimesheetsTable').dataTable();
} );

$this->load->helper('download');

$data = file_get_contents(base_url("downloads/reports/$filename.pdf")); // Read the file's contents
$name = 'mynewfile.pdf';

force_download($name, $data);
