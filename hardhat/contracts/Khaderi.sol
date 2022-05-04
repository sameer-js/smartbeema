// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract Khaderi is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    uint256 public volume;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    uint public insuranceFee = 1 ether / 10**3;
    address public owner;
    
    mapping(address=>bool) public whileListedFarmers;
    mapping(address=>bool) public registeredFarmers;
    mapping(address=>bool) public claimedFarmers;

    // request record
    mapping(bytes32=>address) public requestRecords;

    modifier onlyOwner(){
        require(msg.sender == owner, "Error: Only owner");
        _;
    }

    constructor() {
        // setPublicChainlinkToken();
        setPublicChainlinkToken();
        oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
        jobId = "d5270d1c311941d0b08bead21fea7747";
        fee = 0.1 * 10 ** 18; 

        owner = msg.sender;
    }

    function whiteListAddress(address _address) onlyOwner external{
        whileListedFarmers[_address] = true;
    }

    function register() external payable{
        require(whileListedFarmers[msg.sender],"Address was not whiltelisted");
        require(msg.value >= insuranceFee,"Ammount of register fee is not enough");
        require(!registeredFarmers[msg.sender],"Address have already registered");

        registeredFarmers[msg.sender] = true;
    }

    function claimInsurance() public returns (bytes32 requestId) {
        require(registeredFarmers[msg.sender],"Address was not registered");
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
        request.add("get", "https://62650eada55d5055be4e7942.mockapi.io/rain");
        request.add("path", "0,value"); // Chainlink nodes 1.0.0 and later support this format
        
        // Sends the request
        bytes32 reqId = sendChainlinkRequestTo(oracle, request, fee);
        requestRecords[reqId] = msg.sender;

        return reqId;
    }

    receive() external payable {
    }
     
    function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId){
        volume = _volume;
        address claimer =  requestRecords[_requestId]; 
        
        if (volume >= 60){
            payable(claimer).transfer(insuranceFee*3);
        }
    }
}