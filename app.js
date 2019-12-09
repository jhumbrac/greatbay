var inquirer = require('inquirer');
var Item = require('./item');
var User = require('./user');
// var mysql = require('mysql');
var newPostItemName;
var newPostItemBid;
var testItem = 'shirt2';
var testBid = 5;
var testItemID = 1;
var itemToBidOn;
var currentBid;
const itemArray = [];
const itemByUser = [];
function loadApp() {
    inquirer
    .prompt([
      {
          type: "input",
          message: "Enter your user name?",
          name: "username"
      },
      {
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: ['Post an Item', 'Bid on an Item']
      }])
    .then(function(response) {
      if (response.action === 'Post an Item') {
        viewUserAuctions();}
        else {
            viewAllAuctions();
        }
      }
    )};
function viewUserAuctions() {
    console.log(testItemID, testItem, testBid);
    postConfirm();
}
function postConfirm() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "postConfirm",
        message: "Do you want to post a new item?",
        choices: ['Yes', 'No']
    }])
    .then(function(response) {
      if (response.postConfirm === 'No') {
        return;}
        else {
            postItem();
        }
      }
    )};
function postItem() {
    inquirer
    .prompt([
      {
          type: "input",
          message: "Item Name?",
          name: "item"
      },
      {
        type: "input",
        message: "Set the starting bid price?",
        name: "startingBid"
    }])
    .then(function(response) {
        const newItem = new Item(response.item, response.startingBid);
        itemArray.push(newItem);
        itemByUser.push(newItem);
        console.log(itemArray);
        })
    }
function viewAllAuctions() {
    console.log(itemArray);
    selectItemToBid();
}
function selectItemToBid() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "bidItem",
        message: "Select which item you'd like to bid on?",
        choices: [testItemID, testItem, testBid]
    }])
    .then(function(response) {
        itemToBidOn = response.bidItem;
        placeBid();
      }
    )};
function placeBid() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "newBid",
        message: "Current bid for " + itemToBidOn + 'is: $5. How much would you like to bid:',
    }])
    .then(function(response) {
        currentBid = response.newBid;
        console.log('The current bid is now: ' + currentBid);
      }
    )
};
loadApp();