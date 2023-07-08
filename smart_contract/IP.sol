// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract IPR {

    // Struct to store details of the intellectual property
    struct Asset {
        address owner;
        string name;
        string description;
        uint timestamp;
    }

    // Mapping to store intellectual property data
    mapping(uint => Asset) assets;

    // Event to signal when a new asset is registered
    event AssetRegistered(uint indexed assetId, address indexed owner, string name, string description, uint timestamp);

    // Event to signal when the ownership of an asset is transferred
    event AssetTransferred(uint indexed assetId, address indexed previousOwner, address indexed newOwner, uint timestamp);

    // Function to register a new asset
    function registerAsset(uint assetId, string memory name, string memory description) public {
        // Ensure that the asset ID has not already been registered
        require(assets[assetId].timestamp == 0, "Asset already registered");

        // Store the asset details in the mapping
        assets[assetId] = Asset(msg.sender, name, description, block.timestamp);

        // Emit an event to signal that the asset has been registered
        emit AssetRegistered(assetId, msg.sender, name, description, block.timestamp);
    }

    // Function to transfer ownership of an asset
    function transferOwnership(uint assetId, address newOwner) public {
        // Ensure that the asset ID has been registered
        require(assets[assetId].timestamp > 0, "Asset not registered");

        // Ensure that the caller is the current owner of the asset
        require(assets[assetId].owner == msg.sender, "Only the current owner can transfer ownership");

        // Ensure that the new owner is not the current owner
        require(newOwner != msg.sender, "New owner cannot be the current owner");

        // Update the owner of the asset in the mapping
        assets[assetId].owner = newOwner;

        // Emit an event to signal that the ownership of the asset has been transferred
        emit AssetTransferred(assetId, msg.sender, newOwner, block.timestamp);
    }

    // Function to retrieve the current owner of an asset
    function getOwner(uint assetId) public view returns (address) {
        // Ensure that the asset ID has been registered
        require(assets[assetId].timestamp > 0, "Asset not registered");

        // Return the current owner of the asset
        return assets[assetId].owner;
    }
}
