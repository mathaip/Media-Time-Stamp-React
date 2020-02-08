# Media-Time-Stamp-React


1. Clone this repo

2. Npm install 

3. Make sure youre logged into metamask

4. Deploy mediacontract.sol

5. get the deployed address and put it in mediacontract.js

6. Npm Start 


Architectural Document

Project: Media Time stamp

- Goal 
A system that creates a blockchain record representing media data that can be used to show authenticity and authorship.

- Data
	Type of Data	Key name	Description
	- String 	Description	Extra information about Media	
	- String  	URL	Url address where the media can be found
	- Uint256 	hash	Result from Hash function with a unique number
	- Address	Owner content,	Owner Ethereum address
	- string 	type of media	type of media	
	- Uint	 Date and time	Date and time calculated from block.timestamp
	- bool 	Valid	Variable to check if the HASH exist or is valid	
	- Array	Media Hashes 	An array with all HASHES 
	
- Functions
- Call media Hashes from Owner address
- Call HASH mapping that will bring the struct with all information of the media
- Register a HASH – 1º create a hash from media
			2º check if exist other equal hash
			3º Store the hash and owner, as well all others information
- Transfer Ownership – Only owner (or delegated users) of contract can change the owner

 ![alt text](https://raw.githubusercontent.com/mathaip/Media-Time-Stamp-React/master/public/mediatime.png)







The Project Plan and Team


![alt text](https://raw.githubusercontent.com/mathaip/Media-Time-Stamp-React/master/public/project-plan-1.png)
(![alt text](https://raw.githubusercontent.com/mathaip/Media-Time-Stamp-React/master/public/project-plan-2.png)


