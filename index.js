const fs=require('fs');
const fse=require('fs-extra');
//convert to uppercase
function ConverteFile(inputf,outputf) {
    fs.readFile(inputf,'utf-8',(err,data)=>{
        if(err){
            console.error("file can't read",err);
            return;
        }

        const convertmydat=data.toUpperCase();

        fs.writeFile(outputf,convertmydat,'utf-8',(err)=>{
            if(err){
                console.error("error in writing the file",err);
                return;
            }
            console.log(`file converted successfully ${outputf}`);
        });
    });

}
const inputf="myfile.txt";
const outputf="myfile.txt";

//ConverteFile(inputf,outputf);

//copy the file to another file
async function copyFile(inputf,outputf){
    try{
        await fse.copy('myfile.txt','mycopy.txt');
        console.log("successfully copied");
    }
    catch(err){
        console.error(err);
    }

}
//copyFile();

//delete the file
function deleteFile(){
    fse.remove('mycopy.txt',(err)=>{
        if(err) return console.error(err);
        console.log("removed successfully");

    })
}
 //deleteFile();

 //empty the directory
 function emptyFolder(){
 fse.emptyDir('filename', err => {
    if (err) return console.error(err)
    console.log('success! empty')
  })
 }
  //emptyFolder();

  //
  function ensureF(){
  fse.ensureFile('files/file.txt', err => {
    console.log(err) // => null
    // file has now been created, including the directory it is to be placed in
  })
  }
  //ensureF();


