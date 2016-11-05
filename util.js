function random_range(min, max)
{
    var r =  Math.floor( min + Math.random() * (max + 1) );
//    console.log('min:' + min + ' max:' + max + ' r:' + r);
    return r;
}
