# GIVbacks Step by Step 
**X**=Round number

- [ ] 1. Enter the GIVbacks round dates into swagger and run `eligible-donations` script with `all-other chains` selected - download .csv (R**X** Eligible Donations (G)) 

- [ ] 2. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 3. Enter the GIVbacks round dates into swagger and run `eligible-donations` script with `optimism` selected - save .csv (R**X** Eligible Donations (O))

- [ ] 4. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 5. Enter the GIVbacks round dates into swagger and run not `not-eligible-donations` script with `all-other chains` selected - save .csv (R**X** Not Eligible Donations (G))

- [ ] 6. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 7. Enter the GIVbacks round dates into swagger and run `not-eligible-donations` script with `optimism` selected - save .csv (R**X** Not Eligible Donations (O))

- [ ] 8. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 9. Enter the GIVbacks round dates into swagger and run `purplelist-donations-to-verifiedProjects` script - save .csv (R**X** Purple List Donations To Verified Projects)

- [ ] 10. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 11. Create new google spreadsheet titled "GIVbacks Data Round **X** (G)"

- [ ] 12. Import both files with (G) in the title as well as the Purple List Donations

- [ ] 13. Run the `purple-list` script in swagger, copy the addresses, and paste them into a new sheet titled "**Purple List**" - remove "s and ,s

- [ ] 14. Import the "NAME List" as a new sheet or copy from last round ensure that it is titled "**NAME List**"

- [ ] 15. Take the following steps on the "R**X** Eligible Donations (G)" sheet

	a. Add 4 columns furthest left (A-D) and add these titles: A- "Check" B- "Project Link" C- "Tx Link" D- "Master Name"

	b. Fill Column A with check boxes

	c. Put this formula in cell D2 and drag it to the bottom: `=if(R3="",ifna(VLOOKUP(N3,'NAME List'!C:F,3,false),""),R3)`

	d. Put this formula in cell C2 and drag it to the bottom: `=if(P3="mainnet",CONCAT("https://etherscan.io/tx/",O3),if(P3="gnosis",CONCAT("https://gnosisscan.io/tx/",O3),if(P3="polygon",CONCAT("https://polygonscan.com/tx/",O3),if(P3="celo",CONCAT("https://celoscan.io/tx/",O3),if(P3="optimistic",CONCAT("https://optimistic.etherscan.io/tx/",O3),"WRONG NETWORK!?!))")))))`

	e. Put this formula in cell B2 and drag it to the bottom: `=IF(T3="",#REF!,T3)`

	f. Add a row to the top of the sheet

	c. Sum column H (totalDonationsUsdValue) in cell H1

- [ ] 16. Share the spreadsheet with the following email addresses: ahmadabugosh@gmail.com, briciaguzman@gmail.com, ECP.Ozz@gmail.com, griff@giveth.io, karmaticacid@gmail.com, mranjbar.z2993@gmail.com, saveoursonics@gmail.com

- [ ] 17. Create new google spreadsheet titled "GIVbacks Data Round **X** (O)"

- [ ] 18. Import both files with (O) in the title

- [ ] 19. Import the "NAME List" as a new sheet or copy from last round ensure that it is titled "**NAME List**"

- [ ] 20. Take the following steps on the "R**X** Eligible Donations (O)" sheet

	a. Add 4 columns furthest left (A-D) and add these titles: A- "Check" B- "Project Link" C- "Tx Link" D- "Master Name"

	b. Fill Column A with check boxes

	c. Put this formula in cell D2 and drag it to the bottom: `=if(R3="",ifna(VLOOKUP(N3,'NAME List'!C:F,3,false),""),R3)`

	d. Put this formula in cell C2 and drag it to the bottom: `=if(P3="mainnet",CONCAT("https://etherscan.io/tx/",O3),if(P3="gnosis",CONCAT("https://gnosisscan.io/tx/",O3),if(P3="polygon",CONCAT("https://polygonscan.com/tx/",O3),if(P3="celo",CONCAT("https://celoscan.io/tx/",O3),if(P3="optimistic",CONCAT("https://optimistic.etherscan.io/tx/",O3),"WRONG NETWORK!?!))")))))`

	e. Put this formula in cell B2 and drag it to the bottom: `=IF(T3="",#REF!,T3)`

	f. Add a row to the top of the sheet

	c. Sum column H (totalDonationsUsdValue) in cell H1

