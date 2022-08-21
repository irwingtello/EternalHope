// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.7.3/security/Pausable.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Burnable.sol";

contract EthernalHope is ERC721, ERC721URIStorage, Pausable, Ownable, ERC721Burnable {
    constructor() ERC721("EthernalHope", "EthernalHope") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    uint numMissingPersons;
    struct MissingPerson{
        string name;
        uint race;
        uint hairColor;
        uint eyesColor;
        uint ageNow;
        uint height;
        string missingFrom;
        uint missingSince;
        string uri;
        address familyAddress;
    }

    mapping (uint => MissingPerson) public missingPersons;

    function createMissingPerson(
        string memory name,
        uint race,
        uint hairColor,
        uint eyesColor,
        uint ageNow,
        uint height,
        string memory missingFrom,
        uint256 missingSince, 
        string memory uri,
        address familyAddress
        ) 
       onlyOwner
    public returns 
    (uint missingPersonId) 
     
    {
         missingPersonId = numMissingPersons++; // campaignID is return variable
         MissingPerson storage c = missingPersons[missingPersonId];
         c.name=name;
         c.race= race;
         c.hairColor= hairColor;
         c.eyesColor= eyesColor;
         c.ageNow=ageNow;
         c.height=height;
         c.missingSince=missingSince;
         c.missingFrom=missingFrom;
         c.uri=uri;
         c.familyAddress=familyAddress;

    }

    struct Tracking{
        uint missingPersonId;
        string Status;
        string uri;
    }

    mapping (uint => Tracking) cases;

    function safeMint(address to, uint256 tokenId, string memory uri,uint missingPersonId,string memory status)
        public
        onlyOwner
    {
        Tracking storage c = cases[missingPersonId];
        c.missingPersonId=missingPersonId;
        c.Status= status;
        c.uri=uri;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
