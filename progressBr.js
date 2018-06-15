$(document).ready(function() {
  var lineBar  = new ProgressBar.Line('#line-container', {
      color: 'brown',
      strokeWidth: 3.5,
      trailWidth: 0.5,
  });

  lineBar.animate(1.0, {
    duration: 2400,
  });

  var circleBar = new ProgressBar.Circle('#circle-container', {
      color: 'yellow',
      strokeWidth: 3,
      trailWidth: 12,
      trailColor: 'black',
      easing: 'easeInOut',
  });

  circleBar.animate(0.85, {
    duration: 3000,
  });

  var semiBar = new ProgressBar.SemiCircle('#semi-container', {
      color: 'orange',
      strokeWidth: 4.5,
      trailWidth: 3,
      easing: 'bounce',
  });

  semiBar.animate(1.0, {
    duration: 3200,
  });
});
