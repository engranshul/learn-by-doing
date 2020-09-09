// set timeout is taking a function and a timeout value
// so post completion of 10000ms function is called and
// it prints hello world

// line1 and line2 are happening now and we are in control
// of them..line3 will happen at some unspecified later 
// time and we are not in control for that..we have given
// that control to setTimeout utility..this is inversion
// of control and one of the drawback of callbacks

// with that there arises below trust issues with callbacks
// this is a fundamental issue with callbacks..ioc and trust 
// issues
/* 
not too early
not too late
not too many times
not too few times
no lost context
no swallowed errors
*/

// line 1 
setTimeout(function() {
    console.log("hello  world") // line3
},10000);
// line 2
