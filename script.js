// Interface 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  Start Location
var locationes = /** @class */ (function () {
    function locationes(name, city, ZIPCode, address, img, type, created) {
        this.name = name;
        this.city = city;
        this.ZIPcode = ZIPCode;
        this.address = address;
        this.img = img;
        this.type = type;
        this.created = created;
    }
    locationes.prototype.dispaly = function () {
        return "<div class=\"col-3 mt-5\">\n      <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(this.img, "\" class=\"card-img-top\">\n      <div class=\"card-body\">\n      <h1 class=\"card-title text-dark\">Name:").concat(this.name, "</h1>\n        <h3 class=\"card-text\">City  : ").concat(this.city, " <br> Addesse:  ").concat(this.address, " <br> ZIP Code: ").concat(this.ZIPcode, "</h3>\n        <h4>The Type : ").concat(this.type, "</h4>\n        <hr>\n        <p>Create :").concat(this.created, "</p>\n      </div>\n    </div>\n    </div>");
    };
    return locationes;
}());
//  End Location
//  start Restaurant
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, ZIPCode, address, img, type, created, cuisineType, webAddress, telNr) {
        var _this = _super.call(this, name, city, ZIPCode, address, img, type, created) || this;
        _this.cuisineType = cuisineType;
        _this.webAddress = webAddress;
        _this.telNr = telNr;
        return _this;
    }
    restaurant.prototype.dispaly = function () {
        return "<div class=\"col-3 mt-5\">\n          <div class=\"card\" style=\"width: 18rem;\">\n          <img src=\"".concat(this.img, "\" class=\"card-img-top\">\n          <div class=\"card-body\">\n            <h1 class=\"card-title text-dark\">Name:").concat(this.name, "</h1>\n            <h3 class=\"card-text\">City  : ").concat(this.city, " <br> Addesse: ").concat(this.address, " <br> ZIP Code: ").concat(this.ZIPcode, "</h3>\n            <h4>The Type : ").concat(this.type, " </h4>\n            <h5>Type of cuisine : s ").concat(this.cuisineType, "</h5>\n            <h5>web address").concat(this.webAddress, "</h5>\n            <h5>TEL: ").concat(this.telNr, "</h5>\n            <hr>\n            <p>Created:").concat(this.created, " </p>\n          </div>\n        </div>\n        </div>");
    };
    return restaurant;
}(locationes));
//  End Restaurant
// start Event
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, ZIPCode, address, img, type, created, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, city, ZIPCode, address, img, type, created) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    events.prototype.dispaly = function () {
        return "<div class=\"col-4 mt-5\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.img, "\" class=\"card-img-top\">\n\n        <div class=\"card-body\">\n\n        <h1 class=\"card-title text-dark\">Name:").concat(this.name, "</h1>\n        \n         <div><h3 class=\"card-text\">City  : ").concat(this.city, "  <br> Addesse: ").concat(this.address, " <br> ZIP Code: ").concat(this.ZIPcode, "</h3></div>\n          <div><h4>The Type : ").concat(this.type, " </h4></div>\n          <div><h5>Event Date:").concat(this.eventDate, "</h5></div>\n         <div><h5>Event Time: ").concat(this.eventTime, " Uhr</h5></div>\n         <div><h5>Ticket Price: ").concat(this.ticketPrice, " \u20AC</h5></div>\n          <hr>\n          <div><p>Create : ").concat(this.created, "</p> </div>\n        </div>\n      </div>\n      </div>");
    };
    return events;
}(locationes));
// End Event
var val = [
    new locationes("Lucky Wok", "Wien", "10-1220", " Wagramer Strasse 189b", "/images/1.jpg", "Chinese one", "10 Apr 2010 - 11:00"),
    new locationes("Jasmin ALshamm", "Graz", "908-8590", "streiermarker 801", "/images/2.jpg", "Syrer normal ", "19 Sep 2000 - 09:00"),
    new locationes("Kent", "Tirol", "81-2590", "Haupstraße 32", "/images/3.jpg", "Türkisch", "01 Jul 1980 - 10:45"),
    new restaurant("Ice Cream Alsham", "Damaskus", "100-225", " Baghdadstreet", "/images/5.jpg", "Syrerisch", "05 Jan 1910 - 07:45", "Med ", "www.Alsham.sy", "+9639948874"),
    new restaurant("KFC", "Paris", "15-2590", "parisstreet 87", "/images/4.jpg", "Französisch", "22 Jun 1817 - 08:45", "High", "www.KFC_Paris.fr", "+48288008871"),
    new restaurant("McDonald's", "Califonia", "15-24530", " americastreet 298", "/images/6.jpg", "American", "08 Oct 1930 - 07:00", "low ", "www.Macdonald.com", "+11052865230"),
    new events("DO & CO", "Wien", "05-1010", " Stephansplatz 12", "/images/7.jpg", "Viennese", "13 Frb 2019 - 09:30", "11.10.2019", "22:00", 11.99),
    new events("Your Indian Restaurant", "Wien", "1140", " Linzerstrass 243", "/images/8.jpg", "Indian", "03  Mai 2015 - 09:00", "11.10.2015", "00:00", 08.40),
    new events("The Gold Restaurant ", "Berlin", "98702", "sauergasse 15", "/images/9.jpg", "Dreutscher", "11  Apr 2001 - 12:30", "18.03.1998", "22:00", 12.80),
];
{
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var i = val_1[_i];
        document.getElementById("demo").innerHTML += i.dispaly();
    }
}
