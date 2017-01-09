$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016-12-24 8:00',
            temp: '26°C' 
        }, {
            period: '2016-12-24 12:00',
            temp: '27°C'
        }, {
            period: '2016-12-24 16:00',
            temp: '28°C'
        }, {
            period: '2016-12-24 20:00',
            temp: '28°C'
        }, {
            period: '2016-12-24 23:59',
            temp: '27°C'
        }, {
            period: '2016-12-25 8:00',
            temp: '26°C'
        }, {
            period: '2016-12-25 12:00',
            temp: '27°C'
        }, {
            period: '2016-12-25 16:00',
            temp: '28°C'
        }, {
            period: '2016-12-25 20:00',
            temp: '28°C'
        }, {
            period: '2016-12-25 23:59',
            temp: '27°C'
        }],
        xkey: 'period',
        ykeys: ['temp'],
        labels: ['Temperature'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });


    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '8am',
            a: 100,
            b: 90
        }, {
            y: '12pm',
            a: 75,
            b: 65
        }, {
            y: '4pm',
            a: 50,
            b: 40
        }, {
            y: '8pm',
            a: 75,
            b: 65
        }, {
            y: '12am',
            a: 50,
            b: 40
        }, {
            y: '4am',
            a: 75,
            b: 65
        }, {
            y: '8am',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Internal', 'External'],
        hideHover: 'auto',
        resize: true
    });

});