- [ ] 21. Share the spreadsheet with the following email addresses: ahmadabugosh@gmail.com, briciaguzman@gmail.com, ECP.Ozz@gmail.com, griff@giveth.io, karmaticacid@gmail.com, mranjbar.z2993@gmail.com, saveoursonics@gmail.com

- [ ] 22. Make a post in the Discord `#givbacks-distribution` channel that says:

"**ROUND X** GIVbacks spreadsheets are ready for review! :GIVbacks: 

@griffgreen  @brichis 
Gnosis Chain:
*[Link to "GIVbacks Data Round **X** (G)" spreadsheet]* 

Optimism Network:
*[Link to "GIVbacks Data Round **X** (O)" spreadsheet]* 

 @mohammad_ranjbar_z  @divine_comedian 

Here are the parameters that I used :point_down: 
Can I get a :thumbsup:?"

***It is important to tag these people because they review the donations for recirculation and review the swagger data for mistakes***

- [ ] 23. Post screenshots of swagger

**GNOSIS**
*[Screenshot of `eligible-donations` parameters with `all-other-chains` selected]* 

*[Screenshot of `not-eligible-donations` parameters with `all-other-chains` selected]* 

**OPTIMISM**
*[Screenshot of `eligible-donations` parameters with `optimism` selected]* 

*[Screenshot of `not-eligible-donations` parameters with `optimism` selected]* 

**BOTH**
*[Screenshot of `purplelist-donations-to-verifiedProjects` parameters]* 

- [ ] 24. Wait for Griff and Brichis to review for recirculation

- [ ] 25. Once, review is finished it's either 

    a. There are donations that need to be removed. In this case, I notify Mohammad that review is complete and ask him to blacklist the donations that the team has marked in red
    
    b. There are no donations that need to be blacklisted so I move to the next step
    
- [ ] 26. Retrieve the current block number from blockscout

- [ ] 27. Enter the block number into swagger and run the `givPrice` script

- [ ] 28. Enter the GIVbacks round dates and givprice into swagger and run the `calculate` script with `all-other-chains` selected - save .csv and .json files (R**X** GIVbacks Calculation (G))

- [ ] 29. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 30. Enter the GIVbacks round dates and givprice into swagger and run the `calculate` script with `optimism` selected - save .csv and .json files (R**X** GIVbacks Calculation (O))

- [ ] 31. Take a screenshot of the parameters used in the swagger interface for review.

- [ ] 32. Import each file into their respective google sheet

- [ ] 33. On both sheets, add a row to the top and SUM column H into cell H1

- [ ] 34. Ensure that the data matches the numbers on the R**X** Eligible Donations Sheet

- [ ] 35. Create a forum post in the 'Proposals' Category with 'givbacks' 'givbacks-distro' 'nice' 'nice-distro' 'rgiv-dao' tags that says:

":giv: Here is the finalized list for the [GIVbacks](https://docs.giveth.io/giveconomy/givbacks) **Round X** distribution. This round's distribution is affected by GIVpower ranking. I have included the average GIVfactor for each individual donor. 


