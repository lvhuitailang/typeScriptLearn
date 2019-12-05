var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('baldu.com');
    };
    return Site;
}());
var s = new Site();
s.name();
