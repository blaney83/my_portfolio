// const chartistPluginAxisTitle = require("../../../node_modules/chartist-plugin-axistitle/dist/chartist-plugin-axistitle")
const Chartist = require("chartist")

var serverChart = {
    data: {
        labels: ['Express', 'Node', 'NPM/Yarn', 'CRUD Ops', 'REST',  'Remote Deployment'],
        series: [
            [9, 9, 9, 9, 9, 8.5]
        ]
    },
    options: {
        low: 0
    },
    animation: {
        // Let's put a sequence number aside so we can use it in the event callbacks
        seq: 0,
        delays: 80,
        durations: 500,
        // Once the chart is fully created we reset the sequence
        created: function () {
            serverChart.animation.seq = 0;
        },
        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        draw: function (data) {
            serverChart.animation.seq++;
            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: serverChart.animation.seq * serverChart.animation.delays + 1000,
                        // Duration of the animation
                        dur: serverChart.animation.durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: serverChart.animation.seq * serverChart.animation.delays,
                        dur: serverChart.animation.durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: serverChart.animation.seq * serverChart.animation.delays,
                        dur: serverChart.animation.durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: serverChart.animation.seq * serverChart.animation.delays,
                        dur: serverChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    x2: {
                        begin: serverChart.animation.seq * serverChart.animation.delays,
                        dur: serverChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    opacity: {
                        begin: serverChart.animation.seq * serverChart.animation.delays,
                        dur: serverChart.animation.durations,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: serverChart.animation.seq * serverChart.animation.delays,
                    dur: serverChart.animation.durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var pos2Animation = {
                    begin: serverChart.animation.seq * serverChart.animation.delays,
                    dur: serverChart.animation.durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: serverChart.animation.seq * serverChart.animation.delays,
                    dur: serverChart.animation.durations,
                    from: 0,
                    to: 1,
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                data.element.animate(animations);
            }
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }
        ]
    ],
    plugins: {
        // chartistPluginAxisTitle: function(){
        //     chartistPluginAxisTitle({
        //     axisX: {
        //         axisTitle : 'Time (mins)',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 50
        //         },
        //         textAnchor : 'middle'
        //     },
        //     axisY: {
        //         axisTitle : 'Goals',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 0
        //         },
        //         textAnchor : 'middle',
        //         flipTitle : false
        //     }
        // })
        // }
    }
}
// );

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
// chart.on('created', function () {
//     if (window.__exampleAnimateTimeout) {
//         clearTimeout(window.__exampleAnimateTimeout);
//         window.__exampleAnimateTimeout = null;
//     }
//     window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
// });

module.exports = {
    serverChart
}