:givpower: The [referral program](https://medium.com/giveth/giveth-referral-program-a701db72b5cb) rewards are included with the totals in the GIVbacks Distribution section.

:nice: You will find the information for this round’s [$nice token](https://medium.com/giveth/the-perks-of-being-nice-support-giveth-and-earn-rewards-df910a792319) distribution at the bottom.

---

This forum post will remain in the forum for 48 hours (2 business days) for review and feedback before going up for voting in the nrGIV DAO.

**Round X Dates:** *[Dates of the Round]* 9:59:59 am Costa Rica Time ([10am CST in local time (your timezone)](https://mytime.io/cst/10am))
**GIV value at the time of calculation:** *[Price of GIV] USD*
**Block Number:** *[Block number used]*
**GIV Available** 1000000

## :giv: GIVbacks Distribution on Gnosis Chain

| Giver Address | Total Donations (USD) | Avg GIVfactor | GIVbacks |
|---|---|---|---|
*[Copy and paste data from spreadsheet]*

## :giv: GIVbacks Distribution on Optimism Network

| Giver Address | Total Donations (USD) | Avg GIVfactor | GIVbacks |
|---|---|---|---|
*[Copy and paste data from spreadsheet]*

## :givpower: Referral Program Rewards
*[Copy and paste data from spreadsheet]*


## :nice: $nice Distribution
| Giver Address | $nice |
|---|---|
*[Copy and paste data from spreadsheet]*

- [ ] 36. Post a message in the `#givbacks-distribution` Discord channel that says:

"**ROUND X** GIVbacks and $nice
Forum post is up! - *[Link to forum post]*
Here is the .json :point_down:
@divine_comedian  @mohammad_ranjbar_z"

***It is important to tag these people because they review the data for mistakes***

**GNOSIS**

*[Upload .json file (R**X** Calculate GIVbacks (G))]*

*[Screenshot of `calculate` parameters with `all-other-chains` selected]* 

**OPTIMISM**

*[Upload .json file (R**X** Calculate GIVbacks (O))]*

*[Screenshot of `calculate` parameters with `optimism` selected]* 

**GIV PRICE**

*[Screenshot of `givPrice` parameters]* 

- [ ] 37. Wait for the forum post to be up for 48 business hours

- [ ] 38. Incorporate or investigate any findings during the advice process

- [ ] 39. Coordinate people to make any needed changes

- [ ] 40. If no changes need to be made, I can now put up the nrGIV votes

- [ ] 41. Go to EVMcrispr and connect wallet

- [ ] 42. Enter a Title "Round **X** GIVbacks"

- [ ] 43. Enter 
`load giveth`
`giveth:initiate-givbacks [ipfs hash from .json file]]`

- [ ] 44. Press execute and sign transaction

- [ ] 45. Take a screenshot of the EVM Crispr interface for review

- [ ] 46. Save the script (Round **X** GIVbacks) and generate a link

- [ ] 47. Go to 'Transactions App' in the nrGIV Aragon DAO

- [ ] 48. Choose Mint `NICE` using `GIVbacks Distribution`

- [ ] 48. Copy and paste data from "GIVbacks Data Round **X** (G)" spreadsheet

- [ ] 49. Press execute and sign transaction

- [ ] 50. Repeat process if necessary because we can only process about 30 addresses per vote. Sometimes I have to make multiple votes

- [ ] 51. Check to make sure that the votes look good

- [ ] 52. Verify the vote in EVM Crispr
`load giveth`
`giveth:verify-givbacks [ipfs hash] [vote #]`

- [ ] 53. Save verify script and generate link

- [ ] 55. Make post in the `#givbacks-distribution` channel that says:

"**ROUND X** votes are up!
@divine_comedian @mohammad_ranjbar_z 
GIVbacks - *[Link to GIVbacks distro vote on Aragon]*
$nice - *[Link to $nice distro vote on Aragon]*
EVMcrispr script for initiation: *[Link to EVM Crispr "Round **X** GIVbacks" script]*

You can also verify that the vote matches the ipfs hash in the .json by typing:
`load giveth `
`giveth:verify-givbacks [ipfs hash] [vote#]`
Or click this link: *[Link to EVM Crispr "Verify Round **X** GIVbacks" script]*

*[Screenshot of EVM Crispr interface]*"

***It is important to tag these people because they review the data for mistakes***

- [ ] 56. Create a reply to the forum post that says:

"**ROUND X** votes are up! :rocket: 

Another round of rewards for those who give to projects, to society and to the world is up for your signaling. If you hold nrGIV tokens, please flex your Governator skills and be a part of making Giveth's vision a reality! 

This vote will only be up for 24 hours.

GIVbacks - *[Link to GIVbacks distro vote on Aragon]*
$nice - *[Link to $nice distro vote on Aragon]*"

- [ ] 57. Post a message in the `👍┋governance` Discord channel that says:

":GM: @DAO members!

Another round of rewards for those who give to projects, to society and to the world is up for your signaling. Flex your Governator skills and be a part of making Giveth's vision a reality! :boost: 

**These votes will only be up for 24 hours.**

:GIVbacks:  **Round X** GIVbacks Distribution Vote
- *[Link to GIVbacks distro vote on Aragon]*

:NICE:  **Round X** $nice Distribution Vote
- *[Link to $nice distro vote on Aragon]*

Forum Post for Reference:
*[Link to forum post]* :unicorn~1: :logo:"

- [ ] 58. Create POAP

    a. go to https://drops.poap.xyz/ and login with info@giveth.io
    
    b. Press create new drop
    
    c. Add art from Rodri
    
    d. Enter Title "GIVbacks Round **X**"
    
    e. Enter Description: 

    "This POAP is to honor GIVers that participated in Round **X**.

    The Giveth mission is to reward & empower those who give — to projects, to society, and to the world. With GIVbacks, we’re rewarding donors to verified projects with GIV."

    f. Enter website: https://giveth.io
    
    g. Enter round dates
    
    h. Choose 'virtual event'
    
    i. Click 'Create POAP'
    
- [ ] 59. Once the POAP drop is created, choose the distribution method 'Delivery'

    a. Enter URL `givbacksroundX`
    
    b. Enter Title "GIVbacks Round **X**"
    
    c. Enter Description
    
    "The Giveth mission is to reward & empower those who give — to projects, to society, and to the world. This POAP is to honor GIVers that participated in Round **X**."
    
    d. Enter the list of addresses that donated more than $10 USD in that round
    
    e. Press 'Submit Request'
    
- [ ] 60. Herd voters and wait for the votes to pass

- [ ] 59. Once the votes have passed, enact them in Aragon

- [ ] 60. Go to EVM Crispr and type:
`load giveth`
`giveth:finalize-givbacks [ipfs hash]`

- [ ] 61. Press execute and sign transaction

- [ ] 62. Take a screenshot of EVM Crispr interface for review

- [ ] 63. Save script and generate a link

- [ ] 63. Post a message in the `#givbacks-distribution` channel on Discord that says:

"**ROUND X** GIVbacks and $nice have been distributed!
EVM Crispr link: *[link to EVM Crispr script]*
Claim GIVbacks! - https://giveth.io/givbacks
Claim POAP! - https://poap.delivery/*[POAP url slug]*
@aabugosh @oyealmond"

***It is important to tag these people because they send the email and write the tweet announcements***

- [ ] 64. Make a reply on the forum post that says:

"The votes have passed and **ROUND X** GIVbacks have been distributed! :rocket: 

:giv: **Claim GIVbacks!** - https://giveth.io/givbacks
:givpower: **Claim POAP!** - https://poap.delivery/*[POAP url slug]*
*donation must be more than 10$ to be eligible for the POAP

:nice: If you donated DAI, WXDAI, XDAI or USDC to the Giveth Community of Makers this round, we have sent your $nice tokens directly to your wallet. 

Thank you so much for being a part of the Future of Giving with us!

*[Image of POAP art]*"

- [ ] 65. Post a message in the `📢┋announcements` Discord channel that says:

":GIVbacks:  Hey all of you beautiful @Giver s out there in the world! :logo: 

If you donated to a verified project between [GIVbacks round dates], you now have GIVbacks to claim!

The votes have passed and **ROUND X** GIVbacks have been distributed! :rocket: 

**Claim GIVbacks! **- https://giveth.io/givbacks
**Claim POAP!** - https://poap.delivery/*[POAP url slug]*
*donation must be more than 10$ to be eligible for the POAP

:NICE: If you donated DAI, WXDAI, XDAI or USDC to the Giveth Community of Makers this round, we have sent your $nice tokens directly to your wallet. 

Thank you so much for being a part of the Future of Giving with us! :GIVbacks:
Refer to this forum post for the details: *[link to forum post]*


**THE END**
