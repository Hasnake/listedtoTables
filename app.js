function addTable() {

  // var myTableDiv = document.getElementById('metric_results');
  // myTableDiv.appendChild(table);
  var table = document.createElement('TABLE');
  var tableBody = document.createElement('TBODY');

  table.border = '1';
  table.appendChild(tableBody);

  var heading = new Array();
  heading[0] = 'Request Type';
  heading[1] = 'Group A';
  heading[2] = 'Groub B';
  heading[3] = 'Group C';
  heading[4] = 'Total';

  var stock = new Array();
  stock[0] = new Array('Cars', '88.625', '85.50', '85.81', '987');
  stock[1] = new Array('Veggies', '88.625', '85.50', '85.81', '988');
  stock[2] = new Array('Colors', '88.625', '85.50', '85.81', '989');
  stock[3] = new Array('Numbers', '88.625', '85.50', '85.81', '990');
  stock[4] = new Array('Requests', '88.625', '85.50', '85.81', '991');

  //TABLE COLUMNS
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
  for (i = 0; i < heading.length; i++) {
    var th = document.createElement('TH');
    th.width = '75';
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);

  }
  return addTable();
}
