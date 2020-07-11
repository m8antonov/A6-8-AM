const firstButton = $('.j-btn-1');
const secondButton = $('.j-btn-2');
const thirdButton = $('.j-btn-3');
let width = 0;

firstButton.click(function(){
  width = width + 1;
  console.log('currentProgress = ', width);
  $('.progress-bar').attr("style", "width: " + width + "%")
});

secondButton.click(function(){
  width = width + 3;
  console.log('currentProgress = ', width);
  $('.progress-bar').attr("style", "width: " + width + "%")
});

thirdButton.click(function(){
  width = width + 7;
  console.log('currentProgress = ', width);
  $('.progress-bar').attr("style", "width: " + width + "%")
});