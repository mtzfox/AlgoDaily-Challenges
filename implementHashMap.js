
/*
Hash maps and hash tables enable us to lookup via keys instead.

Can you implement the Map class from scratch? Only two methods are necessary-- get and set. Many programming languages have a built-in hash or dictionary primitive (like Javascript Objects and {} notation), but we don't want to use that for this exercise.
*/

class Hashmap {
	constructor() {
		this._storage = [];
	}

	set(key,val) {
		let idx = this.hashStr(key);

		if (!this._storage[idx]) {
			this._storage[idx] = [];
		}

		this._storage[idx].push([key,val]);
	}

	get(key) {
		let idx = this.hashStr(key);

		if (!this._storage[idx]) {
			return undefined;
		}

		for (let keyVal of this._storage[idx]) {
			if (keyVal[0] === key) {
				return keyVal[1];
			}
		}
	}

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }
}