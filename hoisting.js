
(function (run) {
    if (!run) return;
    function hoist() {
        console.log(a);
        console.log(fn());
        
        var a = 5;
        function fn() {
            return 2;
        }
    }
    hoist(); // undefined & 2
})(false);

(function (run) {
    if (!run) return;
    fullname = 'John Doe';
    var obj = {
        fullname: 'Colin Ihrig',
        prop: {
            fullname: 'Aurelio De Rosa',
            getFullname: function() {
                return this.fullname;
            }
        }
    };

    console.log(obj.prop.getFullname()); //Aurelio De Rosa

    var test = obj.prop.getFullname; //

    console.log(test()); //John Doe in web, undefined here
})(false);

