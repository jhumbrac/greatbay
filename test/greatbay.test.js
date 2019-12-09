const User = require('../User');

test("Can instantitate User", ()=> {
    const u = new User();
    expect(typeof(u)).toBe('object');
});

test("User name to match database", ()=>{
    const username = "mario";
    const u = new User(username);
    expect(u.username).toBe(username);
});

test("User sees forSale list", ()=>{
    const username = "mario";
    const bidding = null;
    const forSale = "shirts";
    const u = new User(username, forSale, bidding);
    expect(u.forSale).toBe(forSale);
});

test("User adds new Auction", ()=>{
    const forSale = [{ name: 'game', startingBid: 20 }, {name:'tickets', startingBid: 10}];
    forSale.push({name: 'tshirt', startingBid: 10});
    expect(forSale[2].name).toEqual("tshirt") // expect.arrayContaining();
});

test("User bidding on new item", ()=> {
    const oldBid = 5;
    const bid = 5;
    const newBid = oldBid + bid;
    expect(newBid).toEqual(10)
})

test("New bid updates object", ()=>{
    const forSale = [{ name: 'game', bid: 20 }, {name:'tickets', bid: 10}];
    const newBid = 10;
    let { bid } = forSale[1];
    //bid = newBid;
    expect(newBid).toBe(bid);
})
