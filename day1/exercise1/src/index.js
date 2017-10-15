import Cars from './Cars.js'

const root = document.getElementById('root');
root.innerHTML = "<h1>yolo</h1>";

const cars = new Cars();


var carslist = cars.getAllCars.map(function(x){
    return "<tr><td>"+x.id+"</td><td>"+x.make+"</td><td>"+x.model+"</td><td>"+x.year+"</td></tr>";
});
carslist = carslist.join('');



//root.innerHTML = '<table style="width:100%"><tr><th>id</th><th>make</th><th>model</th><th>year</th></tr>'+carslist+'</table>';

//var idCar = cars.getCarById(1);
//root.innerHTML = `<h1>ID:${idCar.id}, Make:${idCar.make}, model:${idCar.model}, year:${idCar.year}</h1>`;

root.innerHTML = "<h1>"+cars.deleteCar(99)+"</h1>";

