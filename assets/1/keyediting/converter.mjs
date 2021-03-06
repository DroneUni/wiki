export class Position {
	x=0;
	y=0;
	r=0;
	constructor(x,y,r) {
		this.x=x;
		this.y=y;
		this.r=r;
	}
	toString() {
		return `${this.x}~${this.y};${this.r}`;
	}
	static fromString(str) {
		const a = str.split(';');
		const p = a[0].split('~');
		return new Position(parseInt(p[0],10),parseInt(p[1],10),parseInt(a[1],10));
	}
	static fromArray(a) {
		const p = a[0].split('~');
		return new Position(parseInt(p[0],10),parseInt(p[1],10),parseInt(a[1],10));
	}
}

export class Block {
	name;
	position;
	firingGroup = 0; // 0: primary | 1: secondary
	controlGroups = [];
	paint=0;
	thrusterInDir=0; // thrusterInputDirection
	flip=false;
	constructor() {}
	toString() {
		// Control groups
		let cgStr = "";
		if (this.controlGroups.length!==0) {
			this.controlGroups.forEach(cg=>{
				cgStr+=cg.toString();
			});	
		} else cgStr="-1";
		
		return `${this.name};${this.position.toString()};${this.firingGroup.toString()};${cgStr};${this.paint.toString()};${this.thrusterInDir.toString()};${this.flip?"1":"0"}`;
	}
	static fromKey(str) {
		const block = new Block();
		const v = str.split(';');
				
		block.name = v[0];
		block.position = Position.fromArray(v.slice(1,3));
		block.firingGroup = parseInt(v[3],10);

		// Control groups
		const cgStr = v[4];
		if (cgStr!=="-1") {
			if (cgStr.includes("0")) block.controlGroups.push(0);
			if (cgStr.includes("1")) block.controlGroups.push(1);
			if (cgStr.includes("2")) block.controlGroups.push(2);
			if (cgStr.includes("3")) block.controlGroups.push(3);
			if (cgStr.includes("4")) block.controlGroups.push(4);
		}

		block.paint = parseInt(v[5],10);
		block.thrusterInDir = parseInt(v[6],10);
		block.flip = v[7]==="1";
		
		return block;
	}
}

export class Vehicle {
	position;
	blocks = [];
	get blockCount() {return this.blocks.length;}; 
	constructor(key) {
		const obj = {};
		const decoded = atob(key);

		const sections = decoded.split('|');

		// Spawn offset
		{
			const section = sections[0];
			const parts = section.split(';');
			this.position = Position.fromArray(parts.slice(1,3));
		}
		
		// Blocks
		{
			const section = sections[2];
			const array = section.split(':');
			const blocks = array.slice(0,array.length-1);
			blocks.forEach(blockStr=>{
				this.blocks.push(Block.fromKey(blockStr));
			});
		}
	}
	toString() {
		let blocksStr = "";
		this.blocks.forEach(block=>{
			blocksStr += block.toString()+':';
		})
		return btoa(`PlayerVehicle;${this.position.toString()}|${this.blockCount}|${blocksStr}`);
	}
}
