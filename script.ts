// Interface 

interface Prop {
   name: string;
    city: string;
    ZIPcode: string;
    address: string;
    img: string;
    type: string;
    created: string;
    cuisineType: string;
    webAddress: string;
    telNr: string;
    eventDate: string;
    eventTime: string;
    ticketPrice: number;
    display:Function;
}

//  Start Location
class locationes {
  public   name: string;
  public city: string;
  public ZIPcode: string;
  public  address: string;
  public  img: string;
  public type: string;
  public   created: string;

    constructor( name: string, city: string, ZIPCode: string, address: string, img: string, type: string, created: string) {
      this.name = name;
        this.city = city;
        this.ZIPcode = ZIPCode;
        this.address = address;
        this.img = img;
        this.type = type;
        this.created = created;
  
    }

     dispaly(){
       return`<div class="col-3 mt-5">
      <div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top">
      <div class="card-body">
      <h1 class="card-title text-dark">Name:${this.name}</h1>
        <h3 class="card-text">City  : ${this.city} <br> Addesse:  ${this.address} <br> ZIP Code: ${this.ZIPcode}</h3>
        <h4>The Type : ${this.type}</h4>
        <hr>
        <p>Create :${this.created}</p>
      </div>
    </div>
    </div>`
  }
 




}

//  End Location



//  start Restaurant

class restaurant extends locationes {
    cuisineType: string;
    webAddress: string;
    telNr: string;

    constructor(name: string, city: string, ZIPCode: string, address: string, img: string,type: string, created: string, cuisineType: string, webAddress: string, telNr: string) {
        super( name, city, ZIPCode, address, img,type, created);
        this.cuisineType = cuisineType;
        this.webAddress = webAddress;
        this.telNr = telNr;
 
    }
     dispaly(){
       return`<div class="col-3 mt-5">
          <div class="card" style="width: 18rem;">
          <img src="${this.img}" class="card-img-top">
          <div class="card-body">
            <h1 class="card-title text-dark">Name:${this.name}</h1>
            <h3 class="card-text">City  : ${this.city} <br> Addesse: ${this.address} <br> ZIP Code: ${this.ZIPcode}</h3>
            <h4>The Type : ${this.type} </h4>
            <h5>Type of cuisine : s ${this.cuisineType}</h5>
            <h5>web address${this.webAddress}</h5>
            <h5>TEL: ${this.telNr}</h5>
            <hr>
            <p>Created:${this.created} </p>
          </div>
        </div>
        </div>`
      }
}

//  End Restaurant


// start Event


class events extends locationes{
    eventDate: string;
    eventTime: string;
    ticketPrice: number;

    constructor(name: string, city: string, ZIPCode: string, address: string, img: string,type: string, created: string, eventDate: string, eventTime: string, ticketPrice: number) {
        super(name, city, ZIPCode, address, img  ,type ,created);

        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
     dispaly(){
        return`<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top">

        <div class="card-body">

        <h1 class="card-title text-dark">Name:${this.name}</h1>
        
         <div><h3 class="card-text">City  : ${this.city}  <br> Addesse: ${this.address} <br> ZIP Code: ${this.ZIPcode}</h3></div>
          <div><h4>The Type : ${this.type} </h4></div>
          <div><h5>Event Date:${this.eventDate}</h5></div>
         <div><h5>Event Time: ${this.eventTime} Uhr</h5></div>
         <div><h5>Ticket Price: ${this.ticketPrice} €</h5></div>
          <hr>
          <div><p>Create : ${this.created}</p> </div>
        </div>
      </div>
      </div>`
      }
}

// End Event



 var  val: Array<any> = [
new locationes ("Lucky Wok","Wien","10-1220"," Wagramer Strasse 189b","/images/1.jpg","Chinese one","10 Apr 2010 - 11:00"),
new locationes ("Jasmin ALshamm","Graz","908-8590","streiermarker 801","/images/2.jpg","Syrer normal ","19 Sep 2000 - 09:00"),
new locationes ("Kent","Tirol","81-2590","Haupstraße 32","/images/3.jpg","Türkisch","01 Jul 1980 - 10:45"),
new restaurant ("Ice Cream Alsham","Damaskus","100-225"," Baghdadstreet","/images/5.jpg","Syrerisch","05 Jan 1910 - 07:45","Med ","www.Alsham.sy","+9639948874"),
new restaurant ("KFC","Paris","15-2590","parisstreet 87","/images/4.jpg","Französisch","22 Jun 1817 - 08:45","High","www.KFC_Paris.fr","+48288008871"),
new restaurant ("McDonald's","Califonia","15-24530"," americastreet 298","/images/6.jpg","American","08 Oct 1930 - 07:00","low ","www.Macdonald.com","+11052865230"),
new events ("DO & CO","Wien","05-1010"," Stephansplatz 12","/images/7.jpg","Viennese","13 Frb 2019 - 09:30","11.10.2019","22:00", 11.99),
new events ("Your Indian Restaurant","Wien","1140"," Linzerstrass 243","/images/8.jpg","Indian","03  Mai 2015 - 09:00","11.10.2015","00:00",08.40),
new events ("The Gold Restaurant ","Berlin","98702","sauergasse 15","/images/9.jpg","Dreutscher","11  Apr 2001 - 12:30","18.03.1998","22:00",12.80),
];
{
    for (let i of val) {
        (<HTMLElement>document.getElementById("demo")).innerHTML += i.dispaly();
      }
}
