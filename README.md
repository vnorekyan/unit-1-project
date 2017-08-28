# unit-1-project

Overview:
For this project, I made a game heavily inspired by Bejeweled. Though it is not Bejeweled.

Technologies used:
Javascript, jQuery, CSS, HTML, and GitHub.

Process/approach:
After creating the wireframes for the site, I decided to first create the basic layout with HTML and some basic styling with CSS to help with visualizing the end result. Once the basic layout was done, I worked on generating a gameboard that's randomly populated with different jewels at the beggining of each game. Then I wrote the code for swapping two jewels and making sure only adjacent jewels can be swapped. The next step after that was writing the algorithm for recognizing a pattern of 3 or more identical jewels formed after swapping 2 adjacent jewels. Finally, I added the logic for progressing to different levels, a message and a play again button displayed at the end of a game, a progress bar, an about page, and a how to play page. On the last day, I made the website responsive. The styling was done incrementally throughout the project.

Future features:
Currently, the game only recognizes a pattern 3 or more consecutive jewels if it was created by swapping jewels, and the consecutive jewels recognized have to be the same as the swapped jewels. In the future, I'd like to add the ability to recognize this pattern when it is formed by randomly generated jewels at the beginning of the game.

Bugs:
Clicking on the same jewel twice counts as a move. UPDATE 8-27-17: fixed this.

Biggest wins and challenges:
The biggest challenge was writing the algorithm for recognizing that a pattern of 3 or more identical jewels was formed after swapping 2 jewels on the board. Cracking this problem after re-writing the game logic from scratch was my biggest win.

Game chosen:
Bejeweled

Rules of the game:
The user swaps two adjacent jewels on the gameboard to create a pattern of 3 or more identical jewels in a row.

Process for turning game into web application:
This was pretty straightforward because this game already exists as a web application.
