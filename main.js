var inrange = document.getElementById('inrange');

var output = document.querySelector('#price-16');



inrange.addEventListener('input', function() {
    output.textContent = "$" + this.value + ".00";

    let p = document.createElement('p');


p.textContent = "/ month";


p.style.color = 'gray';
p.style.fontSize = '13px';

output.style.display = "inline";
p.style.display = "inline";

output.appendChild(p);

});



