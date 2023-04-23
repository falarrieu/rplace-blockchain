// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PixelCanvas is Ownable {
    using SafeMath for uint256;

    struct Pixel {
        uint256 x;
        uint256 y;
        uint8[3] color; // RGB color
        address owner;
    }

    mapping(uint256 => mapping(uint256 => Pixel)) private pixelMap;

    event PixelUpdated(uint256 x, uint256 y, uint8[3] color, address owner);

    function updatePixel(uint256 x, uint256 y, uint8[3] memory color) public {
        require(x < 1000, "X coordinate out of bounds");
        require(y < 1000, "Y coordinate out of bounds");
        pixelMap[x][y] = Pixel(x, y, color, msg.sender);
        emit PixelUpdated(x, y, color, msg.sender);
    }

    function getPixel(uint256 x, uint256 y) public view returns (Pixel memory) {
        require(x < 1000, "X coordinate out of bounds");
        require(y < 1000, "Y coordinate out of bounds");
        return pixelMap[x][y];
    }
}
