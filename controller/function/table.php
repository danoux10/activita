<?php
$dataSelects ='20';
    function tableSelect() {
        global $dataSelects;
        $tableSelect = "<table id='tableSelect'>";
            $tableSelect .="<thead>";
	            $tableSelect .="<tr>";
                    $tableSelect .="<th>Date</th>";
                    $tableSelect .="<th>Activiter</th>";
                    $tableSelect .="<th>Heure Start</th>";
                    $tableSelect .="<th>Heure End</th>";
                    $tableSelect .="<th>Duration</th>";
                    $tableSelect .="<th>Description</th>";
                $tableSelect .="</tr>";
            $tableSelect.="</thead>";
            for ($i=0; $i<$dataSelects; $i++) {
               $tableSelect .="<tbody>";
                  $tableSelect .="<tr>";
                      $tableSelect .="<td>12/12/2022</td>";
                      $tableSelect .="<td>Coding</td>";
                      $tableSelect .="<td>10:00</td>";
                      $tableSelect .="<td>11:00</td>";
                      $tableSelect .="<td>01:00</td>";
                      $tableSelect .="<td>projet activiter $i</td>";
                  $tableSelect .="</tr>";
               $tableSelect .="</tbody>";
            }
        $tableSelect.="</table>";
        return $tableSelect;
    };
		
		function tableDay(){
			global $dataSelects;
			$tableDay = "<table id='tableSelect' class='w-full'>";
			$tableDay .="<thead>";
			$tableDay .="<tr>";
			$tableDay .="<th>Date</th>";
			$tableDay .="<th>Activiter</th>";
			$tableDay .="<th>Heure Start</th>";
			$tableDay .="<th>Heure End</th>";
			$tableDay .="<th>Duration</th>";
			$tableDay .="<th>Description</th>";
			$tableDay .="<th>Select</th>";
			$tableDay .="</tr>";
			$tableDay.="</thead>";
			for ($i=0; $i<$dataSelects; $i++) {
				$tableDay .="<tbody>";
				$tableDay .="<tr>";
				$tableDay .="<td>12/12/2022</td>";
				$tableDay .="<td>Coding</td>";
				$tableDay .="<td>10:00</td>";
				$tableDay .="<td>11:00</td>";
				$tableDay.="<td>01:00</td>";
				$tableDay .="<td>projet activiter $i</td>";
				$tableDay .="<td><input type='radio' name='selectTab' id='$i'></td>";
				$tableDay .="</tr>";
				$tableDay .="</tbody>";
			}
			$tableDay.="</table>";
			return $tableDay;
		}
?>