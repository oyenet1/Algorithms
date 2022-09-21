for (let i = 0; i < this.nums.length; i++) {
      if (list.includes(this.nums[i])) {
        return true;
      }
      list.push(this.nums[i]);
    }