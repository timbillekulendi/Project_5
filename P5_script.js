//
// Global Variables
//         
var currentLoc = 0; //Determines the current location of the player. 
var score = 0; //For score of player.
var navigationErrorCount = 0; //Used to count the number of times the player goes in the wrong direction.
var sarcasmThreshold = 5; //Determine the threshold for the number of wrong moves a player makes to activate something.
   	      
var hasVisitedLoc0 = false; //Global variable to determine whether player has been in loc0.
var hasVisitedLoc1 = false; //Global variable to determine whether player has been in loc1.
var hasVisitedLoc2 = false; //Global variable to determine whether player has been in loc2.
var hasVisitedLoc3 = false; //Global variable to determine whether player has been in loc3.
var hasVisitedLoc4 = false; //Global variable to determine whether player has been in loc4.
var hasVisitedLoc5 = false; //Global variable to determine whether player has been in loc5.
var hasVisitedLoc6 = false; //Global variable to determine whether player has been in loc6.
var hasVisitedLoc7 = false; //Global variable to determine whether player has been in loc7.
var hasVisitedLoc8 = false; //Global variable to determine whether player has been in loc8.
var hasVisitedLoc9 = false; //Global variable to determine whether player has been in loc9.
// var hasVisitedLoc10 = false; 
// var hasVisitedLoc11 = false;            
//
// Initialization
//
function init() {
	look(theGlades);
}
         
			

function navigationError() { //Handle error message in the case that the user goes the wrong way.
	navigationErrorCount = navigationErrorCount + 1;
	if (navigationErrorCount < sarcasmThreshold) {
		displayMessage("You can't go there!! *Evil Laugh*"); //Default error message.
	}
		else {
			displayMessage("You're really in the mood to die mate!"); //If the user error movements are greater than the error threshold, this message is displayed.
        }            
}
	
         
function btnGo_click () { //Handles the logic to the text input box that allows users to input movement commands
	var playerInput = document.getElementById("txtCommand").value;
  	  if (playerInput === "n"|| playerInput==="N" || playerInput === "north") {
			btnNorth_click();
    	} 
          else if (playerInput === "s"|| playerInput === "S" || playerInput === "south") {
          	btnSouth_click();
	        } 
    	      else if (playerInput === "e"|| playerInput === "E" || playerInput === "east") {
        	  	btnEast_click();
          	} 
          		else if (playerInput === "w"|| playerInput === "W" || playerInput === "west") {
          		btnWest_click();
          		}
          			else if (playerInput === "h"|| playerInput === "H" || playerInput === "help") {
          			btnHelp_Click();
          			}
          				else if (playerInput === "take") {
          				take();
          				}
          					else if (playerInput === "search") {
          					search();
          					} 
          						else if (playerInput === "inventory") {
          						inventory();
          						}
}

//
//Location Prototype
//

function locat(newid) {
	this.id = newid;
	this.name = "Room";
	this.description = "It is a room.";
	this.item = "Nothing here.";
	this.toString = function () {
								return this.description 
					}
}

//
//Item prototype
//

function item() {
	this.name = "Item";
	this.description = "";
	this.toString = function () {
								return this.name +
									   this.description; 
					}
}



function search() { //Deals with checking if there is an item in the location.
	if (locArray[currLoc].item != undefined) {
		displayMessage("Found: " + locArray[currLoc].item);
	} else {
		displayMessage("There is nothing in the room");		
	}
}

var storage = ""; //Responsible for storing the items in different locations.

function take() { 
	if (locArray[currLoc].item != undefined) { //If there is an item in the location, the item is stored and the player is notified.
		storage = storage + "\n" + locArray[currLoc].item.name;
		displayMessage("You have taken the " + locArray[currLoc].item + ".");
		delete locArray[currLoc].item;
	} else {
			displayMessage("There is nothing to take."); //If otherwise the player is notified there is no item.
		}
}

function inventory() { //Looks in the storage, and if there is an item it is displayed in the textarea.
	if (storage === "") {
		displayMessage("There are no items in your inventory.");
	}
		else {
			displayMessage("Inventory:" + storage);
		}
}

//
//Score logic
//

var scoreChart = 500;

function btnScore_Click() {
displayMessage("Current Score: " + scoreChart)
	
}




//
// Utility Function(s)
//
		
function displayMessage(msg) { //Responsible for the general display of text in the textarea.
	var target = document.getElementById("taMain");
	target.value = msg + "\n\n" + target.value;
}

function btnHelp_Click() { 
	var helpMsg = "You are currently about to play or are playing The Maze Sprinter." + "\n\n" + "In this game you can use the directional buttons to navigate about the maze and find a way out. You can also type in the commands N, S, E, W, n, s, e, w, north, south, east, west into the command bar to navigate around the maze." + "\n\n" + "You can type in the keywords take, search and inventory to do their respective functions" + "\n\n" + "In the wasd command box, you can used the w, a, s, d keys to navigate your way around the maze. You can also use the space bar - search, r - take & x - inventory." + "\n\n" + "For every location you visit the first time, you are rewarded 5 points." + "\n\n" + "You can also pick up items in the different locations that would aid you in navigating the maze." + "\n\n" + "If you are still in need of for help, I'm just a hyperlink away! :)"
	displayMessage(helpMsg);
}

function txtCommand_keyPress(keyboardEvent) { //Enable player to initiate btnGo_click using the "Enter" key on the keyboard.
	if (keyboardEvent.which === 13) {
		btnGo_click(); 
	}
}

function wasdCommand_keyPress(keyboardEvent) { //Enable player to use w, a, s, d keys to navigate & r, x, space bar for other functions
	if (keyboardEvent.which === 119 || keyboardEvent.which === 87) {
		btnNorth_click();
	}
			else if (keyboardEvent.which === 115 || keyboardEvent.which === 83 ) {
				btnSouth_click();
			}
				else if (keyboardEvent.which === 115 || keyboardEvent.which === 100 ) {
					btnEast_click();
				}
					else if (keyboardEvent.which === 97 || keyboardEvent.which === 65  ) {
						btnWest_click();
					}
						else if (keyboardEvent.which === 32) {
							search();
						}
							else if (keyboardEvent.which === 114 || keyboardEvent.which === 82 ) {
								take();
							}
								else if (keyboardEvent.which === 120 || keyboardEvent.which === 88 ) {
									inventory();
								}
}		
									

