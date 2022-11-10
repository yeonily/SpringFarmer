google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'date');
    data.addColumn('number', 'visitor');

    // 차트 안에 들어갈 데이터
    data.addRows([
        [8,  5],
        [9,  3],
        [10, 4],
        [11, 2],
        [12, 5],
        [13, 6],
        [14, 3]
    ]);

    var options = {
        series: { // 선 색 바꾸기
            0: { color: '#A0BAED' },
        },
        legend : { // 범례 없애기
            position : 'none'
        },
        hAxis: { // x축 설정
            title: ''
        },
        vAxis: { // y축 설정
        }
    };

    var chart = new google.charts.Line(document.getElementById('lineChart'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}