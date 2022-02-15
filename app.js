  function product (values,price,isIncrease){
    const productInput = document.getElementById(values +'-number') ;
   let previousNumbers = parseInt(productInput.value) 
    if(isIncrease == true){
        previousNumbers = previousNumbers + 1
    }
    else if( previousNumbers > 0){
        previousNumbers = previousNumbers - 1 ;
    }
    productInput.value = previousNumbers
    const productPrice = document.getElementById(values+'-price');
     productPrice.innerText =   price * previousNumbers  ; 
     calculate()
  }
  // phone
  document.getElementById('phone-plus').addEventListener('click', function(){
       product('phone' ,1219, true)
  })
  document.getElementById('phone-minus').addEventListener('click',function(){
      product('phone',1210,false)
  })
  // case 
  document.getElementById('case-plus').addEventListener('click', function(){
      product('case',59,true)
  })
  document.getElementById('case-minus').addEventListener('click', function(){
      product('case',59, false)
  })
  // sub total
  function sub (product){
     const productInput = document.getElementById(product + '-number').value ;
     const productValue = parseInt(productInput);
     return productValue
  }
  function calculate(){
      const phoneTotal = sub('phone')*1219;
      const caseTotal = sub('case')*59 ;
      const total = phoneTotal + caseTotal ;
      const tax = total / 10 ;
      const totals = total + tax 
      document.getElementById('sub-total').innerText = total ;
      document.getElementById('tax').innerText = tax ;
      document.getElementById('total-price').innerText = totals
  }