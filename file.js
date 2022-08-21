/* creating, opening and reading a file 

creating a new empty file */

 var fs  =  require('fs');
 fs.open('newfile01.txt', 'w', 
 function (err) {
    if(err) throw err;
    console.log('saved');
 });

 // writting in it

 fs.writeFile( 'newfile01.txt', 'The App that won the Best Campus Cup in 2021 was UniWise,\nDeveloper: Tebogo Serogole\nCategory: Best Campus Cup Solution\nInstitution : Tshwane University of Technology.', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('file saved')
 });

 // opening the file by reading it 

fs.readFile('newfile01.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});