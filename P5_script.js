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
	
function checkScore() { // This function is responsible for calculating the score of the player.
	if (! hasVisitedLoc0) {            
		if (currentLoc === 0) {
			score = score + 5; //Adds a score of 5 points if the room is being visited for the first time.
			hasVisitedLoc0 = true; //Changes the boolean of the location to "True" telling the script that the location has been visited already after adding 5 points.
		}
	} 
			else if ( (! hasVisitedLoc1) && (currentLoc === 1) ) {            
				score = score + 5;
				hasVisitedLoc1 = true;
			} 
				else if ( (! hasVisitedLoc2) && (currentLoc === 2) ) {            
					score = score + 5;
					hasVisitedLoc2 = true;
				}
					else if ( (! hasVisitedLoc3) && (currentLoc === 3) ) {            
						score = score + 5;
						hasVisitedLoc3 = true;
					}
						else if ( (! hasVisitedLoc4) && (currentLoc === 4) ) {            
							score = score + 5;
							hasVisitedLoc4 = true;
						} 
							else if ( (! hasVisitedLoc5) && (currentLoc === 5) ) {            
								score = score + 5;
								hasVisitedLoc5 = true;
							}
								else if ( (! hasVisitedLoc6) && (currentLoc === 6) ) {            
									score = score + 5;
									hasVisitedLoc6 = true;
								} 
									else if ( (! hasVisitedLoc7) && (currentLoc === 7) ) {            
										score = score + 5;
										hasVisitedLoc6 = true;
									} 
										else if ( (! hasVisitedLoc8) && (currentLoc === 8) ) {            
											score = score + 5;
											hasVisitedLoc6 = true;
										} 
											else if ( (! hasVisitedLoc9) && (currentLoc === 9) ) {            
												score = score + 5;
												hasVisitedLoc6 = true;
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


function locat(newid) {
	this.id = newid;
	this.name = "Room";
	this.description = "It is a room.";
	this.item = "Nothing here.";
	this.toString = function () {
								return this.description; 
					}
}

function item() {
	this.name = "Item";
	this.description = "";
	this.toString = function () {
								return this.name +
									   this.description; 
					}
}




var locArray = [];
	
function init() { //Calls starting point of game.

	var spear = new item();
	spear.name = "Spear";

	var food = new item();
	food.name =  "Food";

	var greiverTransmitter = new item();
	greiverTransmitter.name = "Greiver Transmitter";


	var theglades = new locat(0);
	theglades.description = "(The Glades) You're in the glade, a small square shaped living space in the middle of the maze. Is there any hope of ever escaping?";
	locArray.push(theglades);
	
	var sector1 = new locat(1);
	sector1.description = "(Sector 1) You've been going through the maze for hours and end up in Thornhill, an enormous unkept plantation full of venomous plants.";
	locArray.push(sector1);
	
	var sector2 = new locat(2);
	sector2.description = "(Sector 2) The night sky begins to dawn, you begin to hear the long doleful cry of the Grievers fill the air. You don't want to end up one on one with a Griever. You still have time to save yourself!";
	locArray.push(sector2);
	
	var sector3 = new locat(3);
	sector3.description = "(Sector 3) You are moving quickly towards what appears to be a opening to a whole new sector which could lead to the exit point of the maze. There is a sudden force restraining you from moving any further, You realise you are stuck in quick sand and need to work something out fast before you are completely submerged. Luckily you grab hold of some vines and pull yourself to safety. Luck seems to be on your side.";
	locArray.push(sector3);
		
	var sector4 = new locat(4);
	sector4.description = "(Sector 4) Certain you had found a way out, you go down an unusual path till you meet a dead-end. I advice you hed back before something *evil* has you trapped in!";
	locArray.push(sector4);
	
	var sector5 = new locat(5);
	sector5.description = "(Sector 5) You make your your to a room within the walls of the maze. it just might seem you could escape. But guess what? You would never know until the next project! *Evil Laugh*";
	locArray.push(sector5);
	
	var sector6 = new locat(6);
	sector6.description = "(Sector 6) You seem to have found something; the base area for the grievers. The hopes of finding a way out are much brighter now.";
	sector6.item = food;
	locArray.push(sector6);
	
	var sector7 = new locat(7);
	sector7.description = "(Sector 7) Desperate to get out of this maze of misery, you run deeper into the maze in search for an exit. May this have been a wrong call?";
	sector7.item = spear;
	locArray.push(sector7);
	
	var sector8 = new locat(8);
	sector8.description = "(Sector 8) You encounter the body of a dead griever and have taken its transmission unit. This could be the key out.";
	locArray.push(sector8);
	
	var sector9 = new locat(9);
	sector9.description = "(Sector 9) I really don't think you're getting out of the this maze. The folks in the movie were way to lucky! *BOOM, in your face*";
	sector9.item = greiverTransmitter;
	locArray.push(sector9);
	
	displayMessage(locArray[0].description);
	 
	currLoc = locArray[0].id;
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
									

