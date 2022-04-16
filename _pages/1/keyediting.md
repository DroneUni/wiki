---
layout: page
title: Keyediting
---

# Specifications

### Basics
Here is the original key of the Droneboi ship:
<a name="_og_key"></a>
```
UGxheWVyVmVoaWNsZTswfjA7MHwxMnxDb3JlOzB+MDswOzA7LTE7MDswOzA6VDEgV2VkZ2U7MX4xOzA7MDstMTswOzA7MDpUMSBXZWRnZTstMX4xOzkwOzA7LTE7MDswOzA6U2ltcGxlIFRocnVzdGVyOy0xfi0yOzA7MTUwOzA7NjswOzA6U2ltcGxlIFRocnVzdGVyOzF+LTI7MDsxNTA7MDs2OzA7MDpNb21lbnR1bSBXaGVlbDswfjE7MDsxMDA7MDs2OzA7MDpDb25uZWN0b3I7MH4yOzA7MDstMTswOzA7MDpTbWFsbCBCYXR0ZXJ5Oy0xfjA7MDswOy0xOzg7MDswOlNtYWxsIEJhdHRlcnk7MX4wOzA7MDstMTs4OzA7MDpTbWFsbCBGdWVsIFRhbms7LTF+LTE7MDswOy0xOzExOzA7MDpTbWFsbCBGdWVsIFRhbms7MX4tMTswOzA7LTE7MTE7MDswOlQxIEJsb2NrOzB+LTE7MDswOy0xOzA7MDswOg==
```
Now decoded:
<a name="_decoded_og_key"></a>
```
PlayerVehicle;0~0;0|12|Core;0~0;0;0;-1;0;0;0:T1 Wedge;1~1;0;0;-1;0;0;0:T1 Wedge;-1~1;90;0;-1;0;0;0:Simple Thruster;-1~-2;0;150;0;6;0;0:Simple Thruster;1~-2;0;150;0;6;0;0:Momentum Wheel;0~1;0;100;0;6;0;0:Connector;0~2;0;0;-1;0;0;0:Small Battery;-1~0;0;0;-1;8;0;0:Small Battery;1~0;0;0;-1;8;0;0:Small Fuel Tank;-1~-1;0;0;-1;11;0;0:Small Fuel Tank;1~-1;0;0;-1;11;0;0:T1 Block;0~-1;0;0;-1;0;0;0:
```
**All "keys" mentioned here are already decoded.**

<a name="_d_og_key"></a>
Split the key up into its individual blocks
```
PlayerVehicle;0~0;0|
12|
Core;0~0;0;0;-1;0;0;0:
T1 Wedge;1~1;0;0;-1;0;0;0:
T1 Wedge;-1~1;90;0;-1;0;0;0:
Simple Thruster;-1~-2;0;150;0;6;0;0:
Simple Thruster;1~-2;0;150;0;6;0;0:
Momentum Wheel;0~1;0;100;0;6;0;0:
Connector;0~2;0;0;-1;0;0;0:
Small Battery;-1~0;0;0;-1;8;0;0:
Small Battery;1~0;0;0;-1;8;0;0:
Small Fuel Tank;-1~-1;0;0;-1;11;0;0:
Small Fuel Tank;1~-1;0;0;-1;11;0;0:
T1 Block;0~-1;0;0;-1;0;0;0:
```
<a name="_og_key_sections"></a>
<a name="_og_key_meta_sect"></a>
The first 2 sections are meta sections
1. `PlayerVehicle;0~0;0|` indicates the spawn position and rotation `0~0` is the position and the number after that is the rotation
2. `12|` Block count

<a name="_og_key_block_sect"></a>
<a name="_d_og_block"></a>
Then all the sections after that are blocks, step 1: dissect a block
`Core;0~0;0;0;-1;0;0;0:` This is the core block, this will be the example <a name="_d_og_block_example"></a>
1. `Core` is the name of the block<br><a name="_d_og_block-name"></a>
   (Note: `;` is the seperator for block data)
2. `0~0` is the position of the block relative to the middle of the grid (negative values are valid), but this doesn't really matter right now<a name="_d_og_block-pos"></a>
3. After the postion is `0`, the rotation, which you don't need to change unless you're doing special rotations with keyediting <a name="_d_og_block-rotation"></a>
4. Another `0`, this time, its kinda special, its value is normally `0` for blocks.<a name="_d_og_block-power/firing_group"></a><br>
   On weapons, if the value is `0`, it means that it is triggered by the primary firing group; if it is `1`, it means that it is triggered by the secondary firing group.<br>
   On thrusters or momentum wheels, it indicated the power (thrust/force) of the block.
5. `-1` is the control group variable, for normal blocks, its value is `-1`.<a name="_d_og_block-control_group"></a><br>
   For weapons, thrusters or momentum wheels (or just anything that uses control groups), the value is defaulted to `01234`, which indicates the control groups 1,2,3,4,5 can all activate the block.<br>
   So, for example if the block can be activated using 1,2,5 control groups, the value will be `014`.
6. Paint <a name="_d_og_block-paint"></a>
   ```
   White: 0
   Black: 1
   Blue: 2
   Orange: 3
   Red: 4
   Green: 5
   Yellow: 6
   Gift: 7
   Grey: 8
   Pink Swirl: 9
   Yellow&Black Stripes: 10
   Greenish Yellow: 11
   Faded Pink: 12
   Brown Wood: 13
   White Crate: 14 
   ```
7. Thruster input direction, normally 0.  <a name="_d_og_block-input_direction"></a><br>
   Auto=0,Up=1,Down=2,Left=3,Right=4
8. Flip, normally `0`, `1` when flipped.<a name="_d_og_block-flip"></a><br>
   Only the "Medium Crate" and "T1 Wedge 1x2" support the flipped value. All others' values are still 0 when flip is activated since there is no differnece betweem the flipped and unflipped versions.
