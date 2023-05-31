Function.prototype.callPolyfill = function(context, ...args) {
    return this.apply(context, args)
}

// function increment() { this.count++; return this.count; }
// function keys() { return Object.keys(this); }

// console.log(keys.callPolyfill( [{"x": 1, "y": 2}] ) );