var input = document.querySelector('input').addEventListener('keyup', function(e) {
  var value = this.value,
      result = "";
  
  try {
  value = value.split('');
  
  // Filter non hex values
  for (var i = 0; i < value.length; i++) {
    var val = value[i];
    
    if (!/^[0-9A-F]{1}$/i.test(val)) {
      val = 0;
    } 
    
    result += val;
  }
  
  // Multiple of 3
  if (result.length % 3) {
    result += Array((3 - result.length % 3) + 1).join("0");
  }
                                                                                   
  // Multiple of 6
  if (result.length % 6) {
    result += Array((6 - result.length % 6) + 1).join("0");
  }
  
  // Split in 3 groups with equal size
  var regexp = new RegExp("([A-Z0-9]{"+result.length / 3+"})", "i");
  result = result.split(regexp);
  
  // Remove first 0 (if there is one at first postion of every group
  if (result[1].length > 2) {
    if (result[1].charAt(0) == result[3].charAt(0) == result[5].charAt(0) == 0) {
      result[1] = result[1].substr(1);
      result[3] = result[3].substr(1);
      result[5] = result[5].substr(1);
    }
  }
  
  // Truncate (first 2 chars stay, the rest gets deleted)
  result[1] = result[1].slice(0, 2);
  result[3] = result[3].slice(0, 2);
  result[5] = result[5].slice(0, 2);
  
    // Output
  output.innerText = "#"+result[1] + result[3] + result[5];
  
    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
  
    r = hexToR(output.innerText);
    g = hexToG(output.innerText);
    b = hexToB(output.innerText);
  
   body.setAttribute('style', 'background-color:rgba('+r+','+g+','+b+',.8)');
  
  output_rgba.innerText = 'rgba('+r+','+g+','+b+',.8)';
  } catch(e) {
    body.setAttribute('style', 'background-color:none');
    output.innerText = output_rgba.innerText = "";
  }
});

var output = document.querySelector('.output'),
    output_rgba = document.querySelector('.output.rgba'),
    body = document.body;