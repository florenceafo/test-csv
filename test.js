$.ajax({
    type: 'GET',
    url: 'test.csv',
    dataType: 'text',
}).done(successFunction);

function successFunction(data) {
    var allRows = data.split(/,/)
    console.log(allRows);
}
