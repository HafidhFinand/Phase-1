+function selectionSort(array){
  +	for(var i = 0; i < array.length; i++){
  +		var min = i
  +		for(var j = i+1; j < array.length; j++){
  +			if(array[min] > array[j]){
  +				min = j
  +				
  +			}
  +		}
  +
  +    if(i !== min){
  +      var temp = array[i];
  +      array[i] = array[min];
  +      array[min] = temp;
  +    }
  +	}
  +
  +  return array;
  +}
  +
  +console.log(selectionSort([33,2,52,106,73]));