
const up = 'up';
const down = 'down'
const blueBottom = new Waypoint({
    element: document.querySelector('.blue'),
    handler: function(direction) {
        if(direction === "down") alert('Are you sure ? Things are wild down there');
    },
    offset: '99%'
})

const blueTop = new Waypoint({
    element: document.querySelector('.blue'),
    handler: function(direction) {
        if(direction === "up") alert('I told you!' );
    },
})