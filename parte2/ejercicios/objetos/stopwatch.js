/*
duration
reset 
start --> no se puede hacer start si ya se realizó start
stop --> no se puede hacer stop si ya se realizó stop
*/

const sw = new Stopwatch();

sw.start();
setTimeout(() => {
  sw.stop();
  console.log({ duration: sw.duration });
  sw.reset();
}, 500);

function Stopwatch() {
  let duration = 0;
  let running = false;
  let startTime, endTime;

  this.reset = function () {
    duration = 0;
    running = false;
    startTime = endTime = null;
  };

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is stopped.");

    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
