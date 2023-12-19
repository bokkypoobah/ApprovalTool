# ApprovalTool
Lightweigh web3 dapp tool to manage your approvals for ERC-20, ERC-721 and ERC-1155 contracts.

<br />

---

### How This Works

* This tool scans for ERC-20, ERC-721 and ERC-1155 *Approval* and *ApprovalForAll* log events with the first parameter being the owner account being searched for. This is done using the `getFilter(...)` web3 call.
* These event logs are process to determine the approval states for the various ERC-20, ERC-721 and ERC-1155 contracts
* Aside from the web3 call to retrieve log events, this tool retrieves block timestamps from [https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks](https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks)

<br />

---

### Running This Dapp

* Run directly from [https://bokkypoobah.github.io/ApprovalTool/](https://bokkypoobah.github.io/ApprovalTool/)
* Fork [https://github.com/bokkypoobah/ApprovalTool](https://github.com/bokkypoobah/ApprovalTool) and set up your own GitHub Pages
* Clone [https://github.com/bokkypoobah/ApprovalTool](https://github.com/bokkypoobah/ApprovalTool) on your local computer and run using, e.g., [anywhere](https://www.npmjs.com/package/anywhere) in the ./docs folder

<br />

---

### Sample Screens

#### Sample Approvals Screen

<kbd><img src="images/SampleScreen_Approvals_20231119.png" /></kbd>

#### Sample Events Screen

<kbd><img src="images/SampleScreen_Events_20231119.png" /></kbd>

#### Sample ERC-20 Approval Screen

<kbd><img src="images/SampleScreen_UpdateERC20_20231119.png" /></kbd>

#### Sample ERC-721 Approval Screen

<kbd><img src="images/SampleScreen_UpdateERC721Approval_20231119.png" /></kbd>

#### Sample ERC-721 ApprovalForAll Screen

<kbd><img src="images/SampleScreen_UpdateERC721ApprovalForAll_20231119.png" /></kbd>

#### Sample ERC-1155 ApprovalForAll Screen

<kbd><img src="images/SampleScreen_UpdateERC1155ApprovalForAll_20231119.png" /></kbd>

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd 2023. The MIT Licence.
