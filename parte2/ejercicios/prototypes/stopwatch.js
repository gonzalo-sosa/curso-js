/*
Pasar métodos a prototype  
*/

function Stopwatch() {
  let duration = 0;
  let running = false;
  let startTime = null;
  let endTime = null;

  Object.defineProperty(this, "duration", {
    set: function (value) {
      duration = value;
    },
    get: function () {
      return duration;
    },
  });

  Object.defineProperty(this, "running", {
    set: function (value) {
      running = value;
    },
    get: function () {
      return running;
    },
  });

  Object.defineProperty(this, "startTime", {
    set: function (value) {
      startTime = value;
    },
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    set: function (value) {
      endTime = value;
    },
    get: function () {
      return endTime;
    },
  });
}

Stopwatch.prototype.reset = function () {
  this.duration = 0;
  this.running = false;
  this.startTime = this.endTime = null;
};

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started.");

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is stopped.");

  this.running = false;
  this.endTime = new Date();
  this.duration = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
};

const sw = new Stopwatch();

// sw.duration = 10 <-- expuesto por lo que puede ser modificado

/*
La optimización prematura da lugar a errores como exponer propiedades que no deben de serlo 
*/

console.log({ duration: sw.duration });
sw.start();
setTimeout(() => {
  sw.stop();
  console.log({ duration: sw.duration });
  sw.reset();
}, 500);
