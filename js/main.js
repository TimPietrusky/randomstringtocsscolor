 /**
  Convert a random string to css color

  randomstringtocsscolor.com

  This implementation is very simple :D 

  # 2013 by Tim Pietrusky
  # timpietrusky.com
**/

var output = document.querySelector('.output'),
    output_rgba = document.querySelector('.output.rgba'),
    input = document.querySelector('input'),
    body = document.body;

// Listen to keyup
input.addEventListener('keyup', function(e) {
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
     // result += Array((6 - result.length % 6) + 1).join("0");
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
    
    // Add element if color consists of just 1 char per color
    if (result[1].length == 1) {
      result[1] += result[1];
      result[3] += result[3];
      result[5] += result[5];
    }
 
    // Output
    output.innerText = "#"+result[1] + result[3] + result[5];
       
    // Convert to RGB
    r = parseInt(result[1], 16);
    g = parseInt(result[3], 16);
    b = parseInt(result[5], 16);
  
    body.setAttribute('style', 'background-color:rgba('+r+','+g+','+b+',.8)');
    output_rgba.innerText = 'rgba('+r+','+g+','+b+',.8)';
    
  } catch(e) {
    body.setAttribute('style', 'background-color:none');
    output.innerText = output_rgba.innerText = "";
  }
});