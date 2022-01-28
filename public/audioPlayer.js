
/*           Filter types
There are many kinds of filters that can be used to achieve certain kinds of effects:

Low-pass filter Makes sounds more muffled

High-pass filter Makes sounds more tinny

Band-pass filter Cuts off lows and highs (e.g., telephone filter)

Low-shelf filter Affects the amount of bass in a sound (like the bass knob on a stereo)

High-shelf filter Affects the amount of treble in a sound (like the treble knob on a stereo)

Peaking filter Affects the amount of midrange in a sound (like the mid knob on a stereo)

Notch filter Removes unwanted sounds in a narrow frequency range

All-pass filter Creates phaser effects
*/

//before seeting which track should be palying at the moment, we need to find the zone location of the user

audioContainer = "audioContainer1";

// allocating variables for each container with music.
const audioContainer1 = document.getElementById(audioContainer);



// muted containers from start. Volume goes from 0 to 1 (decimal numbers).
audioContainer1.volume = 0;

//Web Audio API 
var context = new(window.AudioContext || window.webkitAudioContext);
//holds current track being played 
var mediaElement = audioContainer1; 
//here we create/open the node 
var source = context.createMediaElementSource(mediaElement);
var dist = context.createWaveShaper(); 
var gain = context.createGain();

//here we add bass filter/fx to the node
bassFilter = context.createBiquadFilter();
bassFilter.type = "lowshelf";
bassFilter.frequency.value = 200; 

// here we add treble filter/fx to the node.
trebleFilter = context.createBiquadFilter();
trebleFilter.type = "highshelf"; 
trebleFilter.frequency.value = 2000;

//connecting the filter nodes to the audio source and send it to the destination (window)
source.connect(bassFilter);
bassFilter.connect(trebleFilter); 
trebleFilter.connect(context.destination);

// function loops and plays the music just the first track for now.
function startAudios(){
    audioContainer1.loop = true;

    audioContainer1.play(); 
    

    // testMusic has to constantly be executed to work. It handles all the logic of the zones.
    //setInterval(testMusic, 5000);
    //setInterval(testSlider, 5000);
}
//linked to a pause button, simply pauses the audio
function pauseAudios(){
    audioContainer1.pause();
}



//function handles the fade in and out of the tracks. 
function musicFade(sValue){
    
}

//volume controls 
function setVolume (uiVolume){
    audioContainer1.volume = uiVolume/100;
}

// function determines if coordinates are inside a polygon.
function inside(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

// function handles the logic of the zones in the map.
/*function testMusic(){
    const zone_one = new zoneOne();;
    var vertices = [[zone_one.get_first_lat, zone_one.get_first_lng],
                    [zone_one.get_second_lat, zone_one.get_second_lng],
                    [zone_one.get_third_lat, zone_one.get_third_lng],
                    [zone_one.get_fourth_lat, zone_one.get_fourth_lng]];
    lat = loc.lat;
    lng = loc.lng;

    if(inside([lat, lng],vertices)){
        console.log("In location");
        increaseMusic();
    } else{
        console.log("Not in location");
        fadeMusic();
    }
}*/
