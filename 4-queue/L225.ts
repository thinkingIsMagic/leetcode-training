class MyStack {
    // 队列,只能用入队push，出队shift操作
    queue: number[] = [];
    queue_help: number[] = [];

    constructor() {
        
    }

    push(x: number): void {
        if(this.queue.length === 0){
            this.queue.push(x);
        }else{
            while(this.queue.length > 0){
                this.queue_help.push(this.queue.shift());
            }
            this.queue.push(x);
            while(this.queue_help.length > 0){
                this.queue.push(this.queue_help.shift());
            }
        }
    }

    pop(): number {
        return this.queue.shift();
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */