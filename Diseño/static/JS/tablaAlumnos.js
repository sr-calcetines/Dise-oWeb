function addRow() {
            var table = document.getElementById("tablaActividades");
            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);

            cell0.innerHTML = '<td contenteditable="true" placeholder="Dual/FCT">Dual/FCT</td>';
            cell1.innerHTML = '<td contenteditable="true" placeholder="01/01/2023">01/01/2023</td>';
            cell2.innerHTML = '<td contenteditable="true" placeholder="Ejemplo de actividad">Ejemplo de actividad</td>';
            cell3.innerHTML = '<td contenteditable="true" placeholder="2">2</td>';
            cell4.innerHTML = '<td contenteditable="true" placeholder="Sin observaciones">Sin observaciones</td>';
            cell5.innerHTML = '<td><button class="deleteRow" onclick="deleteRow(this)" id="deleteRow">-</button></td>';
        }

        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        document.getElementById("table").addEventListener("click", function(e) {
            if (e.target && e.target.nodeName == "TD") {
                e.target.setAttribute("contenteditable", "true");
            }
        });