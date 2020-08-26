// parallel calling something..but this way doesnt seem to work..need to
// check its concept

function getFile(file) {
    setTimeout(()=> {console.log(file)},1000);
}

getFile("file1");
getFile("file2");
getFile("file3");