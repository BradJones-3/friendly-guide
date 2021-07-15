# Jedi Memory Game - Testing
[Main README.md File](README.md)

1. [Testing User Stories](#Testing-User-Stories)
2. [Manual Testing](#Manual-Testing)
3. [Automated Testing](#Automated-Testing)
   * [Code Validation](#Code-Validation)
   * [Browser Validation](#Broswer-Validation)
   * [Lighthouse Audit](#Lighthouse-Audit)
4. [User Testing](#User-Testing)

## Testing User Stories

### **Players Goals**:
  * I want to be able to, access straightforward instructions on how to play the game.
    * The rules are easily accessible from the homepage modal and are brief and straightforward to understand in a matter of seconds.
  * I want to be able to, return to the homepage with a single click.
    * This is easily achieved by clicking on the logo placed in the top center of every page and will direct the player to the homepage of the website instantly.
  * I want to be able to, challenge myself with various stages of the game.
    * The game comes in 3 levels all described in the rules section of the homepage modal telling the players what each level will consist of, all levels have different time restrictions too.
  * I want to be able to, play the game with or without audio.
   * Developer ran out of time when coming to implement this feature on the website, which is disappointing as they would have included more iconic quotes and sound effects from the Star Wars franchise.

## Manual Testing

### Common Elements Testing.
The developer manually tested the following effects to ensure they are displayed and functioning properly.

* Hovering over Social Media links will trigger the **'hover'** effect and once clicked will open a new tab.

  * YouTube:
  ![YouTube](assets/testing-files/manual-testing/youtube-hover.gif)
  * Reddit:
  ![Reddit](assets/testing-files/manual-testing/reddit-hover.gif)
  * LinkedIn:
  ![LinkedIn](assets/testing-files/manual-testing/linkedin-hover.gif)
  * GitHub:
  ![GitHub](assets/testing-files/manual-testing/github-hover.gif)

## Homepage

### Manual testing was performed on the following elements of the [Homepage](index.html)
When clicking on the logo located in the top center of the page.
![Game Logo](assets/testing-files/manual-testing/homepage/home-logo.gif)

When clicking on the button in the middle of the page a modal will open with options for the users.
![Homepages Modal](assets/testing-files/manual-testing/homepage/home-modal.gif)

When the user clicks anywhere outside the modal, the modal will close and return the homepage.
![Click Outside Modal](assets/testing-files/manual-testing/homepage/modal-close.gif)

When clicking on the "How To Play" button the text will display with a scroll effect with rules on how to play the game.
![How To Play Button](assets/testing-files/manual-testing/homepage/how-to-button.gif) 

When the user is inside the home modal when clicking "New Game" the current modal will close and open another with the different levels available to play.
![New Game Button](assets/testing-files/manual-testing/homepage/new-game.gif)

When the user selects the "Padawan" button they will be taken to the Padawan level of the game.
![Padawan Button](assets/testing-files/manual-testing/homepage/padawan-button.gif)

When the user selects the "Jedi Knight" button they will be taken to the Jedi Knight level of the game.
![Jedi Knight Button](assets/testing-files/manual-testing/homepage/knight-button.gif)

When the user selects the "Jedi Master" button they will be taken to the Jedi Master level of the game.
![Jedi Master Button](assets/testing-files/manual-testing/homepage/master-button.gif)

* The responsiveness of the Homepage:
![Homepage Responsiveness](assets/testing-files/manual-testing/homepage-responsive.gif)

## Padawan Level Page

### Manual testing was performed on the following elements of the [Padawan Level Page](game-padawan.html)

When first arriving at the Padawan Level page there will be a message that once clicked anywhere on the screen will disappear.
![Welcome Message](assets/testing-files/manual-testing/padawan/padawan-message.gif)

When clicking on the logo located in the top center of the page.
![Game Logo](assets/testing-files/manual-testing/padawan/padawan-logo.gif)

The timer will only start to count down when the first move has been made and the move counter has begun keeping count.
![Countdown Timer](assets/testing-files/manual-testing/padawan/padawan-timer.gif)

When the player has made a pair the cards will stay turned over.
![A Successful Matching Pair](assets/testing-files/manual-testing/padawan/macthing-pair.gif)

When the player doesn't find two matching cards the cards will then flip back over.
![Not A Matching Pair](assets/testing-files/manual-testing/padawan/no-match.gif)

When the player has found all the matching pairs of cards they will be greeted with a winning modal and will display the time left and the amount of moves it took to win the game.
![Winning Modal](assets/testing-files/manual-testing/padawan/winning-modal.gif)

When in the winning modal the player can choose to "Play Again" and when the button is clicked they will be taken to the welcome message.
![Play Again In Winning Modal](assets/testing-files/manual-testing/padawan/win-play-again.gif)

When clicking on the "Become a Jedi Knight" button the user will be taken to the "Jedi Knight" level welcome message.
![Jedi Knight Button](assets/testing-files/manual-testing/padawan/win-jedi-knight.gif)

When clicking on the home button inside the winning modal the user will be taken back to the homepage of the website.
![Winning Modal Homepage Button](assets/testing-files/manual-testing/padawan/winning-home.gif)

When the timer hits 0 the game is over and the player will be met with the game over modal.
![Game Over Modal](assets/testing-files/manual-testing/padawan/padawan-game-over.gif)

When the player is met with the game over modal they can choose to play again and will be greeted with the welcome message once more.
![Play Again button in Game Over Modal](assets/testing-files/manual-testing/padawan/padawan-play-again.gif)

If the player wants to return to the homepage after the game over modal they can click the Homepage button in the modal.
![Homepage Button in Game Over modal](assets/testing-files/manual-testing/padawan/padawan-home.gif)

* Responsiveness of the Padawan Level:
![Padawan HTML Responsiveness](assets/testing-files/manual-testing/padawan-responsive.gif)

## Jedi Knight Level Page

### Manual testing was conducted by the developer on the following elements of the [Jedi Knight Level Page](game-knight.html)

When the player arrives at the Jedi Knight page they will be greeted with a welcome message that when clicked anywhere on the page will close.
![Welcome Message Jedi Knight](assets/testing-files/manual-testing/knight/knight-welcome.gif)

When clicking on the logo at the top center of the page the user will be taken back to the homepage.
![Jedi Knight Logo](assets/testing-files/manual-testing/knight/knight-logo.gif)

The countdown will only start once the move counter has reached begun counting.
![Countdown Timer and Moves Counter](assets/testing-files/manual-testing/knight/knight-no-pair.gif)

When successfully pairing two cards they will stay flipped face side up.
![Succesful Pair](assets/testing-files/manual-testing/knight/knight-pair.gif)

When the user doesn't make a match the cards will flip back over.
![Not a Matching Pair](assets/testing-files/manual-testing/knight/knight-no-pair.gif)

When the timer hits 0 the game will be over and the player will be met with the game over modal.
![Jedi Knight Game Over Modal](assets/testing-files/manual-testing/knight/knight-game-over-modal.gif)

When in the game over modal the player can choose to play again and they will be greeted with the welcome message to signal a new game will start.
![Jedi Knight Play Again](assets/testing-files/manual-testing/knight/knight-play-again.gif)

The player will also have the option to go back to the homepage which when they click the home button they will be sent back to the homepage.
![Jedi Knight Homepage Button](assets/testing-files/manual-testing/knight/knight-home-button.gif)

If the player manages to find all the matching pairs before the timer runs out they will be greeted with the winning modal on their last matching pair. It will also show how many moves it took them to beat the game and also the time remaining for them to beat it.
![Jedi Knight Winning Modal](assets/testing-files/manual-testing/knight/knight-winning.gif)

Whilst in the winning modal the player has the option to play the level again by clicking the 'Play Again' button this will take them back to the welcome message of the Jedi Knight level.
![Jedi Knight Play Again](assets/testing-files/manual-testing/knight/knight-win-play-again.gif)

The player will also have the option to test their memory on the Jedi Master level by clicking 'Become A Jedi Master' which will take the player to the Jedi Master welcome message.
![Jedi Master Button](assets/testing-files/manual-testing/knight/knight=play-master.gif)

The player can also click the Homepage button to return back to the homepage.
![Jedi Knight Homepage Button](assets/testing-files/manual-testing/knight/knight-win-home.gif)

### Responsiveness of the [Jedi Knight Page](game-knight.html)

* Responsiveness of the Jedi Knight Level:
![Jedi Knight HTML Responsiveness](assets/testing-files/manual-testing/knight-responsive.gif)

## Jedi Master Level Page

### Manual testing was conducted by the developer on the following elements of the [Jedi Master Level Page](game-master.html)

When arriving at the Jedi Master page the user will be greeted with a welcome message that when they click on the page will disappear.
![Jedi Master Welcome Message](assets/testing-files/manual-testing/master/master-welcome.gif)

When the user clicks on the logo located top center of the page they will be taken back to the homepage of the game.
![Jedi Master Logo](assets/testing-files/manual-testing/master/master-logo.gif)

The timer will start when the moves counter is activated by the players first move.
![Jedi Master Timer and Move Counter](assets/testing-files/manual-testing/master/mater-timer.gif)

When successfully pairing two cards they will stay flipped.
![Jedi Master Matching Pair](assets/testing-files/manual-testing/master/master-pair.gif)

If the cards do not match they will flip back over face down.
![Jedi Master Not A Pair](assets/testing-files/manual-testing/master/master-no-match.gif)

If the player fails to find all the matching pairs before the timer runs out they will be stopped and met with the game over modal.
![Jedi Master Game Over Modal](assets/testing-files/manual-testing/master/master-game-over.gif)

In the game over modal the player has the option to click the 'Play Again' button which will take the player to the welcome message once again.
![Jedi Master Game Over Play Again Button](assets/testing-files/manual-testing/master/master-over-play-again.gif)

In the game over modal the player will also have the option to return to the homepage by clicking 'Home' which will direct them back to the homepage.
![Jedi Master Game Over Home Button](assets/testing-files/manual-testing/master/master-over-home.gif)

When the player finds all the matching pairs on the last pair the game will be stopped and the winning modal will be shown which will display the moves taken and the time remaining on the clock.
![Jedi Master Winning Modal](assets/testing-files/manual-testing/master/master-win-modal.gif)

When inside the winning modal the player can choose to 'Play Again' which will return them to the welcome message as seen before playing.
![Jedi Master Play Again Button Inside Winning Modal](assets/testing-files/manual-testing/master/master-win-again.gif)

The other option the player has is to return to the homepage by clicking 'Return To Coruscant'.
![Jedi Master Winning Modal Home Button](assets/testing-files/manual-testing/master/master-win-home.gif)

### Responsiveness of the [Jedi Master Page](game-master.html)

* Responsiveness of the Jedi Master Level:
![Jedi Master HTML Responsiveness](assets/testing-files/manual-testing/master-responsiveness.gif)

## Automated Testing

### Code Validation

The developer used the website [W3C Markup Validation Service](https://validator.w3.org/nu/) to review each page.


Here are the results from the tests:

* Homepage: ![Homepage HTML Review](assets/testing-files/automated-testing/Index-Validator-Auto.png)

* Padawan Level Page: ![Padawan Level HTML Review](assets/testing-files/automated-testing/Padawan-Validator-Auto.png)

* Knight Level Page: ![Knight Level HTML Review](assets/testing-files/automated-testing/Knight-Validator-Auto.png)

* Master Level Page: ![Master Level HTML Review](assets/testing-files/automated-testing/Master-Validator-Auto.png)

* The developer used the website ![W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate their CSS.

* Here are the results from the test:![Style Sheet CSS Validation Results](assets/testing-files/automated-testing/CSS-Test-MS2.png)

* The developer used the website ![JavaScript Validation Service](https://jshint.com/) to validate their JavaScript.
* Here are the results from the tests: ![JavaScript Game Script](assets/testing-files/automated-testing/Game-Script-Test.png).
* Here are the results from the tests: ![Script.js file](assets/testing-files/automated-testing/Script.js-Test.png).

### Browser Validation

* Chrome - [Chrome Image](assets/testing-files/automated-testing/Chrome-ms2-compatibility.png)
* Safari - [Safari Image](assets/testing-files/automated-testing/Safari-ms2-compatibility.png)
* Firefox - [Firefox Image](assets/testing-files/automated-testing/Firefox-ms2-compatibility.png)
* Edge - [Edge Image](assets/testing-files/automated-testing/Edge-ms2-compatibility.png)

### Lighthouse Audit

Click [Here](assets/testing-files/automated-testing/HomePage-Lighthouse.pdf) for the Lighthouse Audit for the Home Page.

Click [Here](assets/testing-files/automated-testing/Padawan-Lighthouse.pdf) for the Lighthouse Audit for the Padawan Page.

Click [Here](assets/testing-files/automated-testing/Knight-Lighthouse.pdf) for the Lighthouse Audit for the Jedi Knight Page.

Click [Here](assets/testing-files/automated-testing/Master-Lighthouse.pdf) for the Lighthouse Audit for the Jedi Master Page.

### User Testing

* During user testing when the testers would click play again inside the Jedi Master Winning Modal it would take the user to the Padawan Level. This was a quick fix which was resolved in a matter of minutes of the information relayed back to the developer.
* Developer changed thier mind on moving all social links to another location as to keep the consistency throughout the whole website. 